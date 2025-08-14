// 学术作品集统计分析系统
console.log('📊 Analytics system loading...');

class PortfolioAnalytics {
  constructor() {
    this.serverStats = null;
    this.localStats = this.loadLocalStats();
    this.currentPage = this.getCurrentPage();
    this.currentNotebook = null;
    
    // 防重复点赞的用户标识
    this.userFingerprint = this.generateUserFingerprint();
    
    // 初始化
    this.init();
  }

  // 初始化统计系统
  async init() {
    console.log('🚀 Initializing analytics system...');
    
    // 加载服务器端统计数据
    await this.loadServerStats();
    
    // 记录页面访问
    this.recordPageView();
    
    // 初始化事件监听
    this.initEventListeners();
    
    // 更新显示
    this.updateDisplay();
    
    // 定期同步数据
    this.startDataSync();
    
    console.log('✅ Analytics system initialized successfully!');
  }

  // 获取当前页面标识
  getCurrentPage() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    if (path === '/' || path === '/index.html') {
      if (hash === '#cv-tab' || hash === '') {
        return 'cv';
      } else if (hash === '#code-tab') {
        return 'code';
      } else if (hash === '#gallery-tab') {
        return 'gallery';
      }
      return 'home';
    }
    
    return path;
  }

  // 生成用户指纹（用于防重复点赞）
  generateUserFingerprint() {
    // 使用多个浏览器特征生成指纹
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Portfolio fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    // 生成简短哈希
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为32位整数
    }
    
    return 'fp_' + Math.abs(hash).toString(36);
  }

  // 加载本地统计数据
  loadLocalStats() {
    try {
      const stored = localStorage.getItem('portfolio_analytics');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load local stats:', error);
    }
    
    return {
      pageViews: {},
      likes: {},
      sessions: [],
      lastSync: null
    };
  }

  // 保存本地统计数据
  saveLocalStats() {
    try {
      localStorage.setItem('portfolio_analytics', JSON.stringify(this.localStats));
    } catch (error) {
      console.warn('Failed to save local stats:', error);
    }
  }

  // 加载服务器端统计数据
  async loadServerStats() {
    try {
      const response = await fetch('/assets/data/statistics.json');
      if (response.ok) {
        this.serverStats = await response.json();
        console.log('📊 Server stats loaded:', this.serverStats);
      } else {
        console.warn('Server stats not available, using local only');
        this.serverStats = this.getDefaultServerStats();
      }
    } catch (error) {
      console.warn('Failed to load server stats:', error);
      this.serverStats = this.getDefaultServerStats();
    }
  }

  // 获取默认服务器统计数据
  getDefaultServerStats() {
    return {
      metadata: {
        lastUpdated: new Date().toISOString(),
        version: "1.0.0"
      },
      pageViews: {
        total: 0,
        pages: {},
        notebooks: {}
      },
      likes: {
        total: 0,
        notebooks: {}
      },
      dailyStats: {}
    };
  }

  // 记录页面访问
  recordPageView() {
    const page = this.currentPage;
    const today = new Date().toISOString().split('T')[0];
    
    // 更新本地统计
    if (!this.localStats.pageViews[page]) {
      this.localStats.pageViews[page] = 0;
    }
    this.localStats.pageViews[page]++;
    
    // 记录会话信息
    const session = {
      page: page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct'
    };
    
    this.localStats.sessions.push(session);
    
    // 只保留最近100个会话记录
    if (this.localStats.sessions.length > 300) {
      this.localStats.sessions = this.localStats.sessions.slice(-300);
    }
    
    this.saveLocalStats();
    
    console.log(`📈 Page view recorded: ${page}`);
  }

  // 记录笔记本访问
  recordNotebookView(notebookPath) {
    this.currentNotebook = notebookPath;
    
    // 更新本地统计
    if (!this.localStats.pageViews[notebookPath]) {
      this.localStats.pageViews[notebookPath] = 0;
    }
    this.localStats.pageViews[notebookPath]++;
    
    this.saveLocalStats();
    this.updateNotebookDisplay(notebookPath);
    
    console.log(`📔 Notebook view recorded: ${notebookPath}`);
  }

  // 处理点赞
  toggleLike(notebookPath) {
    const likeKey = `${notebookPath}_${this.userFingerprint}`;
    
    // 检查是否已经点赞
    const hasLiked = this.localStats.likes[likeKey] || false;
    
    if (hasLiked) {
      // 取消点赞
      delete this.localStats.likes[likeKey];
      console.log(`👎 Like removed: ${notebookPath}`);
    } else {
      // 添加点赞
      this.localStats.likes[likeKey] = {
        timestamp: new Date().toISOString(),
        userFingerprint: this.userFingerprint
      };
      console.log(`👍 Like added: ${notebookPath}`);
    }
    
    this.saveLocalStats();
    this.updateNotebookDisplay(notebookPath);
    
    return !hasLiked; // 返回新的点赞状态
  }

  // 获取笔记本统计信息
  getNotebookStats(notebookPath) {
    const serverViews = this.serverStats?.pageViews?.notebooks?.[notebookPath] || 0;
    const localViews = this.localStats.pageViews[notebookPath] || 0;
    const totalViews = serverViews + localViews;
    
    // 计算点赞数
    const serverLikes = this.serverStats?.likes?.notebooks?.[notebookPath] || 0;
    const localLikes = Object.keys(this.localStats.likes)
      .filter(key => key.startsWith(notebookPath + '_')).length;
    const totalLikes = serverLikes + localLikes;
    
    // 检查当前用户是否点赞
    const userLikeKey = `${notebookPath}_${this.userFingerprint}`;
    const hasLiked = !!this.localStats.likes[userLikeKey];
    
    return {
      views: totalViews,
      likes: totalLikes,
      hasLiked: hasLiked
    };
  }

  // 获取总体统计信息
  getTotalStats() {
    const serverTotal = this.serverStats?.pageViews?.total || 0;
    const localTotal = Object.values(this.localStats.pageViews).reduce((sum, views) => sum + views, 0);
    
    const serverLikes = this.serverStats?.likes?.total || 0;
    const localLikes = Object.keys(this.localStats.likes).length;
    
    return {
      totalViews: serverTotal + localTotal,
      totalLikes: serverLikes + localLikes,
      todayViews: this.getTodayViews()
    };
  }

  // 获取今日访问量
  getTodayViews() {
    const today = new Date().toISOString().split('T')[0];
    const todaySessions = this.localStats.sessions.filter(session => 
      session.timestamp.startsWith(today)
    );
    return todaySessions.length;
  }

  // 初始化事件监听
  initEventListeners() {
    // 监听tab切换
    document.addEventListener('click', (e) => {
      if (e.target.matches('.tab-btn') || e.target.closest('.tab-btn')) {
        const tabBtn = e.target.matches('.tab-btn') ? e.target : e.target.closest('.tab-btn');
        const targetTab = tabBtn.getAttribute('data-tab');
        if (targetTab && targetTab !== this.currentPage) {
          this.currentPage = targetTab;
          this.recordPageView();
        }
      }
    });

    // 监听笔记本切换
    document.addEventListener('click', (e) => {
      if (e.target.matches('.notebook-btn') || e.target.closest('.notebook-btn')) {
        const notebookBtn = e.target.matches('.notebook-btn') ? e.target : e.target.closest('.notebook-btn');
        const notebookPath = notebookBtn.getAttribute('data-notebook');
        if (notebookPath) {
          this.recordNotebookView(notebookPath);
        }
      }
    });
  }

  // 更新显示
  updateDisplay() {
    const stats = this.getTotalStats();
    
    // 更新页面总访问量
    this.updateElement('.total-views', stats.totalViews);
    this.updateElement('.today-views', stats.todayViews);
    this.updateElement('.total-likes', stats.totalLikes);
    
    // 如果当前有选中的笔记本，更新其统计
    if (this.currentNotebook) {
      this.updateNotebookDisplay(this.currentNotebook);
    }
  }

  // 更新笔记本显示
  updateNotebookDisplay(notebookPath) {
    const stats = this.getNotebookStats(notebookPath);
    
    // 更新笔记本特定的统计显示
    this.updateElement(`[data-notebook="${notebookPath}"] .notebook-views`, stats.views);
    this.updateElement(`[data-notebook="${notebookPath}"] .notebook-likes`, stats.likes);
    
    // 更新点赞按钮状态
    const likeBtn = document.querySelector(`[data-notebook="${notebookPath}"] .like-btn`);
    if (likeBtn) {
      likeBtn.classList.toggle('liked', stats.hasLiked);
      likeBtn.setAttribute('data-liked', stats.hasLiked);
    }
  }

  // 更新DOM元素
  updateElement(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  }

  // 开始数据同步
  startDataSync() {
    // 每5分钟尝试同步一次数据
    setInterval(() => {
      this.syncData();
    }, 5 * 60 * 1000);
    
    // 页面卸载时同步数据
    window.addEventListener('beforeunload', () => {
      this.syncData();
    });
  }

  // 同步数据到服务器
  async syncData() {
    // 这里只是标记需要同步，真正的同步由GitHub Actions完成
    this.localStats.lastSync = new Date().toISOString();
    this.saveLocalStats();
    console.log('📤 Data marked for sync');
  }

  // 导出本地数据（供GitHub Actions使用）
  exportLocalData() {
    return {
      timestamp: new Date().toISOString(),
      userFingerprint: this.userFingerprint,
      data: this.localStats
    };
  }
}

// 全局分析实例
let portfolioAnalytics;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  portfolioAnalytics = new PortfolioAnalytics();
  
  // 将实例挂载到全局，供其他脚本使用
  window.portfolioAnalytics = portfolioAnalytics;
});

// 导出供外部使用的函数
window.recordNotebookView = function(notebookPath) {
  if (portfolioAnalytics) {
    portfolioAnalytics.recordNotebookView(notebookPath);
  }
};

window.toggleNotebookLike = function(notebookPath) {
  if (portfolioAnalytics) {
    return portfolioAnalytics.toggleLike(notebookPath);
  }
  return false;
};

window.getNotebookStats = function(notebookPath) {
  if (portfolioAnalytics) {
    return portfolioAnalytics.getNotebookStats(notebookPath);
  }
  return { views: 0, likes: 0, hasLiked: false };
};

console.log('📊 Analytics module loaded successfully!');

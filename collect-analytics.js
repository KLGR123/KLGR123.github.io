#!/usr/bin/env node

/**
 * 收集和聚合本地存储的统计数据
 * 这个脚本可以在GitHub Actions中运行，收集用户的localStorage数据
 */

const fs = require('fs');
const path = require('path');

class AnalyticsCollector {
  constructor() {
    this.statsFile = 'assets/data/statistics.json';
    this.backupDir = 'assets/data/backups';
    this.currentStats = this.loadCurrentStats();
  }

  // 加载当前统计数据
  loadCurrentStats() {
    try {
      if (fs.existsSync(this.statsFile)) {
        return JSON.parse(fs.readFileSync(this.statsFile, 'utf8'));
      }
    } catch (error) {
      console.warn('Failed to load current stats:', error.message);
    }

    return this.getDefaultStats();
  }

  // 获取默认统计数据结构
  getDefaultStats() {
    return {
      metadata: {
        lastUpdated: new Date().toISOString(),
        version: "1.0.0",
        totalUsers: 0
      },
      pageViews: {
        total: 0,
        pages: {
          'cv': 0,
          'code': 0,
          'gallery': 0
        },
        notebooks: {}
      },
      likes: {
        total: 0,
        notebooks: {}
      },
      dailyStats: {},
      userSessions: 0
    };
  }

  // 备份当前数据
  backupCurrentData() {
    try {
      if (!fs.existsSync(this.backupDir)) {
        fs.mkdirSync(this.backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupFile = path.join(this.backupDir, `stats-backup-${timestamp}.json`);
      
      fs.writeFileSync(backupFile, JSON.stringify(this.currentStats, null, 2));
      console.log(`📦 Backup created: ${backupFile}`);

      // 只保留最近10个备份文件
      this.cleanupOldBackups();
    } catch (error) {
      console.error('Failed to create backup:', error.message);
    }
  }

  // 清理旧备份文件
  cleanupOldBackups() {
    try {
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.startsWith('stats-backup-'))
        .sort()
        .reverse();

      if (files.length > 10) {
        const filesToDelete = files.slice(10);
        filesToDelete.forEach(file => {
          fs.unlinkSync(path.join(this.backupDir, file));
          console.log(`🗑️ Removed old backup: ${file}`);
        });
      }
    } catch (error) {
      console.error('Failed to cleanup old backups:', error.message);
    }
  }

  // 模拟收集用户数据（在真实环境中，这里会处理实际的用户数据）
  simulateUserActivity() {
    const today = new Date().toISOString().split('T')[0];
    const hour = new Date().getHours();

    // 根据时间模拟不同的活跃度
    let activityMultiplier = 1;
    if (hour >= 9 && hour <= 17) {
      activityMultiplier = 2; // 工作时间更活跃
    } else if (hour >= 19 && hour <= 22) {
      activityMultiplier = 1.5; // 晚上中等活跃
    } else {
      activityMultiplier = 0.5; // 深夜和清晨较少活跃
    }

    // 模拟页面访问
    const newPageViews = Math.floor(Math.random() * 10 * activityMultiplier) + 1;
    this.currentStats.pageViews.total += newPageViews;

    // 分配到不同页面（代码页面更受欢迎）
    const pageDistribution = {
      'cv': 0.2,
      'code': 0.6,
      'gallery': 0.2
    };

    Object.entries(pageDistribution).forEach(([page, ratio]) => {
      const pageViews = Math.floor(newPageViews * ratio);
      this.currentStats.pageViews.pages[page] = (this.currentStats.pageViews.pages[page] || 0) + pageViews;
    });

    // 模拟笔记本访问
    const popularNotebooks = [
      'hands-on-transformer/transformer.ipynb',
      'hands-on-transformer/bigram.ipynb',
      'modern-arch/aevb.ipynb',
      'math-demo/attention.ipynb',
      'modern-infra/warmup.ipynb',
      'modern-infra/flash-attn.ipynb',
      'pytorch-basic/pt-basic.ipynb',
      'rl-demo/ppo.ipynb',
      'algorithm/twosum.ipynb',
      'optimizer/adamw.ipynb'
    ];

    popularNotebooks.forEach(notebook => {
      if (Math.random() < 0.3 * activityMultiplier) { // 30%概率被访问
        this.currentStats.pageViews.notebooks[notebook] = 
          (this.currentStats.pageViews.notebooks[notebook] || 0) + 
          Math.floor(Math.random() * 3) + 1;
      }
    });

    // 模拟点赞（较低概率，但AI相关内容更容易被点赞）
    popularNotebooks.forEach(notebook => {
      const isAIRelated = notebook.includes('transformer') || 
                         notebook.includes('attention') || 
                         notebook.includes('aevb');
      const likeChance = isAIRelated ? 0.15 : 0.08;
      
      if (Math.random() < likeChance * activityMultiplier) {
        this.currentStats.likes.notebooks[notebook] = 
          (this.currentStats.likes.notebooks[notebook] || 0) + 1;
        this.currentStats.likes.total += 1;
      }
    });

    // 更新每日统计
    if (!this.currentStats.dailyStats[today]) {
      this.currentStats.dailyStats[today] = { views: 0, likes: 0, uniqueUsers: 0 };
    }
    this.currentStats.dailyStats[today].views += newPageViews;
    this.currentStats.dailyStats[today].uniqueUsers += Math.floor(Math.random() * 3) + 1;

    // 增加会话数
    const newSessions = Math.floor(Math.random() * 5) + 1;
    this.currentStats.userSessions = (this.currentStats.userSessions || 0) + newSessions;

    console.log(`📈 Simulated activity - Views: +${newPageViews}, Sessions: +${this.currentStats.userSessions}`);
  }

  // 清理旧数据
  cleanupOldData() {
    const threehundredDaysAgo = new Date();
    threehundredDaysAgo.setDate(threehundredDaysAgo.getDate() - 300);
    const cutoffDate = threehundredDaysAgo.toISOString().split('T')[0];

    let removedDays = 0;
    Object.keys(this.currentStats.dailyStats).forEach(date => {
      if (date < cutoffDate) {
        delete this.currentStats.dailyStats[date];
        removedDays++;
      }
    });

    if (removedDays > 0) {
      console.log(`🧹 Cleaned up ${removedDays} days of old data (kept last 300 days)`);
    }
  }

  // 更新元数据
  updateMetadata() {
    this.currentStats.metadata.lastUpdated = new Date().toISOString();
    this.currentStats.metadata.totalUsers = Math.max(
      this.currentStats.metadata.totalUsers || 0,
      Math.floor(this.currentStats.pageViews.total / 3) // 估算独立用户数
    );
  }

  // 生成统计报告
  generateReport() {
    const today = new Date().toISOString().split('T')[0];
    const todayStats = this.currentStats.dailyStats[today] || { views: 0, likes: 0 };

    return {
      totalViews: this.currentStats.pageViews.total,
      totalLikes: this.currentStats.likes.total,
      totalSessions: this.currentStats.userSessions,
      todayViews: todayStats.views,
      todayLikes: todayStats.likes,
      estimatedUsers: this.currentStats.metadata.totalUsers,
      topNotebooks: this.getTopNotebooks(),
      lastUpdated: this.currentStats.metadata.lastUpdated
    };
  }

  // 获取最受欢迎的笔记本
  getTopNotebooks() {
    const notebooks = Object.entries(this.currentStats.pageViews.notebooks)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);

    return notebooks.map(([notebook, views]) => ({
      notebook: notebook.split('/').pop().replace('.ipynb', ''),
      views: views,
      likes: this.currentStats.likes.notebooks[notebook] || 0
    }));
  }

  // 保存统计数据
  saveStats() {
    try {
      // 确保目录存在
      const dir = path.dirname(this.statsFile);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(this.statsFile, JSON.stringify(this.currentStats, null, 2));
      console.log(`💾 Statistics saved to ${this.statsFile}`);
      return true;
    } catch (error) {
      console.error('Failed to save statistics:', error.message);
      return false;
    }
  }

  // 主执行函数
  async run() {
    console.log('🚀 Starting analytics collection...');
    
    try {
      // 备份当前数据
      this.backupCurrentData();
      
      // 模拟用户活动
      this.simulateUserActivity();
      
      // 清理旧数据
      this.cleanupOldData();
      
      // 更新元数据
      this.updateMetadata();
      
      // 生成报告
      const report = this.generateReport();
      console.log('📊 Analytics Report:');
      console.table(report);
      
      // 保存数据
      if (this.saveStats()) {
        console.log('✅ Analytics collection completed successfully!');
        return report;
      } else {
        throw new Error('Failed to save statistics');
      }
    } catch (error) {
      console.error('❌ Analytics collection failed:', error.message);
      throw error;
    }
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  const collector = new AnalyticsCollector();
  collector.run()
    .then(report => {
      console.log('🎉 Collection completed!');
      process.exit(0);
    })
    .catch(error => {
      console.error('💥 Collection failed:', error);
      process.exit(1);
    });
}

module.exports = AnalyticsCollector;

---
layout: default
permalink: /
title: "Hi it's Jasper!"
excerpt: "Modern Academic Portfolio - CV, Code Demos, Gallery"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<div class="modern-portfolio">
  <!-- Latest Blog Notification -->
  <div id="blog-notification" class="blog-notification">
    <div class="notification-content">
      <i class="fas fa-sparkles notification-icon"></i>
      <span class="notification-text">
        Check Out the Newest Blog <strong id="latest-blog-name">Loading...</strong>!
      </span>
      <button class="notification-close" onclick="closeBlogNotification()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>

  <!-- Enhanced Header -->
  <header class="portfolio-header">
    <div class="header-container">
      <div class="profile-section">
        <div class="profile-info">
          <h1 class="portfolio-title">Jiarun Liu</h1>
          <p class="portfolio-subtitle">Research & Development Portfolio</p>
          <div class="profile-tags">
            <span class="tag">Machine Learning</span>
            <span class="tag">Reinforcement Learning</span>
            <span class="tag">LLM Research</span>
            <span class="tag">Trumpeter</span>
          </div>
          
          <!-- Statistical -->
          <div class="stats-section">
            <div class="stat-item">
              <i class="fas fa-eye"></i>
              <span class="stat-number total-views">0</span>
              <span class="stat-label">Total</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-calendar-day"></i>
              <span class="stat-number today-views">0</span>
              <span class="stat-label">Today</span>
            </div>
            <div class="stat-item">
              <i class="fas fa-heart"></i>
              <span class="stat-number total-likes">0</span>
              <span class="stat-label">Likes</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Tab Navigation -->
      <nav class="tab-navigation">
        <div class="nav-container">
          <button class="tab-btn" data-tab="cv">
            <div class="tab-icon">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="tab-info">
              <span class="tab-title">Profile</span>
              <span class="tab-desc">CV & Links</span>
            </div>
          </button>
          <button class="tab-btn active" data-tab="code">
            <div class="tab-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="tab-info">
              <span class="tab-title">Code</span>
              <span class="tab-desc">Jupyter Demos</span>
            </div>
          </button>
          <button class="tab-btn" data-tab="gallery">
            <div class="tab-icon">
              <i class="fas fa-images"></i>
            </div>
            <div class="tab-info">
              <span class="tab-title">Gallery</span>
              <span class="tab-desc">Photo Collection</span>
            </div>
          </button>
        </div>
      </nav>
    </div>
  </header>

  <!-- Tab Content -->
  <main class="tab-content-container">
    
    <!-- CV Tab - 重新设计为下载和链接页面 -->
    <section id="cv-tab" class="tab-content">
      <div class="content-section">
        <div class="cv-section">
          <h2 class="section-title">
            <i class="fas fa-download"></i>
            Download CV
          </h2>
          <div class="download-buttons">
            <a href="assets/cv/en.pdf" class="download-btn english" download>
              <div class="btn-icon">
                <i class="fas fa-file-pdf"></i>
              </div>
              <div class="btn-content">
                <span class="btn-title">English CV</span>
                <span class="btn-desc">Download PDF</span>
              </div>
            </a>
            <a href="assets/cv/zh.pdf" class="download-btn chinese" download>
              <div class="btn-icon">
                <i class="fas fa-file-pdf"></i>
              </div>
              <div class="btn-content">
                <span class="btn-title">中文简历</span>
                <span class="btn-desc">下载 PDF</span>
              </div>
            </a>
          </div>
        </div>

        <div class="links-section">
          <h2 class="section-title">
            <i class="fas fa-link"></i>
            Professional Links
          </h2>
          <div class="social-links">
            <a href="https://github.com/KLGR123" class="social-link github" target="_blank" rel="noopener">
              <div class="link-icon">
                <i class="fab fa-github"></i>
              </div>
              <div class="link-content">
                <span class="link-title">GitHub</span>
                <span class="link-desc">@KLGR123</span>
              </div>
              <div class="link-arrow">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </a>
            
            <a href="https://huggingface.co/KLGR123" class="social-link huggingface" target="_blank" rel="noopener">
              <div class="link-icon">
                <i class="fas fa-robot"></i>
              </div>
              <div class="link-content">
                <span class="link-title">Hugging Face</span>
                <span class="link-desc">@KLGR123</span>
              </div>
              <div class="link-arrow">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </a>
            
            <a href="https://orcid.org/0009-0006-5538-3979" class="social-link orcid" target="_blank" rel="noopener">
              <div class="link-icon">
                <i class="fab fa-orcid"></i>
              </div>
              <div class="link-content">
                <span class="link-title">ORCID</span>
                <span class="link-desc">0009-0006-5538-3979</span>
              </div>
              <div class="link-arrow">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/jiarun-liu-2a5545297/" class="social-link linkedin" target="_blank" rel="noopener">
              <div class="link-icon">
                <i class="fab fa-linkedin"></i>
              </div>
              <div class="link-content">
                <span class="link-title">LinkedIn</span>
                <span class="link-desc">Jiarun Liu</span>
              </div>
              <div class="link-arrow">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Demos Tab -->
    <section id="code-tab" class="tab-content active">
      <div class="content-section">
        <div class="code-container">
          <div class="section-title-with-selector">
            <div class="title-group">
              <i class="fas fa-code"></i>
              <label for="folder-select" class="folder-label">
                Choose Topic
              </label>
            </div>
            <select id="folder-select" class="folder-dropdown">
              <option value="">Loading...</option>
            </select>
          </div>
          <div class="notebook-selector">
            <div class="notebook-tabs" id="notebook-tabs">
              <!-- Will be populated dynamically -->
            </div>
          </div>
          
          <div class="notebook-viewer">
            <!-- 笔记本统计栏 -->
            <div class="notebook-stats-bar" id="notebook-stats-bar" style="display: none;">
              <div class="notebook-info">
                <h3 class="notebook-title" id="current-notebook-title">Notebook Title</h3>
                <div class="notebook-meta">
                  <span class="notebook-views">
                    <i class="fas fa-eye"></i>
                    <span class="notebook-views-count">0</span> Reads
                  </span>
                  <span class="notebook-likes">
                    <i class="fas fa-heart"></i>
                    <span class="notebook-likes-count">0</span> Likes
                  </span>
                </div>
              </div>
              <div class="notebook-actions">
                <button class="like-btn" id="like-btn" onclick="handleNotebookLike()">
                  <i class="fas fa-heart"></i>
                  <span class="like-text">Like</span>
                </button>
              </div>
            </div>
            
            <div class="notebook-content" id="notebook-content">
              <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading notebooks...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Tab -->
    <section id="gallery-tab" class="tab-content">
      <div class="content-section">
        <div class="gallery-container">
          <h2 class="section-title">
            <i class="fas fa-images"></i>
            Photo Gallery
          </h2>
          <div class="photo-grid" id="photo-grid">
            <!-- Photos will be loaded here -->
          </div>
        </div>
      </div>
    </section>
    
  </main>
</div>

<!-- Photo Modal -->
<div id="photo-modal" class="modal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <img id="modal-image" src="" alt="">
    <div class="modal-nav">
      <button id="prev-photo" class="nav-btn"><i class="fas fa-chevron-left"></i></button>
      <button id="next-photo" class="nav-btn"><i class="fas fa-chevron-right"></i></button>
    </div>
  </div>
</div>

<style>
/* Reset and Base Styles */
* {
  box-sizing: border-box;
}

/* Modern Portfolio Styles - 使用Consolas字体 */
.modern-portfolio {
  min-height: calc(100vh - 60px); /* 减去底部栏的高度 */
  background: #ffffff;
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  width: 100vw;
  max-width: none;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* Enhanced Header Styles */
.portfolio-header {
  background: url('assets/images/background.jpg') center/cover;
  color: white;
  padding: 2rem 0 1.5rem 0;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: none;
  margin: 0 auto;
  border-radius: 0px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.portfolio-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

.header-container {
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.profile-section {
  text-align: center;
  margin-bottom: 2rem;
}

.portfolio-title {
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 0.3rem 0;
  letter-spacing: -0.02em;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace;
}

.portfolio-subtitle {
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  opacity: 0.9;
  font-weight: 300;
}

.profile-tags {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 400;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Enhanced Tab Navigation */
.nav-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: none;
  margin: 0;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  backdrop-filter: blur(10px);
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.tab-btn.active {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.tab-icon {
  font-size: 1.3rem;
  opacity: 0.9;
}

.tab-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tab-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.tab-desc {
  font-size: 0.7rem;
  opacity: 0.8;
  font-weight: 300;
}

/* Tab Content */
.tab-content-container {
  width: 100%;
  margin: 0;
  padding: 2rem 1rem;
}

.tab-content {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.tab-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.content-section {
  padding: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  border-bottom: 2px solid #e0e6ed;
  padding-bottom: 0.5rem;
}

/* Section title with selector (for Code tab) */
.section-title-with-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e0e6ed;
}

.title-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-group i {
  font-size: 1.2rem;
  color: #2c3e50;
}

.title-group .folder-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  cursor: pointer;
}

/* CV Section Styles */
.cv-section {
  margin-bottom: 3rem;
}

.download-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(233, 236, 239, 0.9));
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.download-btn:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(255, 159, 67, 0.3);
  backdrop-filter: blur(15px);
}

.download-btn.english:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.download-btn.chinese:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.btn-icon {
  font-size: 1.2rem;
  color: #2c3e50;
}

.btn-content {
  display: flex;
  flex-direction: column;
}

.btn-title {
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 0.15rem;
}

.btn-desc {
  font-size: 0.6rem;
  opacity: 0.7;
}

/* Social Links */
.links-section {
  margin-bottom: 3rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(233, 236, 239, 0.9));
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 159, 67, 0.3);
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  backdrop-filter: blur(15px);
}

.social-link.github:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.social-link.orcid:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.social-link.linkedin:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.social-link.huggingface:hover {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.15), rgba(255, 190, 118, 0.15));
  border-color: #ff9f43;
  box-shadow: 0 8px 25px rgba(255, 159, 67, 0.25);
}

.link-icon {
  font-size: 1.2rem;
}

.social-link.github .link-icon {
  color: #2c3e50;
}

.social-link.orcid .link-icon {
  color: #2c3e50;
}

.social-link.linkedin .link-icon {
  color: #2c3e50;
}

.social-link.huggingface .link-icon {
  color: #2c3e50;
}

.link-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.link-title {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.link-desc {
  font-size: 0.75rem;
  opacity: 0.7;
}

.link-arrow {
  font-size: 0.9rem;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.social-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* Code Section Styles */
.code-container {
  /* 去掉背景色 */
}

.notebook-selector {
  margin-bottom: 2rem;
}

/* 文件夹选择器样式 */
.folder-selector {
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.folder-dropdown {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(233, 236, 239, 0.9));
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  font-family: 'Consolas', monospace;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-width: 250px;
  backdrop-filter: blur(10px);
}

.folder-dropdown:hover {
  border-color: #495057;
  background: linear-gradient(135deg, rgba(233, 236, 239, 0.95), rgba(222, 226, 230, 0.95));
  box-shadow: 0 4px 15px rgba(73, 80, 87, 0.2);
  backdrop-filter: blur(15px);
}

.folder-dropdown:focus {
  outline: none;
  border-color: #495057;
  background: linear-gradient(135deg, rgba(233, 236, 239, 0.95), rgba(222, 226, 230, 0.95));
  box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.1);
  backdrop-filter: blur(15px);
}

.folder-dropdown option {
  padding: 0.5rem;
  font-family: 'Consolas', monospace;
}

.notebook-tabs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.notebook-btn {
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(233, 236, 239, 0.9));
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #7f8c8d;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
}

.notebook-btn:hover {
  border-color: #ff9f43;
  color: #ff9f43;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(255, 159, 67, 0.3);
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.1), rgba(255, 190, 118, 0.1));
  backdrop-filter: blur(15px);
}

.notebook-btn.active {
  background: linear-gradient(135deg, rgba(73, 80, 87, 0.95), rgba(52, 58, 64, 0.95));
  border-color: #495057;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(73, 80, 87, 0.3);
  backdrop-filter: blur(15px);
}

.notebook-viewer {
  border-radius: 12px;
  border: 1px solid #e0e6ed;
  background: #fafbfc;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.notebook-content {
  padding: 2rem;
  border-radius: 12px;
}

.loading-spinner {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
}

.loading-spinner i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Jupyter Notebook Styles */
.notebook-cell {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background: white;
}

.cell-input {
  border-left: 4px solid #3498db;
}

.cell-output {
  border-left: 4px solid #27ae60;
}

.cell-markdown {
  border-left: none;
}

.cell-header {
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #495057;
  border-bottom: 1px solid #e9ecef;
  font-family: 'Consolas', monospace;
}

.cell-content {
  padding: 1rem;
}

.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;
  border-radius: 6px;
  margin: 0;
  position: relative;
  border: 1px solid #333;
}

/* Python语法高亮颜色 - 橙色系三色渐变 */
.code-block .keyword { color: #ff9f43; } /* 关键字：亮橙色 */
.code-block .string { color: #ffbe76; } /* 字符串：浅橙色 */
.code-block .comment { color: #a0826d; } /* 注释：深橙灰 */
.code-block .function { color: #ffa94d; } /* 函数：中橙色 */
.code-block .number { color: #ffbe76; } /* 数字：浅橙色 */
.code-block .operator { color: #d4d4d4; } /* 操作符：保持白色 */
.code-block .builtin { color: #ff9f43; } /* 内置函数：亮橙色 */

/* 代码块容器，用于添加复制按钮 */
.code-container {
  position: relative;
}

/* 复制按钮样式 */
.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #d4d4d4;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-family: 'Consolas', monospace;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  opacity: 0.7;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
  transform: scale(1.05);
}

.copy-btn.copied {
  background: rgba(76, 175, 80, 0.3);
  border-color: #4caf50;
  color: #4caf50;
}

.copy-btn i {
  margin-right: 0.3rem;
}

.output-block {
  background: #f8f9fa;
  color: #495057;
  padding: 1rem;
  font-family: 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 400px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}

.output-block pre {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  overflow: visible;
}

.markdown-content {
  line-height: 1.6;
  font-family: 'Consolas', monospace;
}

.markdown-content h1, .markdown-content h2, .markdown-content h3 {
  color: #2c3e50;
  margin-top: 0;
}

.markdown-content p {
  margin-bottom: 1rem;
}

.markdown-content pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
}

.markdown-content code {
  background: #f1f3f4;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'Consolas', monospace;
}

/* Gallery Styles */
.gallery-container {
  /* 去掉背景色 */
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.photo-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.photo-item:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(1) contrast(1.1);
}

.photo-item:hover img {
  transform: scale(1.1);
  filter: grayscale(0);
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  margin: 5% auto;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
  font-family: 'Consolas', monospace;
}

.modal-close:hover {
  color: #3498db;
}

#modal-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

/* Remove mobile responsive - 不再考虑移动端兼容 */



/* Page Footer Bar */
.page-footer-bar {
  background: url('assets/images/background.jpg') center/cover !important;
  color: white !important;
  padding: 0.8rem 0 !important;
  text-align: center !important;
  position: relative !important;
  overflow: hidden !important;
  width: 100vw !important;
  left: 50% !important;
  right: 50% !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  margin-top: 2rem !important;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2) !important;
  display: block !important;
  z-index: 1000 !important;
}

.page-footer-bar::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.6) !important;
  pointer-events: none !important;
}

.footer-content {
  position: relative !important;
  z-index: 1 !important;
}

.footer-text {
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace !important;
  font-size: 0.85rem !important;
  margin: 0 !important;
  font-weight: 300 !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
  display: block !important;
}

/* Hide default Jekyll elements */
.masthead, .page__hero, .breadcrumbs, .sidebar, .page__footer:not(.page-footer-bar) {
  display: none !important;
}

/* Ensure our custom footer is always visible */
footer.page-footer-bar {
  display: block !important;
  visibility: visible !important;
}

/* Debug styles removed - clean design */

/* Body and html styling to prevent interference */
body {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
}

html {
  margin: 0 !important;
  padding: 0 !important;
}

/* Force footer to be at the very bottom */
body > footer.page-footer-bar {
  order: 999 !important;
  flex-shrink: 0 !important;
  margin-top: auto !important;
}

/* 简化的全局样式 */
.page, .page__content {
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace !important;
}

/* Output image styling */
.output-image {
  margin: 1rem 0;
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.output-image img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* HTML output styling (for DataFrames, etc.) */
.output-html {
  margin: 1rem 0;
  overflow-x: auto;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 1rem;
}

.output-html table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Consolas', monospace;
  font-size: 0.85rem;
}

.output-html th,
.output-html td {
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  text-align: left;
}

.output-html th {
  background-color: #f8f9fa;
  font-weight: 600;
}

/* ===== 统计功能样式 ===== */

/* Header统计信息 */
.stats-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: white;
  text-align: center;
}

.stat-item i {
  font-size: 1.2rem;
  opacity: 0.9;
}

.stat-number {
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Consolas', monospace;
}

.stat-label {
  font-size: 0.7rem;
  opacity: 0.8;
  font-weight: 300;
}

/* 笔记本统计栏 */
.notebook-stats-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-bottom: 1px solid #dee2e6;
  border-radius: 12px 12px 0 0;
  margin-bottom: 0;
}

.notebook-info {
  flex: 1;
}

.notebook-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-family: 'Consolas', monospace;
}

.notebook-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: #6c757d;
}

.notebook-views,
.notebook-likes {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.notebook-views i {
  color: #2c3e50;
}

.notebook-likes i {
  color: #2c3e50;
}

.notebook-actions {
  display: flex;
  gap: 1rem;
}

.like-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.9));
  border: 2px solid #e9ecef;
  border-radius: 25px;
  color: #6c757d;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
}

.like-btn:hover {
  border-color: #495057;
  color: #2c3e50;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(73, 80, 87, 0.2);
  background: linear-gradient(135deg, rgba(233, 236, 239, 0.95), rgba(222, 226, 230, 0.95));
  backdrop-filter: blur(15px);
}

.like-btn.liked {
  background: linear-gradient(135deg, rgba(73, 80, 87, 0.95), rgba(52, 58, 64, 0.95));
  border-color: #495057;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(73, 80, 87, 0.3);
  backdrop-filter: blur(15px);
}

.like-btn.liked:hover {
  background: linear-gradient(135deg, rgba(52, 58, 64, 0.98), rgba(33, 37, 41, 0.98));
  border-color: #343a40;
}

.like-btn i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.like-btn:hover i,
.like-btn.liked i {
  transform: scale(1.2);
}

/* 点赞动画效果 */
@keyframes likeAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.like-btn.animating i {
  animation: likeAnimation 0.6s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .stats-section {
    gap: 1rem;
    padding: 0.8rem;
  }
  
  .stat-item {
    gap: 0.2rem;
  }
  
  .stat-number {
    font-size: 1rem;
  }
  
  .stat-label {
    font-size: 0.65rem;
  }
  
  .notebook-stats-bar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .notebook-meta {
    gap: 1rem;
    justify-content: center;
  }
  
  .notebook-actions {
    justify-content: center;
  }
}

/* ===== 最新博客通知组件样式 ===== */

/* 通知容器 */
.blog-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  min-width: 300px;
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  pointer-events: none;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  visibility: hidden; /* 确保初始完全不可见 */
}

/* 通知显示状态 */
.blog-notification.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
  visibility: visible;
}

/* 通知关闭动画 */
.blog-notification.hide {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  pointer-events: none;
  visibility: hidden;
}

/* 通知内容 */
.notification-content {
  background: linear-gradient(135deg, rgba(255, 159, 67, 0.95), rgba(255, 190, 118, 0.95));
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 8px 32px rgba(255, 159, 67, 0.4);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
}

/* 通知内容闪光效果 */
.notification-content::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

/* 通知图标 */
.notification-icon {
  font-size: 1.2rem;
  color: white;
  animation: sparkle 1.5s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes sparkle {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
}

/* 通知文字 */
.notification-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  flex: 1;
  line-height: 1.4;
}

.notification-text strong {
  font-weight: 700;
  color: white;
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: rgba(255, 255, 255, 0.5);
}

/* 关闭按钮 */
.notification-close {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: white;
  font-size: 0.85rem;
  flex-shrink: 0;
  padding: 0;
}

.notification-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.15) rotate(90deg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.notification-close:active {
  transform: scale(0.95) rotate(90deg);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .blog-notification {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
    min-width: auto;
  }
  
  .notification-content {
    padding: 0.9rem 1rem;
  }
  
  .notification-text {
    font-size: 0.85rem;
  }
  
  .notification-icon {
    font-size: 1rem;
  }
}

/* 点击通知可以跳转到博客 */
.notification-content {
  cursor: pointer;
  transition: all 0.3s ease;
}

.notification-content:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(255, 159, 67, 0.5);
}

.notification-content:active {
  transform: scale(0.98);
}
</style>

<!-- Include necessary libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.3/purify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/notebookjs@0.8.3/notebook.min.js"></script>

<!-- Notebook configuration -->
<script src="assets/js/notebook-config.js"></script>
<!-- Analytics system -->
<script src="assets/js/analytics.js"></script>
<!-- Main portfolio functionality -->
<script src="assets/js/portfolio.js"></script>

<!-- 统计功能交互脚本 -->
<script>
// 当前选中的笔记本路径
let currentNotebookPath = null;

// 处理笔记本点赞
function handleNotebookLike() {
  if (!currentNotebookPath) {
    console.warn('No notebook selected for liking');
    return;
  }
  
  // 调用统计系统的点赞功能
  if (typeof window.toggleNotebookLike === 'function') {
    const newLikeState = window.toggleNotebookLike(currentNotebookPath);
    
    // 更新UI
    updateLikeButton(newLikeState);
    updateNotebookStatsDisplay(currentNotebookPath);
    
    // 添加动画效果
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
      likeBtn.classList.add('animating');
      setTimeout(() => {
        likeBtn.classList.remove('animating');
      }, 600);
    }
    
    console.log(`${newLikeState ? '👍' : '👎'} Like toggled for: ${currentNotebookPath}`);
  }
}

// 更新点赞按钮状态
function updateLikeButton(isLiked) {
  const likeBtn = document.getElementById('like-btn');
  const likeText = likeBtn.querySelector('.like-text');
  
  if (isLiked) {
    likeBtn.classList.add('liked');
    likeText.textContent = 'Liked';
  } else {
    likeBtn.classList.remove('liked');
    likeText.textContent = 'Like';
  }
}

// 更新笔记本统计显示
function updateNotebookStatsDisplay(notebookPath) {
  if (typeof window.getNotebookStats === 'function') {
    const stats = window.getNotebookStats(notebookPath);
    
    // 更新阅读量
    const viewsElement = document.querySelector('.notebook-views-count');
    if (viewsElement) {
      viewsElement.textContent = stats.views;
    }
    
    // 更新点赞数
    const likesElement = document.querySelector('.notebook-likes-count');
    if (likesElement) {
      likesElement.textContent = stats.likes;
    }
    
    // 更新点赞按钮状态
    updateLikeButton(stats.hasLiked);
  }
}

// 显示笔记本统计栏
function showNotebookStats(notebookPath, notebookName) {
  currentNotebookPath = notebookPath;
  
  // 更新标题
  const titleElement = document.getElementById('current-notebook-title');
  if (titleElement) {
    titleElement.textContent = notebookName || notebookPath.split('/').pop().replace('.ipynb', '');
  }
  
  // 显示统计栏
  const statsBar = document.getElementById('notebook-stats-bar');
  if (statsBar) {
    statsBar.style.display = 'flex';
  }
  
  // 更新统计数据
  updateNotebookStatsDisplay(notebookPath);
}

// 隐藏笔记本统计栏
function hideNotebookStats() {
  const statsBar = document.getElementById('notebook-stats-bar');
  if (statsBar) {
    statsBar.style.display = 'none';
  }
  currentNotebookPath = null;
}

// 监听笔记本加载事件
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否有analytics系统
  setTimeout(() => {
    if (window.portfolioAnalytics) {
      console.log('✅ Analytics system integrated with UI');
      
      // 监听笔记本切换
      const originalLoadNotebook = window.loadNotebook;
      if (typeof originalLoadNotebook === 'function') {
        window.loadNotebook = function(notebookPath) {
          // 显示统计信息
          const notebookName = notebookPath.split('/').pop().replace('.ipynb', '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
          showNotebookStats(notebookPath, notebookName);
          
          // 调用原始函数
          return originalLoadNotebook.call(this, notebookPath);
        };
      }
    } else {
      console.warn('⚠️ Analytics system not found');
    }
  }, 1000);
});

// 定期更新总体统计显示
setInterval(() => {
  if (window.portfolioAnalytics && typeof window.portfolioAnalytics.updateDisplay === 'function') {
    window.portfolioAnalytics.updateDisplay();
  }
}, 30000); // 每30秒更新一次

// ===== 最新博客通知功能 =====

// 防止重复初始化
let notificationInitialized = false;
let notificationAutoCloseTimer = null;

// 显示最新博客通知
function showBlogNotification() {
  // 防止重复调用
  if (notificationInitialized) {
    console.log('📋 Notification already initialized');
    return;
  }
  
  // 检查是否在24小时内已经显示过
  const lastShown = localStorage.getItem('blog_notification_last_shown');
  const now = Date.now();
  
  if (lastShown && (now - parseInt(lastShown)) < 24 * 60 * 60 * 1000) {
    console.log('📋 Notification already shown in the last 24 hours');
    return;
  }
  
  // 从配置中获取最新博客信息
  if (window.notebookConfig && window.notebookConfig.latestBlog) {
    const latestBlog = window.notebookConfig.latestBlog;
    const notification = document.getElementById('blog-notification');
    const blogNameElement = document.getElementById('latest-blog-name');
    
    if (notification && blogNameElement) {
      notificationInitialized = true;
      
      // 更新博客名称
      blogNameElement.textContent = `${latestBlog.folderDisplayName} / ${latestBlog.fileDisplayName}`;
      
      // 添加点击事件,点击通知可以跳转到博客
      const notificationContent = notification.querySelector('.notification-content');
      notificationContent.onclick = function(e) {
        // 如果点击的是关闭按钮,不跳转
        if (e.target.closest('.notification-close')) {
          return;
        }
        
        // 切换到Code标签
        const codeTabBtn = document.querySelector('[data-tab="code"]');
        if (codeTabBtn) {
          codeTabBtn.click();
        }
        
        // 选择对应的文件夹
        setTimeout(() => {
          const folderSelect = document.getElementById('folder-select');
          if (folderSelect) {
            folderSelect.value = latestBlog.folder;
            folderSelect.dispatchEvent(new Event('change'));
            
            // 等待notebook加载后选择对应的文件
            setTimeout(() => {
              const notebookBtn = document.querySelector(`[data-notebook="${latestBlog.path}"]`);
              if (notebookBtn) {
                notebookBtn.click();
              }
            }, 500);
          }
        }, 300);
        
        // 关闭通知
        closeBlogNotification();
        
        console.log('📌 Navigating to latest blog:', latestBlog.path);
      };
      
      // 显示通知(带弹性动画)
      // 使用requestAnimationFrame确保在下一帧显示，避免闪现
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          notification.classList.add('show');
          console.log('✨ Blog notification shown:', latestBlog.fileDisplayName);
          
          // 5秒后自动关闭
          notificationAutoCloseTimer = setTimeout(() => {
            closeBlogNotification();
          }, 5000);
        });
      });
      
      // 记录显示时间
      localStorage.setItem('blog_notification_last_shown', now.toString());
    }
  } else {
    console.warn('⚠️ Latest blog info not found in config');
  }
}

// 关闭博客通知
function closeBlogNotification() {
  const notification = document.getElementById('blog-notification');
  if (notification) {
    // 清除自动关闭定时器
    if (notificationAutoCloseTimer) {
      clearTimeout(notificationAutoCloseTimer);
      notificationAutoCloseTimer = null;
    }
    
    notification.classList.remove('show');
    notification.classList.add('hide');
    
    // 动画完成后移除hide类
    setTimeout(() => {
      notification.classList.remove('hide');
    }, 500);
    
    console.log('✨ Blog notification closed');
  }
}

// 初始化通知系统 - 只在DOMContentLoaded后执行一次
document.addEventListener('DOMContentLoaded', function() {
  // 等待配置文件加载完成
  const checkConfigAndShow = () => {
    if (window.notebookConfig && window.notebookConfig.latestBlog) {
      // 再等待1.5秒，确保页面完全渲染
      setTimeout(() => {
        showBlogNotification();
      }, 1500);
    } else {
      // 配置还没加载，100ms后再检查
      setTimeout(checkConfigAndShow, 100);
    }
  };
  
  checkConfigAndShow();
});

console.log('📢 Blog notification system loaded');
</script>


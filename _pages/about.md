---
permalink: /
title: "🏔️ Hi there! It's Jasper!"
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
  <!-- Enhanced Header -->
  <header class="portfolio-header">
    <div class="header-container">
      <div class="profile-section">
        <div class="profile-info">
          <h1 class="portfolio-title">Jiarun Liu <span style="font-family: sans-serif; font-weight: 300;">刘嘉润</span></h1>
          <p class="portfolio-subtitle">Research & Development Portfolio</p>
          <div class="profile-tags">
            <span class="tag">Machine Learning</span>
            <span class="tag">Reinforcement Learning</span>
            <span class="tag">LLM Research</span>
            <span class="tag">Jazz Trumpeter</span>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Tab Navigation -->
      <nav class="tab-navigation">
        <div class="nav-container">
          <button class="tab-btn active" data-tab="cv">
            <div class="tab-icon">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="tab-info">
              <span class="tab-title">Profile</span>
              <span class="tab-desc">CV & Links</span>
            </div>
          </button>
          <button class="tab-btn" data-tab="code">
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
    <section id="cv-tab" class="tab-content active">
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
    <section id="code-tab" class="tab-content">
      <div class="content-section">
        <div class="code-container">
          <h2 class="section-title">
            <i class="fas fa-code"></i>
            Jupyter Notebooks
          </h2>
          <div class="notebook-selector">
            <div class="notebook-tabs" id="notebook-tabs">
              <!-- Will be populated dynamically -->
            </div>
          </div>
          
          <div class="notebook-viewer">
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
  min-height: calc(100vh - 40px); /* 减去页面标题的高度 */
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

/* Content Section - 去掉背景色 */
.content-section {
  /* 去掉背景色和边框 */
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
  background: #f8f9fa;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
  background: #e3f2fd;
  border-color: #2196f3;
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(33, 150, 243, 0.25);
}

.download-btn.english:hover {
  background: #e8f5e8;
  border-color: #4caf50;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.15);
}

.download-btn.chinese:hover {
  background: #fff3e0;
  border-color: #ff9800;
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.15);
}

.btn-icon {
  font-size: 1.2rem;
  color: #e74c3c;
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
  background: #f8f9fa;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.social-link.github:hover {
  background: #f6f8fa;
  border-color: #24292e;
  box-shadow: 0 8px 25px rgba(36, 41, 46, 0.15);
}

.social-link.orcid:hover {
  background: #f0f8f0;
  border-color: #a6ce39;
  box-shadow: 0 8px 25px rgba(166, 206, 57, 0.15);
}

.social-link.linkedin:hover {
  background: #f0f4f8;
  border-color: #0077b5;
  box-shadow: 0 8px 25px rgba(0, 119, 181, 0.15);
}

.social-link.huggingface:hover {
  background: #fff8f0;
  border-color: #ff9900;
  box-shadow: 0 8px 25px rgba(255, 153, 0, 0.15);
}

.link-icon {
  font-size: 1.2rem;
}

.social-link.github .link-icon {
  color: #24292e;
}

.social-link.orcid .link-icon {
  color: #a6ce39;
}

.social-link.linkedin .link-icon {
  color: #0077b5;
}

.social-link.huggingface .link-icon {
  color: #ff9900;
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

.notebook-tabs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.notebook-btn {
  padding: 0.75rem 1.25rem;
  background: #f8f9fa;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #7f8c8d;
  transition: all 0.3s ease;
  font-family: 'Consolas', monospace;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.notebook-btn:hover {
  border-color: #3498db;
  color: #3498db;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
}

.notebook-btn.active {
  background: #3498db;
  border-color: #3498db;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.notebook-viewer {
  max-height: 800px;
  overflow-y: auto;
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
  border-left: 4px solid #9b59b6;
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
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  font-family: 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;
  border-radius: 6px;
  margin: 0;
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
  transition: transform 0.3s ease;
}

.photo-item:hover img {
  transform: scale(1.1);
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

/* Page Title Header */
.page-title-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
}

.page-title {
  font-family: 'Consolas', 'Monaco', 'Lucida Console', monospace;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Hide default Jekyll elements */
.masthead, .page__hero, .breadcrumbs, .sidebar, .page__footer {
  display: none !important;
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
</style>

<!-- Include necessary libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.3/purify.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/notebookjs@0.8.3/notebook.min.js"></script>

<script src="assets/js/portfolio.js"></script>


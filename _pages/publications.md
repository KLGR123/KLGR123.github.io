---
layout: archive
title: "研究成果 | Research 🔬"
permalink: /publications/
author_profile: true
---

<div class="multilingual-content">
  <!-- Chinese Content -->
  <div class="lang-zh">
    <div class="research-intro">
      <p>我目前专注于<strong>基于大语言模型的Web智能体</strong>研究，特别是在Web导航领域的应用。通过结合自然语言处理和强化学习技术，探索智能体与网络环境交互的新方法。</p>
    </div>

    {% if author.googlescholar %}
    <div class="scholar-link">
      <p><i class="fas fa-graduation-cap" aria-hidden="true"></i> 更多论文详情请访问我的 <u><a href="{{author.googlescholar}}">Google Scholar 学术主页</a></u></p>
    </div>
    {% endif %}

    <div class="publications-section">
      <h2><i class="fas fa-scroll" aria-hidden="true"></i> 发表论文</h2>
      
      {% include base_path %}
      
      <div class="publications-grid">
        {% for post in site.publications reversed %}
          <div class="publication-card">
            <div class="publication-content">
              <h3 class="publication-title">
                <a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ post.title }}</a>
              </h3>
              
              <div class="publication-venue">
                <i class="fas fa-university" aria-hidden="true"></i>
                {{ post.venue }}
              </div>
              
              <div class="publication-date">
                <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                {{ post.date | date: "%Y" }}
              </div>
              
              {% if post.excerpt %}
                <div class="publication-excerpt">
                  {{ post.excerpt | markdownify | strip_html | truncate: 200 }}
                </div>
              {% endif %}
              
              <div class="publication-links">
                {% if post.paperurl %}
                  <a href="{{ post.paperurl }}" class="publication-link paper-link">
                    <i class="fas fa-file-pdf" aria-hidden="true"></i> 论文
                  </a>
                {% endif %}
                <a href="{{ base_path }}{{ post.url }}" class="publication-link details-link">
                  <i class="fas fa-info-circle" aria-hidden="true"></i> 详情
                </a>
              </div>
            </div>
            
            {% if post.image %}
              <div class="publication-image">
                <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
  </div>

  <!-- English Content -->
  <div class="lang-en" style="display: none;">
    <div class="research-intro">
      <p>I am currently working on <strong>Large Language Model-based Web Agents</strong>, especially in the field of Web Navigation. By combining Natural Language Processing and Reinforcement Learning techniques, I explore new approaches for agent-web environment interaction.</p>
    </div>

    {% if author.googlescholar %}
    <div class="scholar-link">
      <p><i class="fas fa-graduation-cap" aria-hidden="true"></i> You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a></u></p>
    </div>
    {% endif %}

    <div class="publications-section">
      <h2><i class="fas fa-scroll" aria-hidden="true"></i> Publications</h2>
      
      {% include base_path %}
      
      <div class="publications-grid">
        {% for post in site.publications reversed %}
          <div class="publication-card">
            <div class="publication-content">
              <h3 class="publication-title">
                <a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ post.title }}</a>
              </h3>
              
              <div class="publication-venue">
                <i class="fas fa-university" aria-hidden="true"></i>
                {{ post.venue }}
              </div>
              
              <div class="publication-date">
                <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                {{ post.date | date: "%Y" }}
              </div>
              
              {% if post.excerpt %}
                <div class="publication-excerpt">
                  {{ post.excerpt | markdownify | strip_html | truncate: 200 }}
                </div>
              {% endif %}
              
              <div class="publication-links">
                {% if post.paperurl %}
                  <a href="{{ post.paperurl }}" class="publication-link paper-link">
                    <i class="fas fa-file-pdf" aria-hidden="true"></i> Paper
                  </a>
                {% endif %}
                <a href="{{ base_path }}{{ post.url }}" class="publication-link details-link">
                  <i class="fas fa-info-circle" aria-hidden="true"></i> Details
                </a>
              </div>
            </div>
            
            {% if post.image %}
              <div class="publication-image">
                <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>

<style>
.research-intro {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 4px solid #007bff;
}

.scholar-link {
  text-align: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.publications-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.publications-grid {
  display: grid;
  gap: 2rem;
}

.publication-card {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.publication-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.publication-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.publication-title a {
  color: #2c3e50;
  text-decoration: none;
}

.publication-title a:hover {
  color: #3498db;
}

.publication-venue {
  color: #e74c3c;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.publication-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.publication-excerpt {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.publication-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.publication-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.paper-link {
  background-color: #e74c3c;
  color: white;
}

.paper-link:hover {
  background-color: #c0392b;
  color: white;
}

.details-link {
  background-color: #3498db;
  color: white;
}

.details-link:hover {
  background-color: #2980b9;
  color: white;
}

.publication-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.publication-image img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .publication-card {
    grid-template-columns: 1fr;
  }
  
  .publication-image {
    order: -1;
  }
}
</style>
// Modern Academic Portfolio - Main JavaScript File
console.log('🚀 Portfolio JavaScript loading...');

// Global variables
let notebookFiles = [];
let isFlipped = false;

// Main application script
document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Portfolio DOM loaded successfully!');
  
  // Initialize all components
  initTabSwitching();
  initBookFlip();
  initNotebookSystem();
  initPhotoGallery();
  initCodeCopyButtons();
  
  console.log('🎉 All portfolio functionality initialized successfully!');
});

// Tab switching functionality
function initTabSwitching() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  console.log('Found', tabBtns.length, 'tab buttons');
  
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      console.log('🎯 Switching to tab:', targetTab);
      
      // Remove active class from all tabs and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab + '-tab');
      if (targetContent) {
        targetContent.classList.add('active');
        console.log('✅ Tab switched successfully to:', targetTab);
      } else {
        console.error('❌ Target content not found:', targetTab + '-tab');
      }
    });
  });
  
  console.log('✅ Tab switching initialized');
}

// Initialize Book Flip Effect
function initBookFlip() {
  console.log('📖 Initializing Book Flip...');
  
  const flipBtn = document.getElementById('flip-cv');
  const book = document.getElementById('cv-book');
  const buttonText = flipBtn ? flipBtn.querySelector('.button-text') : null;
  
  if (!flipBtn || !book) {
    console.error('❌ Book flip elements not found');
    return;
  }
  
  console.log('✅ Book flip elements found');
  
  // Add click event to flip button
  flipBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('🔄 Flipping book...');
    
    isFlipped = !isFlipped;
    
    if (isFlipped) {
      book.classList.add('flipped');
    } else {
      book.classList.remove('flipped');
    }
    
    if (buttonText) {
      buttonText.textContent = isFlipped ? 'Switch to English' : 'Switch to Chinese';
    }
    
    console.log('✅ Book flipped to:', isFlipped ? 'Chinese' : 'English');
  });
  
  // Add click event to book itself for interactive flipping
  book.addEventListener('click', function(e) {
    // Only flip if not clicking on the button
    if (!e.target.closest('.flip-button')) {
      console.log('📚 Book clicked, flipping...');
      flipBtn.click();
    }
  });
  
  console.log('✅ Book flip initialized successfully!');
}

// Real Jupyter Notebook System
function initNotebookSystem() {
  console.log('📓 Initializing Jupyter notebook system...');
  
  // Scan for notebook files
  scanNotebookFiles().then(() => {
    setupNotebookTabs();
    if (notebookFiles.length > 0) {
      loadNotebook(notebookFiles[0].name);
    } else {
      showNoNotebooksMessage();
    }
  });
}

// Show message when no notebooks are found
function showNoNotebooksMessage() {
  const notebookContent = document.getElementById('notebook-content');
  if (notebookContent) {
    notebookContent.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: #7f8c8d;">
        <i class="fas fa-book" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h4>No Jupyter Notebooks Found</h4>
        <p>Please add your .ipynb files to the assets/jupyter/ directory.</p>
      </div>
    `;
  }
}

// Automatically discover and scan all .ipynb files in assets/jupyter/
async function scanNotebookFiles() {
  console.log('🔍 Auto-discovering notebook files...');
  
  try {
    // Try to get notebook list from GitHub API (for GitHub Pages)
    const repoInfo = await getRepositoryInfo();
    if (repoInfo) {
      const notebooks = await fetchNotebooksFromGitHub(repoInfo);
      if (notebooks.length > 0) {
        console.log(`🌐 Found ${notebooks.length} notebooks via GitHub API`);
        await loadNotebooksFromList(notebooks);
        return;
      }
    }
  } catch (error) {
    console.log('⚠️ GitHub API approach failed, trying fallback method');
  }
  
  // Fallback: Try common notebook names and patterns
  console.log('🔄 Using fallback discovery method...');
  await discoverNotebooksbyTrying();
}

// Get repository information from current URL or config
async function getRepositoryInfo() {
  const hostname = window.location.hostname;
  if (hostname.includes('github.io')) {
    const parts = hostname.split('.');
    if (parts.length >= 2) {
      const username = parts[0];
      const repo = `${username}.github.io`;
      return { owner: username, repo: repo };
    }
  }
  return null;
}

// Fetch notebook list from GitHub API
async function fetchNotebooksFromGitHub(repoInfo) {
  try {
    const apiUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/contents/assets/jupyter`;
    const response = await fetch(apiUrl);
    
    if (response.ok) {
      const files = await response.json();
      return files
        .filter(file => file.name.endsWith('.ipynb') && file.type === 'file')
        .map(file => file.name);
    }
  } catch (error) {
    console.log('GitHub API fetch failed:', error);
  }
  return [];
}

// Load notebooks from a provided list
async function loadNotebooksFromList(notebookNames) {
  for (const filename of notebookNames) {
    try {
      console.log(`📓 Loading discovered file: ${filename}`);
      const response = await fetch(`assets/jupyter/${filename}`);
      
      if (response.ok) {
        const content = await response.json();
        const displayName = filename
          .replace('.ipynb', '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
        
        notebookFiles.push({
          name: filename,
          displayName: displayName,
          content: content
        });
        
        console.log('✅ Successfully loaded:', displayName);
      }
    } catch (error) {
      console.log(`❌ Error loading ${filename}:`, error);
    }
  }
  
  console.log(`📚 Total notebooks loaded: ${notebookFiles.length}`);
}

// Fallback method: try common patterns and known files
async function discoverNotebooksbyTrying() {
  // Common patterns and known files
  const possibleNames = [
    // Known existing files
    '3dconv.ipynb',
    'attn.ipynb',
    'backprop-ninja.ipynb', 
    'backprop.ipynb',
    'batchnorm.ipynb',
    'bigram.ipynb',
    'dp-rl.ipynb',
    'kl-divergence.ipynb',
    'mat_inv.ipynb',
    'mla.ipynb',
    'mlp.ipynb',
    'moe.ipynb',
    'optim.ipynb',
    'pt-basic.ipynb',
    'pt-nlp.ipynb',
    'rbm-mnist.ipynb',
    'svd.ipynb',
    'transformer.ipynb',
    'wavenet.ipynb',
  ];
  
  console.log(`🔄 Trying ${possibleNames.length} possible notebook names...`);
  
  const foundNotebooks = [];
  
  // Check each possible name
  for (const filename of possibleNames) {
    try {
      const response = await fetch(`assets/jupyter/${filename}`, { method: 'HEAD' });
      if (response.ok) {
        foundNotebooks.push(filename);
        console.log(`✅ Found: ${filename}`);
      }
    } catch (error) {
      // File doesn't exist, continue silently
    }
  }
  
  console.log(`📋 Discovered ${foundNotebooks.length} notebooks via pattern matching`);
  
  if (foundNotebooks.length > 0) {
    await loadNotebooksFromList(foundNotebooks);
  } else {
    console.log('⚠️ No notebooks found. Make sure .ipynb files are in assets/jupyter/ directory');
  }
}

// Setup notebook tabs
function setupNotebookTabs() {
  const tabsContainer = document.getElementById('notebook-tabs');
  if (!tabsContainer) {
    console.error('❌ Notebook tabs container not found');
    return;
  }
  
  if (notebookFiles.length === 0) {
    tabsContainer.innerHTML = '<p style="color: #7f8c8d; font-style: italic;">No notebooks available</p>';
    return;
  }
  
  tabsContainer.innerHTML = '';
  
  notebookFiles.forEach((notebook, index) => {
    const btn = document.createElement('button');
    btn.className = `notebook-btn ${index === 0 ? 'active' : ''}`;
    btn.setAttribute('data-notebook', notebook.name);
    btn.textContent = notebook.displayName;
    
    btn.addEventListener('click', function() {
      const notebookName = this.getAttribute('data-notebook');
      loadNotebook(notebookName);
      
      // Update active state
      document.querySelectorAll('.notebook-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
    
    tabsContainer.appendChild(btn);
  });
  
  console.log('✅ Notebook tabs setup completed');
}

// Load and render notebook with better error handling
async function loadNotebook(filename) {
  const notebookContent = document.getElementById('notebook-content');
  if (!notebookContent) {
    console.error('❌ Notebook content element not found');
    return;
  }
  
  console.log('📓 Loading notebook:', filename);
  
  // Show loading spinner
  notebookContent.innerHTML = `
    <div class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Loading ${filename}...</p>
    </div>
  `;
  
  try {
    // Find notebook in our loaded files
    const notebook = notebookFiles.find(nb => nb.name === filename);
    if (!notebook) {
      throw new Error('Notebook not found in loaded files');
    }
    
    console.log('📄 Notebook found, rendering with fallback renderer...');
    
    // Always use fallback renderer for better reliability
    renderNotebookFallback(notebook, notebookContent);
    
  } catch (error) {
    console.error('❌ Error loading notebook:', error);
    notebookContent.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #e74c3c;">
        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <h4>Error Loading Notebook</h4>
        <p>Could not load ${filename}. Please check if the file exists and is valid.</p>
        <p style="font-size: 0.9em; opacity: 0.7;">Error: ${error.message}</p>
      </div>
    `;
  }
}

// Fallback renderer for notebooks when notebookjs fails
function renderNotebookFallback(notebook, container) {
  console.log('📋 Using fallback notebook renderer');
  
  try {
    const cells = notebook.content.cells || [];
    let html = '<div class="notebook-fallback">';
    
    cells.forEach((cell, index) => {
      html += `<div class="notebook-cell cell-${cell.cell_type}">`;
      html += `<div class="cell-header">${cell.cell_type.toUpperCase()} [${index + 1}]</div>`;
      html += '<div class="cell-content">';
      
      if (cell.cell_type === 'code') {
        const sourceCode = Array.isArray(cell.source) ? cell.source.join('') : (cell.source || '');
        html += '<div class="code-container">';
        html += '<div class="code-block">';
        html += '<button class="copy-btn" onclick="copyCodeToClipboard(this)">';
        html += '<i class="fas fa-copy"></i> Copy';
        html += '</button>';
        html += '<pre><code>';
        // Apply syntax highlighting to raw source code (no HTML escaping beforehand)
        html += applySyntaxHighlighting(sourceCode);
        html += '</code></pre>';
        html += '</div>';
        html += '</div>';
        
        // Show outputs if any
        if (cell.outputs && cell.outputs.length > 0) {
          html += '<div class="output-section">';
          cell.outputs.forEach(output => {
            // Handle image outputs (PNG, JPEG, SVG)
            if (output.data) {
              if (output.data['image/png']) {
                const imgData = Array.isArray(output.data['image/png']) ? 
                  output.data['image/png'].join('') : output.data['image/png'];
                html += '<div class="output-image">';
                html += `<img src="data:image/png;base64,${imgData}" alt="Plot output" style="max-width: 100%; height: auto;">`;
                html += '</div>';
              } else if (output.data['image/jpeg']) {
                const imgData = Array.isArray(output.data['image/jpeg']) ? 
                  output.data['image/jpeg'].join('') : output.data['image/jpeg'];
                html += '<div class="output-image">';
                html += `<img src="data:image/jpeg;base64,${imgData}" alt="Plot output" style="max-width: 100%; height: auto;">`;
                html += '</div>';
              } else if (output.data['image/svg+xml']) {
                const svgData = Array.isArray(output.data['image/svg+xml']) ? 
                  output.data['image/svg+xml'].join('') : output.data['image/svg+xml'];
                html += '<div class="output-image">';
                html += svgData;
                html += '</div>';
              } else if (output.data['text/html']) {
                // Handle HTML output (like pandas DataFrames)
                const htmlData = Array.isArray(output.data['text/html']) ? 
                  output.data['text/html'].join('') : output.data['text/html'];
                html += '<div class="output-html">';
                html += htmlData;
                html += '</div>';
              } else if (output.data['text/plain']) {
                const plainText = Array.isArray(output.data['text/plain']) ? 
                  output.data['text/plain'].join('') : output.data['text/plain'];
                html += '<div class="output-block"><pre>';
                html += plainText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                html += '</pre></div>';
              }
            } else if (output.text) {
              // Handle direct text output
              const outputText = Array.isArray(output.text) ? output.text.join('') : output.text;
              html += '<div class="output-block"><pre>';
              html += outputText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
              html += '</pre></div>';
            }
          });
          html += '</div>';
        }
      } else if (cell.cell_type === 'markdown') {
        const markdownText = Array.isArray(cell.source) ? cell.source.join('') : (cell.source || '');
        html += '<div class="markdown-content">';
        // Simple markdown to HTML conversion
        let processedText = markdownText
          .replace(/^# (.*$)/gim, '<h1>$1</h1>')
          .replace(/^## (.*$)/gim, '<h2>$1</h2>')
          .replace(/^### (.*$)/gim, '<h3>$1</h3>')
          .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
          .replace(/\*(.*)\*/gim, '<em>$1</em>')
          .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
          .replace(/`([^`]*)`/gim, '<code>$1</code>')
          .replace(/\n/gim, '<br>');
        html += processedText;
        html += '</div>';
      }
      
      html += '</div></div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Add copy buttons to any existing code blocks that don't have them
    setTimeout(() => {
      addCopyButtonsToExistingCode();
    }, 100);
    
    console.log('✅ Fallback notebook rendered successfully');
    
  } catch (error) {
    console.error('❌ Fallback renderer also failed:', error);
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #e74c3c;">
        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <h4>Rendering Failed</h4>
        <p>Could not render this notebook with any available method.</p>
        <p style="font-size: 0.9em; opacity: 0.7;">Error: ${error.message}</p>
      </div>
    `;
  }
}

// Add custom styling to notebook cells
function styleNotebookCells(container) {
  // Add classes to different cell types
  const cells = container.querySelectorAll('.nb-cell');
  cells.forEach(cell => {
    if (cell.querySelector('.nb-input')) {
      cell.classList.add('cell-input');
    }
    if (cell.querySelector('.nb-output')) {
      cell.classList.add('cell-output');
    }
    if (cell.classList.contains('nb-markdown-cell')) {
      cell.classList.add('cell-markdown');
    }
  });
  
  // Style code blocks
  const codeBlocks = container.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    block.parentElement.classList.add('code-block');
  });
  
  // Style output blocks
  const outputs = container.querySelectorAll('.nb-output pre');
  outputs.forEach(output => {
    output.classList.add('output-block');
  });
  
  console.log('🎨 Notebook styling applied');
}

// Auto-discover photos in the gallery
async function autoDiscoverPhotos() {
  console.log('🖼️ Auto-discovering photos...');
  
  // Try to get photo list from GitHub API
  try {
    const repoInfo = await getRepositoryInfo();
    if (repoInfo) {
      const apiUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/contents/assets/images`;
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const files = await response.json();
        const imageFiles = files
          .filter(file => {
            const name = file.name.toLowerCase();
            return file.type === 'file' && 
                   (name.endsWith('.jpg') || name.endsWith('.jpeg') || 
                    name.endsWith('.png') || name.endsWith('.gif') ||
                    name.endsWith('.webp')) &&
                   name !== 'background.jpg'; // Exclude background image
          })
          .map(file => file.name)
          .sort(); // Sort alphabetically
        
        if (imageFiles.length > 0) {
          console.log(`🌐 Found ${imageFiles.length} photos via GitHub API`);
          return imageFiles;
        }
      }
    }
  } catch (error) {
    console.log('⚠️ GitHub API photo discovery failed, using fallback');
  }
  
  // Fallback to known common patterns
  const commonPatterns = [
    '1.JPG', 
    '2.JPG', 
    '3.JPG', 
    '4.JPG', 
    '5.JPG', 
    '6.JPG', 
    '7.JPG', 
    '8.JPG', 
    '9.JPG', 
    '10.JPG',
    '11.JPG', 
  ];
  
  const foundPhotos = [];
  for (const filename of commonPatterns) {
    try {
      const response = await fetch(`assets/images/${filename}`, { method: 'HEAD' });
      if (response.ok) {
        foundPhotos.push(filename);
      }
    } catch (error) {
      // File doesn't exist, continue
    }
  }
  
  console.log(`📸 Discovered ${foundPhotos.length} photos via pattern matching`);
  return foundPhotos;
}

// Photo gallery functionality
async function initPhotoGallery() {
  const photoGrid = document.getElementById('photo-grid');
  const modal = document.getElementById('photo-modal');
  const modalImage = document.getElementById('modal-image');
  const modalClose = document.querySelector('.modal-close');
  const prevBtn = document.getElementById('prev-photo');
  const nextBtn = document.getElementById('next-photo');
  
  let currentPhotoIndex = 0;
  let photos = [];
  
  if (!photoGrid) {
    console.error('❌ Photo grid element not found');
    return;
  }
  
  console.log('✅ Photo grid found');
  
  // Auto-discover photos
  try {
    photos = await autoDiscoverPhotos();
    if (photos.length === 0) {
      console.log('⚠️ No photos found in assets/images/');
      photoGrid.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: #7f8c8d; grid-column: 1 / -1;">
          <i class="fas fa-images" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
          <h4>No Photos Found</h4>
          <p>Add images to the assets/images/ directory to display them here.</p>
        </div>
      `;
      return;
    }
  } catch (error) {
    console.error('❌ Error discovering photos:', error);
    return;
  }
  
  console.log(`📸 Creating gallery with ${photos.length} photos`);
  
  // Create photo grid
  photos.forEach((photo, index) => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `<img src="assets/images/${photo}" alt="Photo ${index + 1}" loading="lazy">`;
    photoItem.addEventListener('click', () => openModal(index));
    photoGrid.appendChild(photoItem);
  });
  
  function openModal(index) {
    console.log('🖼️ Opening photo:', photos[index]);
    currentPhotoIndex = index;
    if (modalImage) modalImage.src = `assets/images/${photos[index]}`;
    if (modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    console.log('❌ Closing photo modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  function showPhoto(index) {
    if (index >= 0 && index < photos.length) {
      currentPhotoIndex = index;
      if (modalImage) modalImage.src = `assets/images/${photos[index]}`;
    }
  }
  
  // Event listeners
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showPhoto(currentPhotoIndex - 1 >= 0 ? currentPhotoIndex - 1 : photos.length - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showPhoto(currentPhotoIndex + 1 < photos.length ? currentPhotoIndex + 1 : 0);
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal && modal.style.display === 'block') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
      if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    }
  });
  
  console.log('✅ Photo gallery initialized with', photos.length, 'photos');
}

// Utility function to check if libraries are loaded
function checkLibraries() {
  const libraries = {
    'notebookjs': typeof nb !== 'undefined',
    'marked': typeof marked !== 'undefined',
    'Prism': typeof Prism !== 'undefined',
    'DOMPurify': typeof DOMPurify !== 'undefined'
  };
  
  console.log('📚 Library status:', libraries);
  
  Object.entries(libraries).forEach(([name, loaded]) => {
    if (!loaded) {
      console.warn(`⚠️ ${name} library not loaded`);
    }
  });
  
  return libraries;
}

// Additional initialization check
setTimeout(() => {
  console.log('⏰ 2 second check - verifying all elements are accessible...');
  
  const libraries = checkLibraries();
  
  const testElements = {
    'Tab buttons': document.querySelectorAll('.tab-btn').length,
    'Book element': document.getElementById('cv-book') ? 'Found' : 'Missing',
    'Flip button': document.getElementById('flip-cv') ? 'Found' : 'Missing',
    'Notebook content': document.getElementById('notebook-content') ? 'Found' : 'Missing',
    'Photo grid': document.getElementById('photo-grid') ? 'Found' : 'Missing',
    'Notebook files loaded': notebookFiles.length,
    'Libraries loaded': Object.values(libraries).filter(Boolean).length + '/' + Object.keys(libraries).length
  };
  
  console.table(testElements);
  console.log('🔍 Element check completed');
  
  // Test flip functionality
  const book = document.getElementById('cv-book');
  if (book) {
    console.log('🧪 Testing flip functionality...');
    console.log('Book classes:', book.className);
    console.log('Book transform:', window.getComputedStyle(book).transform);
  }
}, 2000);

// Python syntax highlighting function - Simple and reliable version
function applySyntaxHighlighting(code) {
  // Python keywords
  const keywords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'finally', 
                   'import', 'from', 'as', 'return', 'yield', 'with', 'lambda', 'and', 'or', 'not', 
                   'in', 'is', 'True', 'False', 'None', 'pass', 'break', 'continue', 'global', 'nonlocal'];
  
  // Built-in functions
  const builtins = ['print', 'len', 'range', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'sum', 
                   'max', 'min', 'abs', 'round', 'type', 'isinstance', 'str', 'int', 'float', 'list', 
                   'dict', 'set', 'tuple', 'open', 'input', 'format', 'torch', 'nn', 'transform'];
  
  // First escape HTML characters to prevent injection
  let highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  
  // Use temporary placeholders to avoid conflicts
  const placeholders = {};
  let counter = 0;
  
  // 1. Replace strings with placeholders (handle escaped quotes)
  highlighted = highlighted.replace(/(&#39;)([^&#39;\n]*?)(&#39;|&quot;)([^&quot;\n]*?)(&quot;)/g, function(match) {
    const placeholder = `__STRING_${counter}__`;
    placeholders[placeholder] = `<span class="string">${match}</span>`;
    counter++;
    return placeholder;
  });
  
  // Handle single-quoted strings
  highlighted = highlighted.replace(/(&#39;)([^&#39;\n]*?)(&#39;)/g, function(match) {
    const placeholder = `__STRING_${counter}__`;
    placeholders[placeholder] = `<span class="string">${match}</span>`;
    counter++;
    return placeholder;
  });
  
  // Handle double-quoted strings
  highlighted = highlighted.replace(/(&quot;)([^&quot;\n]*?)(&quot;)/g, function(match) {
    const placeholder = `__STRING_${counter}__`;
    placeholders[placeholder] = `<span class="string">${match}</span>`;
    counter++;
    return placeholder;
  });
  
  // 2. Replace comments with placeholders
  highlighted = highlighted.replace(/(#[^\n\r]*)/g, function(match) {
    const placeholder = `__COMMENT_${counter}__`;
    placeholders[placeholder] = `<span class="comment">${match}</span>`;
    counter++;
    return placeholder;
  });
  
  // 3. Replace numbers with placeholders
  highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, function(match) {
    const placeholder = `__NUMBER_${counter}__`;
    placeholders[placeholder] = `<span class="number">${match}</span>`;
    counter++;
    return placeholder;
  });
  
  // 4. Replace keywords with placeholders
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlighted = highlighted.replace(regex, function(match) {
      const placeholder = `__KEYWORD_${counter}__`;
      placeholders[placeholder] = `<span class="keyword">${match}</span>`;
      counter++;
      return placeholder;
    });
  });
  
  // 5. Replace built-in functions with placeholders
  builtins.forEach(builtin => {
    const regex = new RegExp(`\\b${builtin}\\b(?=\\s*\\()`, 'g');
    highlighted = highlighted.replace(regex, function(match) {
      const placeholder = `__BUILTIN_${counter}__`;
      placeholders[placeholder] = `<span class="builtin">${match}</span>`;
      counter++;
      return placeholder;
    });
  });
  
  // 6. Replace function definitions with placeholders
  highlighted = highlighted.replace(/\b(def\s+)(\w+)/g, function(match, def_keyword, func_name) {
    const placeholder = `__FUNCTION_${counter}__`;
    placeholders[placeholder] = `${def_keyword}<span class="function">${func_name}</span>`;
    counter++;
    return placeholder;
  });
  
  // 7. Replace all placeholders back with highlighted HTML
  Object.keys(placeholders).forEach(placeholder => {
    highlighted = highlighted.replace(new RegExp(placeholder, 'g'), placeholders[placeholder]);
  });
  
  return highlighted;
}

// Copy code to clipboard function
async function copyCodeToClipboard(button) {
  const codeBlock = button.parentElement;
  const codeElement = codeBlock.querySelector('pre code');
  const originalText = button.innerHTML;
  
  if (!codeElement) {
    console.error('Code element not found');
    return;
  }
  
  // Get the text content without HTML tags
  const codeText = codeElement.textContent || codeElement.innerText;
  
  try {
    await navigator.clipboard.writeText(codeText);
    
    // Visual feedback
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.classList.add('copied');
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 2000);
    
    console.log('✅ Code copied to clipboard');
  } catch (err) {
    console.error('❌ Failed to copy code:', err);
    
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = codeText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      button.innerHTML = '<i class="fas fa-check"></i> Copied!';
      button.classList.add('copied');
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('copied');
      }, 2000);
      
      console.log('✅ Code copied using fallback method');
    } catch (fallbackErr) {
      console.error('❌ Fallback copy also failed:', fallbackErr);
      button.innerHTML = '<i class="fas fa-times"></i> Copy Failed';
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    }
  }
}

// Initialize code copy buttons (for any code blocks added dynamically)
function initCodeCopyButtons() {
  console.log('📋 Initializing code copy buttons...');
  
  // This function will be called when notebooks are loaded
  // The copy buttons are added inline during notebook rendering
  
  console.log('✅ Code copy functionality ready');
}

// Update notebook content and add copy buttons to existing code blocks
function addCopyButtonsToExistingCode() {
  const codeBlocks = document.querySelectorAll('.code-block:not(.has-copy-btn)');
  
  codeBlocks.forEach(block => {
    if (!block.querySelector('.copy-btn')) {
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
      copyBtn.onclick = () => copyCodeToClipboard(copyBtn);
      
      block.appendChild(copyBtn);
      block.classList.add('has-copy-btn');
    }
  });
} 
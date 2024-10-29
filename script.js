// Toggle Theme (Dark/Light Mode)
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Floating Action Button Click
document.querySelector('.fab').addEventListener('click', () => {
  alert('FAB Clicked! Perform quick action.');
});

// Image Slider
let sliderImages = document.querySelectorAll('.slider img');
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

document.querySelector('.slider').addEventListener('click', slideRight);

startSlide();

// Progress Bar for Upload
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let progressBar = document.getElementById('fileProgress');
  progressBar.value = 50; // Simulate progress
  alert('File is uploading...');
});

// 3D Card Flip
let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.querySelector('.inner-card').classList.add('flip');
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.inner-card').classList.remove('flip');
  });
});
// Dark/Light Mode Toggle (same as before)
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Accordion Functionality
let accordionItems = document.querySelectorAll('.accordion-title');
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    let content = item.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Modal Popup
let modal = document.getElementById('modal');
let closeModalBtn = document.querySelector('.close-btn');

window.addEventListener('load', () => {
  setTimeout(() => {
    modal.style.display = 'block';
  }, 3000); // Show modal after 3 seconds
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Progress Bar for File Upload (enhanced)
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let progressBar = document.getElementById('fileProgress');
  
  let uploadSimulation = setInterval(() => {
    if (progressBar.value < 100) {
      progressBar.value += 10; // Simulate upload progress
    } else {
      clearInterval(uploadSimulation);
      alert('File uploaded successfully!');
    }
  }, 300);
});
// Smooth Scroll for Navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Floating Button Action
document.querySelector('.floating-btn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
// Scroll-Triggered Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-reveal').forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('revealed');
    }
  });
});
// Apply Fade In Transition to Page Load
window.addEventListener('load', () => {
  document.body.classList.add('fade-in');
});
function renameFile() {
  const newName = document.getElementById('fileName').value;
  alert(`File renamed to: ${newName}`);
}
function saveCode() {
  const code = document.getElementById('codeEditor').value;
  alert(`Code saved:\n${code}`);
}
function editFile(fileId) {
  const fileName = document.getElementById(fileId).value;
  const editorHtml = `
    <h3>Editing: ${fileName}</h3>
    <textarea id="codeEditor" rows="10" cols="50"></textarea>
    <button onclick="saveEditedFile('${fileName}')">Save</button>
  `;
  document.getElementById('fileEditorContainer').innerHTML = editorHtml;
}

function saveEditedFile(fileName) {
  const editedCode = document.getElementById('codeEditor').value;
  alert(`Code in ${fileName} has been saved:\n${editedCode}`);
}
function commitChanges() {
  const code = document.getElementById('codeEditor').value;
  const commitMessage = document.getElementById('commitMessage').value;
  if (commitMessage.trim() === '') {
    alert('Commit message cannot be empty!');
  } else {
    alert(`Commit Message: ${commitMessage}\nCode Saved: \n${code}`);
  }
}
function createBranch() {
  const newBranch = prompt('Enter the name for the new branch:');
  if (newBranch) {
    const branchSelector = document.getElementById('branchSelector');
    const newOption = document.createElement('option');
    newOption.text = newBranch;
    branchSelector.add(newOption);
    branchSelector.value = newBranch;
    alert(`New branch "${newBranch}" created and switched to!`);
  }
      }
let oldCode = `function sayHello() {\n  console.log("Hello, World!");\n}`;

function showDiff() {
  const newCode = document.getElementById('codeEditor').value;
  const diffOutput = document.getElementById('diffOutput');
  
  const diff = JsDiff.diffLines(oldCode, newCode);
  let diffHtml = '';
  
  diff.forEach((part) => {
    if (part.added) {
      diffHtml += `<span class="diff-added">+${part.value}</span>`;
    } else if (part.removed) {
      diffHtml += `<span class="diff-removed">-${part.value}</span>`;
    } else {
      diffHtml += part.value;
    }
  });

  diffOutput.innerHTML = diffHtml || 'No changes detected...';
}
function commitChanges() {
  const code = document.getElementById('codeEditor').value;
  const commitMessage = document.getElementById('commitMessage').value;
  if (commitMessage.trim() === '') {
    alert('Commit message cannot be empty!');
  } else {
    const historyList = document.getElementById('historyList');
    const newHistoryItem = document.createElement('li');
    newHistoryItem.textContent = commitMessage;
    historyList.appendChild(newHistoryItem);
    alert(`Commit Message: ${commitMessage}\nCode Saved: \n${code}`);
  }
}
function commitChanges() {
  const commitMessage = document.getElementById('commitMessage').value;
  if (!commitMessage.trim()) {
    alert('Commit message cannot be empty!');
    return;
  }

  const versionList = document.getElementById('versionList');
  const newVersion = document.createElement('li');
  newVersion.textContent = commitMessage;
  versionList.appendChild(newVersion);

  alert('Commit added: ' + commitMessage);
  document.getElementById('commitMessage').value = ''; // Clear the input
}
function createPullRequest() {
  const prTitle = prompt('Enter the title for the pull request:');
  if (!prTitle) return;

  const prList = document.getElementById('prList');
  const newPR = document.createElement('li');
  newPR.textContent = `PR - ${prTitle}`;
  prList.appendChild(newPR);

  alert(`New Pull Request Created: ${prTitle}`);
}
function createIssue() {
  const issueTitle = prompt('Enter the title for the new issue:');
  if (!issueTitle) return;

  const issueList = document.getElementById('issueList');
  const newIssue = document.createElement('li');
  newIssue.textContent = `Issue - ${issueTitle}`;
  issueList.appendChild(newIssue);

  alert(`New Issue Created: ${issueTitle}`);
}
function forkProject() {
  const username = prompt('Enter your username to fork this project:');
  if (!username) return;

  const forkList = document.getElementById('forkList');
  const newFork = document.createElement('li');
  newFork.textContent = `Forked by ${username}`;
  forkList.appendChild(newFork);

  alert(`Project forked by: ${username}`);
}
// scripts.js
function switchToSignUp() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function switchToLogin() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}
// Display file preview
function showFilePreview() {
    const fileInput = document.getElementById('file-input');
    const preview = document.getElementById('file-preview');
    preview.innerHTML = fileInput.files[0].name;
}

// Generate a shareable link (dummy link for demo)
function generateLink() {
    const link = `https://hotweb.com/share/${Math.random().toString(36).substring(2, 15)}`;
    document.getElementById('shareable-link').innerText = `Shareable Link: ${link}`;
}
function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#18181d');
        root.style.setProperty('--text-color', '#f0f0f5');
    } else if (theme === 'neon') {
        root.style.setProperty('--bg-color', '#101820');
        root.style.setProperty('--text-color', '#00ffcc');
    }
}
document.querySelector('.upload-btn').addEventListener('click', () => {
    alert('Upload feature coming soon!');
});
document.addEventListener("DOMContentLoaded", function () {
    const particles = [];
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createParticle() {
        const particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        };
        particles.push(particle);
    }

    function updateParticles() {
        for (const particle of particles) {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
                particle.x = Math.random() * canvas.width;
                particle.y = Math.random() * canvas.height;
            }
        }
                               }

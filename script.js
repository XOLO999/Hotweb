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

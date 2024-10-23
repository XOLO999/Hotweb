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

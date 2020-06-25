const slideshowSlide = document.querySelector('.slideshow-slide');
const slideshowImages = document.querySelectorAll('.slideshow-slide img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', () => {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

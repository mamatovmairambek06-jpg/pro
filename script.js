const slides = document.querySelectorAll('.slide');
const slideLeftBtn = document.getElementById('slide-left');
const slideRightBtn = document.getElementById('slide-right');
const dotsContainer = document.getElementById('slider-dots');
let currentSlide = 0;
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if(index === 0) dot.classList.add('active');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});
function updateSlider() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');

  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  document.querySelector(`.dot[data-index="${currentSlide}"]`).classList.add('active');
}
slideLeftBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});
slideRightBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.dataset.index);
    updateSlider();
  });
});
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}, 5000);
updateSlider();
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.btn.primary');

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
const sections = document.querySelectorAll('section');

function checkSections() {
  const triggerBottom = window.innerHeight * 0.85; 

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);



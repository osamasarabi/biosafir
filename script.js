let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}

// التبديل كل 5 ثوانٍ
setInterval(showNextSlide, 5000);

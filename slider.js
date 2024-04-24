const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const getGap = (width) => {
  if (width >= 1024) return { gap: 33.3333, amountSlides: 2 };
  if (width >= 768) return { gap: 50, amountSlides: 3 };
  return { gap: 100, amountSlides: 4 };
};

let slideIndex = 0;

function showSlides(gap) {
  slider.style.transform = `translateX(-${slideIndex * gap}%)`;
}

function nextSlide() {
  const browserWidth = window.innerWidth;
  const { gap, amountSlides } = getGap(browserWidth);
  if (slideIndex < amountSlides) {
    slideIndex++;
    showSlides(gap);
  }
}

function prevSlide() {
  const browserWidth = window.innerWidth;
  const { gap } = getGap(browserWidth);
  if (slideIndex > 0) {
    slideIndex--;
    showSlides(gap);
  }
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

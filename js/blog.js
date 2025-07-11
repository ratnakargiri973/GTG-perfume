document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const wrapper = document.getElementById('testimonialWrapper');
  const cards = wrapper.children;
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function getVisibleCards() {
    return window.innerWidth >= 768 ? 3 : 1;
  }

  function updateSlider() {
    const visibleCards = getVisibleCards();
    const cardWidth = cards[0].offsetWidth + 20;
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateDots();

     if (prevBtn) {
    prevBtn.style.backgroundColor = currentIndex === 0 ? "#ccc" : "#003d1f";
    prevBtn.style.cursor = currentIndex === 0 ? "not-allowed" : "pointer";
  }

  if (nextBtn) {
    const isAtEnd = currentIndex >= cards.length - visibleCards;
    nextBtn.style.backgroundColor = isAtEnd ? "#ccc" : "#003d1f";
    nextBtn.style.cursor = isAtEnd ? "not-allowed" : "pointer";
  }
  }

  function nextSlide() {
    const visibleCards = getVisibleCards();
    if (currentIndex < cards.length - visibleCards) currentIndex++;
    updateSlider();
  }

  function prevSlide() {
    if (currentIndex > 0) currentIndex--;
    updateSlider();
  }

  function createDots() {
    const visibleCards = getVisibleCards();
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= cards.length - visibleCards; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const toggle = question.querySelector('.faq-toggle');

      answer.classList.toggle('open');
      toggle.textContent = answer.classList.contains('open') ? '-' : '+';
    });
  });

  window.addEventListener('resize', () => {
    currentIndex = 0;
    createDots();
    updateSlider();
  });

  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  createDots();
  updateSlider();
});

 function toggleAccordion(button) {
    const item = button.parentElement;
    const allItems = document.querySelectorAll('.accordion-item');

    allItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    button.querySelector('.icon').textContent = isActive ? '+' : '−';
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-header").forEach(button => {
      button.addEventListener("click", function () {
        toggleAccordion(this);
      });
    });
  });
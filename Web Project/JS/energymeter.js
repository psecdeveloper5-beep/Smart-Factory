// Optional: Add extra JS animation if needed
document.querySelectorAll('.meter-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = "all 0.4s ease-in-out";
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = "all 0.4s ease-in-out";
  });
  const items = document.querySelectorAll('.timeline-item');

  window.addEventListener('scroll', () => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        item.classList.add('show');
      }
    });
    });
});

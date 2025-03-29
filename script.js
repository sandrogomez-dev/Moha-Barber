// Efecto smooth scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Formulario de contacto (simulación)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
  });
  
  // Animación para las cards de servicios
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
// Fonction pour activer la navbar au scroll
function toggleNavbar() {
  const navbar = document.querySelector('.navigation');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Écouteur d'événement
window.addEventListener('scroll', toggleNavbar);

// Initialisation des tooltips Bootstrap
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation du carousel au survol
document.querySelectorAll('.photo-evenement').forEach(photo => {
  photo.addEventListener('mouseenter', () => {
    const img = photo.querySelector('img');
    img.style.transform = 'scale(1.05)';
  });
  
  photo.addEventListener('mouseleave', () => {
    const img = photo.querySelector('img');
    img.style.transform = 'scale(1)';
  });
});

// Pause le carousel quand on interagit avec
const carousel = document.querySelector('#carouselTemoignages');
carousel.addEventListener('mouseenter', () => {
  carousel.carousel('pause');
});

carousel.addEventListener('mouseleave', () => {
  carousel.carousel('cycle');
});
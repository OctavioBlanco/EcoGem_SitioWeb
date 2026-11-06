// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  
  // Cerrar automáticamente el menú colapsable en móviles al hacer clic en una opción
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const menuToggle = document.getElementById('navbarNav');
  
  if (menuToggle) {
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (menuToggle.classList.contains('show')) {
          bsCollapse.toggle();
        }
      });
    });
  }

});

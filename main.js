/**
 * Script principal de la página
 * Maneja la navegación con scroll suave
 */

document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto de navegación sticky con sombra al hacer scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});
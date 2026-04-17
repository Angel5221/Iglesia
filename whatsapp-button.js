/**
 * Funcionalidad del Botón WhatsApp 3D
 * Maneja la animación y redirección a WhatsApp
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappContainer = document.getElementById('whatsappContainer');
    
    // Configuración del número y mensaje de WhatsApp
    const config = {
        phoneNumber: '529984865696', // Número de la iglesia
        message: 'Buenas Dios le bendiga, me puede proporcionar más información?',
        animationDuration: 400 // Duración de la animación en ms
    };
    
    // Generar URL de WhatsApp
    const whatsappUrl = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.message)}`;
    
    /**
     * Maneja el click en el botón de WhatsApp
     */
    function handleWhatsAppClick() {
        // Agregar clase de animación
        whatsappBtn.classList.add('animating');
        
        // Esperar a que termine la animación y abrir WhatsApp
        setTimeout(() => {
            whatsappBtn.classList.remove('animating');
            openWhatsApp();
        }, config.animationDuration);
    }
    
    /**
     * Abre WhatsApp en una nueva pestaña
     */
    function openWhatsApp() {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    
    /**
     * Pausa la animación flotante al hacer hover
     */
    function pauseFloatingAnimation() {
        whatsappContainer.style.animationPlayState = 'paused';
    }
    
    /**
     * Reanuda la animación flotante
     */
    function resumeFloatingAnimation() {
        whatsappContainer.style.animationPlayState = 'running';
    }
    
    // Event Listeners
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', handleWhatsAppClick);
    }
    
    if (whatsappContainer) {
        whatsappContainer.addEventListener('mouseenter', pauseFloatingAnimation);
        whatsappContainer.addEventListener('mouseleave', resumeFloatingAnimation);
    }
    
    // Exponer funciones globalmente si se necesitan desde otros scripts
    window.WhatsappButton = {
        open: openWhatsApp,
        click: handleWhatsAppClick
    };
});
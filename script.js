const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

// ============================================
// 1. MENU MOBILE
// ============================================

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Chiudi menu quando clicchi su un link
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// 2. SMOOTH SCROLL
// ============================================

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scrolla fino alla sezione
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
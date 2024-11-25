document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle clicked');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Elementos de menuToggle ou navLinks não encontrados.');
    }
});
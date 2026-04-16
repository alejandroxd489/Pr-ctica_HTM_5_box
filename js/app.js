console.log("Página de boxeo lista 🔥");

// Scroll suave extra (por si el navegador no lo aplica bien)
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

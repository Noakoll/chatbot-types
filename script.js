// Handle card expansion
document.addEventListener('DOMContentLoaded', () => {
    // Card toggling
    const cards = document.querySelectorAll('.chatbot-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the expanded class
            card.classList.toggle('expanded');
        });
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}); 
// Initialize animations on page load
function initializeAnimations() {
    // Animate on scroll
    animateOnScroll();

    // Set up scroll listener
    window.addEventListener('scroll', animateOnScroll);

    // Set up mutation observer for dynamic elements
    setupMutationObserver();

    // Initialize progress bars
    animateProgressBars();
}

// Toggle card expansion
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('expanded');

        // Animate chat messages when expanded
        if (card.classList.contains('expanded')) {
            const messages = card.querySelectorAll('.chat-message');
            messages.forEach((message, index) => {
                message.style.opacity = '0';
                setTimeout(() => {
                    message.style.transition = 'opacity 0.3s ease';
                    message.style.opacity = '1';
                }, index * 200);
            });
        }
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Setup mutation observer for dynamic content
function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const card = mutation.target;
                if (card.classList.contains('expanded')) {
                    const messages = card.querySelectorAll('.chat-message');
                    messages.forEach((message, index) => {
                        message.style.opacity = '0';
                        setTimeout(() => {
                            message.style.transition = 'opacity 0.3s ease';
                            message.style.opacity = '1';
                        }, index * 200);
                    });
                }
            }
        });
    });

    // Observe all chatbot cards
    document.querySelectorAll('.chatbot-card').forEach(card => {
        observer.observe(card, { attributes: true });
    });
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');

    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.animation = 'fillBar 0.5s ease forwards';
        }
    });
}

// Export functions to be called from Blazor
window.toggleCard = toggleCard;
window.initializeAnimations = initializeAnimations;
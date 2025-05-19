// Initialisation des carrousels
document.addEventListener('DOMContentLoaded', function() {
    // Carrousel principal
    const mainCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });

    // Animation des cartes au chargement
    animateCards();
});

// Fonction pour animer les cartes
function animateCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        // Délai d'animation progressif pour chaque carte
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
}

// Gestion des messages flash (si vous en utilisez)
function showFlashMessage(message, type) {
    const flashContainer = document.createElement('div');
    flashContainer.className = `alert alert-${type} fixed-top mx-auto mt-3`;
    flashContainer.style.maxWidth = '500px';
    flashContainer.style.width = '90%';
    flashContainer.style.zIndex = '1100';
    flashContainer.textContent = message;

    document.body.appendChild(flashContainer);

    setTimeout(() => {
        flashContainer.remove();
    }, 5000);
}

// Validation des formulaires
function setupFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;

            // Validation basique - vous pouvez l'étendre
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (!isValid) {
                e.preventDefault();
                showFlashMessage('Veuillez remplir tous les champs obligatoires', 'danger');
            }
        });
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setupFormValidation();

    // Ajout d'une classe active à la navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});
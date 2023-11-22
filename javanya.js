document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    const portfolioModalTrigger = document.querySelectorAll('.portfolio-modal-trigger');
    portfolioModalTrigger.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const targetModalId = this.getAttribute('data-target');
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                const bootstrapModal = new bootstrap.Modal(targetModal);
                bootstrapModal.show();
            }
        });
    });
});
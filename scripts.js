document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav ul li a');
    const studioSection = document.querySelector('#studio');
    const warehouseSection = document.querySelector('#warehouse');
    const botDialogSection = document.querySelector('#bot-dialog');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            studioSection.style.display = 'none';
            warehouseSection.style.display = 'none';
            botDialogSection.style.display = 'none';

            document.querySelector(`#${targetId}`).style.display = 'block';
        });
    });

    const botCards = document.querySelectorAll('.bot-card');
    botCards.forEach(card => {
        card.addEventListener('click', function() {
            studioSection.style.display = 'none';
            warehouseSection.style.display = 'none';
            botDialogSection.style.display = 'block';
        });
    });
});


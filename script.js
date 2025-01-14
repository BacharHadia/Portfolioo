// script.js

document.addEventListener('DOMContentLoaded', function () {
   
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    if (footer) {
        footer.innerHTML += `<p>&copy; ${year} Hadia Bachar Issa. Tous droits réservés.</p>`;
    }
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const sujet = document.getElementById('sujet').value.trim();

    if (!nom || !prenom || !sujet) {
        alert('Veuillez remplir tous les champs.');
        event.preventDefault(); 
    } else {
        alert('Merci pour votre message, nous vous répondrons bientôt.');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById('theme-toggle');
    const navbarTitle = document.getElementById('navbar-title');
    const openContactFormButton = document.getElementById('openContactForm');
    const closeContactFormButton = document.getElementById('closeContactForm');
    const contactFormModal = document.getElementById('contactFormModal');

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      navbarTitle.classList.toggle('dark-mode-title');
    });

    openContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.remove('hidden');
    });

    closeContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.add('hidden');
    });

  });
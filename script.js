document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById('theme-toggle');
    const navbarTitle = document.getElementById('navbar-title');

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      navbarTitle.classList.toggle('dark-mode-title');
    });
  });
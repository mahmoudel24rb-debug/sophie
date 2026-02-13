// Mobile menu toggle
// Ajouter via Oxygen > Settings > Custom JS
// ou dans un Code Block <script> dans le header

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      menu.classList.toggle('is-open');
      document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('is-open');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

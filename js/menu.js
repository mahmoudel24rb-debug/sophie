document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.contains('is-open');
    menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', !isOpen);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// ======= FPI | NAVBAR MOBILE MENU TOGGLE & THEME SWITCH =======
document.addEventListener("DOMContentLoaded", function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mainNav = document.getElementById('main-nav');
  mobileMenuButton.addEventListener('click', function() {
    mainNav.classList.toggle('open');
  });

  // Theme switcher
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  function setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      themeIcon.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-theme');
      themeIcon.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
  }
  // Detect system preference or stored theme
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme(currentTheme);

  themeToggle.addEventListener('click', function() {
    const theme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    setTheme(theme);
  });
});
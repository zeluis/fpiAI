document.addEventListener("DOMContentLoaded",function(){
  // Mobile menu toggle
  const mobileMenuButton=document.getElementById('mobile-menu-button');
  const mainNav=document.getElementById('main-nav');
  mobileMenuButton.addEventListener('click',function(){
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

  // Scroll entrance animation
  function scrollAnimate(selector) {
    const els = document.querySelectorAll(selector);
    const onScroll = () => {
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 60) {
          el.classList.add('scrolled-in');
        }
      });
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }
  scrollAnimate('.section');
  scrollAnimate('.hero');
  scrollAnimate('.feature-card');
  scrollAnimate('.card');
  scrollAnimate('.article__container');
});
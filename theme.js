const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.id = 'theme-toggle';
document.body.prepend(toggle);

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
    toggle.textContent = '☀️';
  } else {
    localStorage.theme = 'light';
    toggle.textContent = '🌙';
  }
});

// On load, apply saved or system preference
if (localStorage.theme === 'dark' ||
   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  toggle.textContent = '☀️';
}

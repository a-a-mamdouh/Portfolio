const themeToggleButton = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  document.body.classList.add('light');
  if (themeToggleButton) themeToggleButton.textContent = '🌙';
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggleButton.textContent = isLight ? '🌙' : '☀️';
  });
}

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();


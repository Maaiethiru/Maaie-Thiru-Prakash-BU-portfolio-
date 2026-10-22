const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copyEmail');
const toast = document.getElementById('toast');
let toastTimer;
copyButton.addEventListener('click', async () => {
  const email = 'mb6534@srmist.edu.in';
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email address copied';
  } catch {
    toast.textContent = email;
  }
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
});
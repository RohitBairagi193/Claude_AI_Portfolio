// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── POPUP CLOSE ───
document.getElementById('popupClose').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});

// ─── SCROLL TO ABOUT (play button) ───
document.getElementById('scrollBtn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ─── PROJECT LINKS ───
const projectLinks = {
  'library'     : 'https://www.figma.com/proto/s7mqgWc56O5DbuRbaOiWLA/Untitled?node-id=0-1&t=aGDT4nlWMVIOC2wQ-1',
  'sport-scout' : 'https://sport-scout-rohitbairagi.vercel.app/',
  'textutile'   : 'https://text-utile-tau.vercel.app/',
  'transaction' : 'https://transaction-app-ten.vercel.app/'
};

document.querySelectorAll('.project-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.project;
    if (projectLinks[key]) {
      window.open(projectLinks[key], '_blank');
    }
  });
});

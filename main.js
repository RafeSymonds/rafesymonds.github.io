// ─── Reveal on scroll ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─── Masthead hairline + scroll progress ───
const masthead = document.querySelector('.masthead');
const progress = document.querySelector('.scroll-progress');

function onScroll() {
  masthead.classList.toggle('scrolled', window.scrollY > 24);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ─── Active section in nav ───
const navLinks = [...document.querySelectorAll('.masthead-nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) =>
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
      );
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

navSections.forEach((section) => sectionObserver.observe(section));

// ─── Cursor glow on flagship cards ───
document.querySelectorAll('.flagship').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});

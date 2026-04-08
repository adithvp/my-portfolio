// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

// Nav solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 50);
});

// Burger menu
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mobNav');
let open = false;
burger.addEventListener('click', () => {
  open = !open;
  mobNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  const s = burger.querySelectorAll('span');
  if (open) {
    s[0].style.cssText = 'transform:rotate(45deg) translate(4px,4px)';
    s[1].style.cssText = 'transform:rotate(-45deg) translate(4px,-4px)';
  } else {
    s[0].style.cssText = '';
    s[1].style.cssText = '';
  }
});
document.querySelectorAll('.mn-link').forEach(l => {
  l.addEventListener('click', () => {
    open = false;
    mobNav.classList.remove('open');
    document.body.style.overflow = '';
    burger.querySelectorAll('span').forEach(s => s.style.cssText = '');
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.sec-label, .sec-h2, .body-p, .edu-card, .sb, .soft-cloud span, .bento-card, .proj-row, .exp-card, .contact-h, .contact-sub, .contact-email, .clink, .stat-blocks'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Stagger bento cards
document.querySelectorAll('.bento-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});

// Stagger soft-cloud spans
document.querySelectorAll('.soft-cloud span').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.05}s`;
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});

// =====================
// Cursor personalizado
// =====================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Agrandar cursor en hover
document.querySelectorAll('a, button, .proyecto-card, .servicio-card').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    follower.style.width = '56px';
    follower.style.height = '56px';
    follower.style.borderColor = 'rgba(77, 159, 255, 0.6)';
  });
  el.addEventListener('mouseleave', function() {
    follower.style.width = '32px';
    follower.style.height = '32px';
    follower.style.borderColor = 'rgba(77, 159, 255, 0.6)';
  });
});

// =====================
// Nav mobile
// =====================
function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Nav scroll effect
window.addEventListener('scroll', function() {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});

// =====================
// Animaciones al scroll
// =====================
const fadeEls = document.querySelectorAll(
  '.proyecto-card, .servicio-card, .sobre-card, .skill-item, .contacto-link'
);

fadeEls.forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(function(el) { observer.observe(el); });

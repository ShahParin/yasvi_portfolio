/* ============================================================
   main.js — Interactions
   1) Mobile hamburger menu toggle
   2) Fade-in-on-scroll for elements with class "reveal"
   3) Smooth scroll for in-page links (e.g. "Get in Touch" -> #contact)
   ============================================================ */

// Height of the sticky nav, so sections aren't hidden behind it on scroll
const NAV_OFFSET = 70;

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1) Mobile menu ---- */
  const menuBtn  = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.classList.toggle('x');
    });

    // Close the menu after tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('x');
      });
    });
  }

  /* ---- 2) Smooth scroll for in-page anchor links ---- */
  // Covers "Get in Touch" (#contact), "View Experience" (#experience),
  // and every nav link. Works even in browsers that ignore CSS smooth scroll.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#' || id.length < 2) return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });

      // Close the mobile menu if it was open
      if (navLinks) navLinks.classList.remove('open');
      if (menuBtn)  menuBtn.classList.remove('x');
    });
  });

  /* ---- 3) Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
});

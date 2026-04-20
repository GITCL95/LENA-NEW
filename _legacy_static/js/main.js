/* ============================================================
   LÉNA RÉNOVE — main.js
   Vanilla JS léger · Header scroll · Menu mobile
   FAQ accordéon · Animations IntersectionObserver
   ============================================================ */

(function () {
  'use strict';

  /* ── HEADER SCROLL ─────────────────────────────────────── */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── MENU MOBILE ────────────────────────────────────────── */
  const menuToggle = document.querySelector('.menu-toggle');
  const navList    = document.querySelector('.nav-list');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle && navList) {
    const openMenu = () => {
      menuToggle.classList.add('open');
      navList.classList.add('open');
      if (navOverlay) navOverlay.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      menuToggle.classList.remove('open');
      navList.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ── ACTIVE NAV LINK ────────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentPath ||
      (currentPath === '' && href === '/') ||
      (currentPath === 'index.html' && (href === '/' || href === 'index.html'))
    ) {
      link.classList.add('active');
    }
  });

  /* ── FAQ ACCORDÉON ──────────────────────────────────────── */
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const body = btn.nextElementSibling;

      // Ferme tous les autres
      document.querySelectorAll('.faq-toggle').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const ob = other.nextElementSibling;
          if (ob) ob.style.maxHeight = '0';
        }
      });

      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = '0';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ── INTERSECTION OBSERVER — REVEAL ─────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  /* ── SMOOTH SCROLL ANCRES ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = header ? header.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── HERO PARALLAX LÉGER ────────────────────────────────── */
  const heroBg = document.querySelector('.hero .hero-bg');
  if (heroBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.3;
      heroBg.style.transform = `translateY(${y}px)`;
    }, { passive: true });
  }

})();

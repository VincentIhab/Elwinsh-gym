// src/js/components/smoothScroll.js
export default function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  
  // src/js/index.js
  import smoothScroll from './components/smoothScroll';
  smoothScroll();
  
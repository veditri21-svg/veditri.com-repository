let lastScrollY = window.scrollY;
const listenBtn = document.querySelector('.listen-btn');
const parallaxBg = document.querySelector('.parallax-bg');
const logo = document.querySelector('.logo');

// Listen for scroll events
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    // Multi-layer parallax
    parallaxBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
    logo.style.transform = `translateY(${scrollPos * 0.6}px)`;

    // Hide or show "Listen Now" button based on scroll direction
    if (scrollPos > lastScrollY) {
        // Scrolling down → show button
        listenBtn.style.opacity = "0";
    } else {
        // Scrolling up → hide button
        listenBtn.style.opacity = "1";
    }

    lastScrollY = scrollPos <= 0 ? 0 : scrollPos; // Prevent negatives
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close dropdown if user clicks outside
window.onclick = function(event) {
  if (!event.target.matches('.listen-btn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
}

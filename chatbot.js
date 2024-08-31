 // Smooth Scrolling
 function scrollToSection(sectionId) {
  document.querySelector(`#${sectionId}`).scrollIntoView({
    behavior: 'smooth'
  });
}

// Scroll to Top Button
window.onscroll = function() {
  const scrollTopBtn = document.getElementById('scroll-to-top-btn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



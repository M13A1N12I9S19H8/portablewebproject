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

  // Load Videos
  function loadVideos() {
    fetch('/list/videos')
      .then(response => response.text())
      .then(data => {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = ''; // Clear existing videos
        const videos = data.split('\n');
        videos.forEach(video => {
          if (video) {
            const videoElement = document.createElement('video');
            videoElement.src = '/src/videos/' + video;
            videoElement.controls = true;
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = video;
            videoContainer.appendChild(fileName);
            videoContainer.appendChild(videoElement);
          }
        });
      })
      .catch(err => console.error('Failed to load videos:', err));
  }

  // Load PDFs
  function loadPDFs() {
    fetch('/list/pdfs')
      .then(response => response.text())
      .then(data => {
        const pdfContainer = document.getElementById('pdf-container');
        pdfContainer.innerHTML = ''; // Clear existing PDFs
        const pdfs = data.split('\n');
        pdfs.forEach(pdf => {
          if (pdf) {
            const pdfEmbed = document.createElement('embed');
            pdfEmbed.src = '/src/pdfs/' + pdf;
            pdfEmbed.type = 'application/pdf';
            pdfEmbed.width = '100%';
            pdfEmbed.height = '600px';
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = pdf;
            pdfContainer.appendChild(fileName);
            pdfContainer.appendChild(pdfEmbed);
          }
        });
      })
      .catch(err => console.error('Failed to load PDFs:', err));
  }

  // Call these functions when the page loads
  window.onload = function() {
    loadVideos();
    loadPDFs();
  };
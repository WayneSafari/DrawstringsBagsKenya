function showPage(pageName) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.style.display = 'none';
    });
  
    // Show the selected page
    var selectedPage = document.getElementById(pageName);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    } else {
      console.error('Page not found:', pageName);
    }
  }
// Show the home page by default
showPage('page1');

window.onload = function() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  container1.style.display = 'block'; // Show the first container initially

  const toggleContainers = () => {
      if (container1.style.display === 'block') {
          container1.style.display = 'none';
          container2.style.display = 'block';
      } else {
          container1.style.display = 'block';
          container2.style.display = 'none';
      }
  };

  setInterval(toggleContainers, 15000); // 15 seconds

  container1.addEventListener('click', toggleContainers);
  container2.addEventListener('click', toggleContainers);
};

// scripts.js

function openModal(imageSrc, title, price) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-price').innerText = `KES${price.toFixed(2)}`;

  // Blur background
  document.querySelector('.products').style.filter = 'blur(5px)';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

  // Unblur background
  document.querySelector('.products').style.filter = 'none';
}

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
      closeModal();
  }
}

document.getElementById('contact-button').addEventListener('click', function() {
  const phoneNumber = '254706890007'; // Replace with your phone number
  const message = 'Hello, tell me more about drawstring bags';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
});

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

// Get the modal
var modal = document.getElementById("productModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open the modal with product details
function openModal(productName, productPrice) {
  document.getElementById("modalProductName").innerText = productName;
  document.getElementById("modalProductDescription").innerText = "Description for " + productName;
  document.getElementById("modalProductPrice").innerText = "$" + productPrice.toFixed(2);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable background scroll
}

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable background scroll
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable background scroll
  }
}

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
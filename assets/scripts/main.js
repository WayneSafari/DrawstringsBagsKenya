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

let currentIndex = 0;
let currentTileIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  if (currentIndex >= totalItems) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function moveTiles(direction) {
  const tiles = document.querySelectorAll('.tile');
  const totalTiles = tiles.length;
  const tileHeight = tiles[0].offsetHeight + 20; // 20px is the margin between tiles

  currentTileIndex += direction;

  if (currentTileIndex >= totalTiles) {
    currentTileIndex = 0;
  } else if (currentTileIndex < 0) {
    currentTileIndex = totalTiles - 1;
  }

  const offset = -currentTileIndex * tileHeight;
  document.querySelector('.tiles').style.transform = `translateY(${offset}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    moveCarousel(1);
  }, 3000); // Change image every 3 seconds
});



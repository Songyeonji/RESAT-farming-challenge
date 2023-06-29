const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');

function toggleMenu() {
  hamburgerMenu.classList.toggle('active');
  sideMenu.classList.toggle('show');

}

hamburgerMenu.addEventListener('click', toggleMenu);

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    sideMenu.classList.remove('show');
  }
});



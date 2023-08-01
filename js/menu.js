const bars = document.querySelector(".bars");
const menu = document.querySelector(".nav-links-for-small-devices");

const toggleMenu = () => {
  if (menu.style.display === "block") {
    // If the menu is open, change the icon back to "hamburger" and hide the menu
    bars.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    menu.style.display = "none";
  } else {
    // If the menu is closed, change the icon to "close" and show the menu
    bars.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    menu.style.display = "block";
  }
};

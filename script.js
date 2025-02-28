//toggle icon navbar

let menuIcon =document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100; // Section's top position minus an offset
    let height = sec.offsetHeight;  // Section's height
    let id = sec.getAttribute("id");

    // Check if the current scroll position is within the section's range
    if (top >= offset && top < offset + height) {
      // Remove the 'active' class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the 'active' class to the correct navigation link based on the section ID
      let activeLink = document.querySelector(`header nav a[href*=${id}]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Stick header when scrolling past a certain point
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

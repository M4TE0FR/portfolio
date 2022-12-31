const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});


const invertColorsButton = document.getElementById('invert-colors-button');

invertColorsButton.addEventListener('click', function() {
  document.body.classList.toggle('inverted-colors');
});
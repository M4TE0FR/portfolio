
const colorInvertButton = document.getElementById('invert-colors-button');

colorInvertButton.addEventListener('click', function() {
  document.body.classList.toggle('inverted-colors');
});
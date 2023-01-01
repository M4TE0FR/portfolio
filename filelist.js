const fileList = ['index.html', 'style.css', 'script.js', 'screenshot.jpg'];

const list = document.querySelector('#file-list');

for (const file of fileList) {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = file;
  button.addEventListener('click', () => {
    fetch(`/${file}`)
      .then(response => response.text())
      .then(code => {
        const modal = document.querySelector('#codeModal');
        const codeContainer = modal.querySelector('#file-code');
        codeContainer.textContent = code;
        modal.modal('show');
      });
  });
  item.appendChild(button);
  list.appendChild(item);
}

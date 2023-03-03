const checkbox = document.querySelector('#darkCheck');
const themeLink = document.querySelector('.theme');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    themeLink.href = '/css/dark.css';
  } else {
    themeLink.href = '';
  }
});

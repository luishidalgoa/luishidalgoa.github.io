const checkbox = document.querySelector('#darkCheck');
const themeLink = document.querySelector('.theme');

// Verificar si hay un valor almacenado en localStorage y usarlo para establecer el estado del botón
if (localStorage.getItem('theme') === 'dark') {
  checkbox.checked = true;
  themeLink.href = '/css/dark.css';
}

// Agrega un evento de cambio al input checkbox
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Si se marca el checkbox, cambia la hoja de estilo y guarda el estado en localStorage
    themeLink.href = '/css/dark.css';
    localStorage.setItem('theme', 'dark');
  } else {
    // Si se desmarca el checkbox, utiliza la hoja de estilo predeterminada y elimina el estado de localStorage
    themeLink.href = '';
    localStorage.removeItem('theme');
  }
});

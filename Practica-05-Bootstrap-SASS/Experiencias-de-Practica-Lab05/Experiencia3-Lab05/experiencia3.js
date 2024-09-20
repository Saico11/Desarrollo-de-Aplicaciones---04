document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el dropdown y agregarle eventos para manejar la animación
  var dropdown = document.querySelector('.dropdown');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdown.addEventListener('mouseenter', function() {
    dropdownMenu.classList.add('show'); // Mostrar el menú
  });
  
  dropdown.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('show'); // Ocultar el menú
  });
});

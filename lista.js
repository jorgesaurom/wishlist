// Obtener la lista1, lista2 y el formulario
const wishlist = document.getElementById('wishlist');
const wishlist2 = document.getElementById('wishlist2');
const addItemForm = document.getElementById('add-item-form');
// Agregar un evento de envío al formulario
addItemForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevenir que el formulario se envíe

  // Obtener el valor del campo de entrada del usuario
  const newItemName = document.getElementById('item-name').value;

  // Crear un nuevo elemento de lista y agregarlo a la lista1 de deseos
  const newItem = document.createElement('li');
  newItem.textContent = newItemName;
  wishlist.appendChild(newItem);

  // Limpiar el campo de entrada
  document.getElementById('item-name').value = '';
});

// Agregar un evento de clic a cada elemento de lista1 para eliminarlo
wishlist.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      event.target.remove();
    }
  
  });
  // Agregar un evento de clic a cada elemento de lista2 para eliminarlo
  wishlist2.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      event.target.remove();
    }
  
  });
// MOVER DESEOS DE LISTA1 A LISTA2
  function moverdeseo(){
    Array.from(wishlist.children).forEach((item) => mover(item));
  }
  
  function mover(item) {
    wishlist2.appendChild(item);
  }




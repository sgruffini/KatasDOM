const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

// Seleccionar el div con el atributo data-function="printHere"
const printHereDiv = document.querySelector('div[data-function="printHere"]')

// Crear un elemento <ul>
const ulElement = document.createElement('ul')

// Recorrer el array 'places' y crear un elemento <li> para cada lugar
places.forEach((place) => {
  const liElement = document.createElement('li')
  liElement.textContent = place
  ulElement.appendChild(liElement)
})

// Agregar el <ul> al div seleccionado
printHereDiv.appendChild(ulElement)

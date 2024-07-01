const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

// Seleccionamos el contenedor <ul> con el id 'albumList'
const albumList = document.getElementById('albumList')

// Recorremos cada elemento en el array 'albums'
albums.forEach((album) => {
  // Creamos un nuevo elemento <li>
  const listItem = document.createElement('li')

  // Establecemos el texto del <li> como el nombre del álbum
  listItem.textContent = album

  // Agregamos el <li> al <ul>
  albumList.appendChild(listItem)
})

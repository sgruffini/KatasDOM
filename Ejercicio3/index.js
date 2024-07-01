// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulCountries = document.createElement('ul')
countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ulCountries.appendChild(li)
})
document.body.appendChild(ulCountries)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeMeElement = document.querySelector('.fn-remove-me')
if (removeMeElement) {
  removeMeElement.remove()
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divPrintHere = document.querySelector('div[data-function="printHere"]')
const ulCars = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
})
divPrintHere.appendChild(ulCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const container = document.createElement('div')
countriesWithImages.forEach((item) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = item.title
  const img = document.createElement('img')
  img.src = item.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  container.appendChild(div)
})
document.body.appendChild(container)

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const deleteLastButton = document.createElement('button')
deleteLastButton.textContent = 'Eliminar último div'
deleteLastButton.addEventListener('click', () => {
  const allDivs = container.querySelectorAll('div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})
document.body.appendChild(deleteLastButton)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
countriesWithImages.forEach((item, index) => {
  const div = container.children[index]
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Eliminar este div'
  deleteButton.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(deleteButton)
})

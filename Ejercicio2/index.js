// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement('div')
document.body.appendChild(emptyDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div')
const pInDiv = document.createElement('p')
divWithP.appendChild(pInDiv)
document.body.appendChild(divWithP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWithSixP = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  divWithSixP.appendChild(p)
}
document.body.appendChild(divWithSixP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElements = document.querySelectorAll('.fn-remove-me')
removeElements.forEach((element) => element.remove())

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const middleP = document.createElement('p')
middleP.textContent = 'Voy en medio!'
const allDivs = document.querySelectorAll('div')
document.body.insertBefore(middleP, allDivs[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('.fn-insert-here')
insertHereDivs.forEach((div) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
})

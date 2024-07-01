document
  .getElementById('btnToClick')
  .addEventListener('click', function (event) {
    console.log('Button clicked:', event)
  })

document
  .getElementById('textInput')
  .addEventListener('focus', function (event) {
    console.log('Input focused:', event.target.value)
  })

document
  .getElementById('textInput')
  .addEventListener('input', function (event) {
    console.log('Input value:', event.target.value)
  })

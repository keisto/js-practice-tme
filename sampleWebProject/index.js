document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const { value } = document.querySelector('input')

  const header = document.querySelector('h1')
  if (value.includes('@')) {
    // Must be valid
    header.innerText = 'Looks good!'
  } else {
    // not valid
    header.innerText = 'Invalid email.'
  }
})

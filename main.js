const inputName = document.getElementById('nombre')
const inputMail = document.getElementById('correo')
const inputMessage = document.getElementById('mensaje')
const btn = document.getElementById('btn')

function onSubmit (e) {
  e.preventDefault()

  const formValues = {
    nameValue : inputName.value,
    mailValue : inputMail.value,
    messageValue : inputMessage.value
  }

  console.log(formValues)

  localStorage.setItem('form', JSON.stringify(formValues))

  const formGuardado = JSON.parse(localStorage.getItem('form'))
  console.log(formGuardado.nameValue)
  

  const printOnHTML = document.getElementById('printedText')
  printOnHTML.innerText = formGuardado.nameValue
}

btn.addEventListener('click',onSubmit)


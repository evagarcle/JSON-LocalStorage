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

  const formsGuardados = JSON.parse(localStorage.getItem('forms'))
  
  if (formsGuardados === null) {
    let formList = [formValues]
    localStorage.setItem('forms', JSON.stringify(formList))
  } else {
    formsGuardados.push(formValues)
    localStorage.setItem('forms', JSON.stringify(formsGuardados))
  }

  console.log('forms guardados: ' , formsGuardados)
  
  console.log(formValues)
}

btn.addEventListener('click',onSubmit)

const printOnHTML = document.getElementById('printedText')
printOnHTML.innerText = inputName.value
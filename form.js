
const form = document.getElementById('formulario')
const id =window.location.search.split('=')[1]

fetch(`https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees/${id}`)
  .then(response => response.json())
  .then(data => {
      const element = data;        
      const inputName = document.createElement('input')
      inputName.defaultValue = element.name
      inputName.type = "text"
      inputName.name = "name"
      inputName.className ="form-control"
      const inputEmail = document.createElement('input')
      inputEmail.defaultValue = element.email
      inputEmail.type = "email"
      inputEmail.name = "email"
      inputEmail.className ="form-control"
      const inputCity = document.createElement('input')
      inputCity.defaultValue = element.city
      inputCity.type = "text"
      inputCity.name = 'city'
      inputCity.className ="form-control"
      const inputBirthday = document.createElement('input')
      inputBirthday.defaultValue = element.birthday.split('T')[0]
      inputBirthday.type = "date"
      inputBirthday.name = 'date'
      inputBirthday.className ="form-control"

      const button = buttonGuardar()
   
      form.appendChild(inputName)
      form.appendChild(inputEmail)
      form.appendChild(inputCity)
      form.appendChild(inputBirthday)
      form.appendChild(button)


      
    })
.catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))


function buttonGuardar() {
  const button = document.createElement('button')
  button.className="btn btn-primary mt-3"
  button.innerText = "Guardar"

  button.addEventListener('click', updateEmployee)

  return button
}
function updateEmployee(e) {
  e.preventDefault()
  const updateEmployeData = {
    name: form.elements['name'].value,
    city: form.elements['city'].value,
    email:form.elements['email'].value,
    date: form.elements['date'].value
  }
  console.log(updateEmployeData)
  // window.location.href='index.html';
}


function goToBack() {
    window.location.href = 'index.html'
}
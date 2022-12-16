
const table = document.getElementById('table')
const tbody = document.getElementById('tbody')


fetch('https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees')
  .then(response => response.json())
  .then(data => {
    for(let i=0; i< data.length; i++){
      const element = data[i];     
      let tr = document.createElement('tr');
      const idFila = tr.id = element.id
      const tdName = createTDEmployee(element.name, tr)
      const tdButtonEditar = createButtonEmployee('Editar', 'btn btn-primary', element, getEditEmployee)
      const tdButtonEliminar = createButtonEmployee('Eliminar', 'btn btn-danger', element, deleteEmployee, idFila)
      tr.appendChild(tdName)
      tr.appendChild(tdButtonEditar)
      tr.appendChild(tdButtonEliminar)
      tbody.appendChild(tr)
      table.appendChild(tbody);
    }
})
.catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))

function createTDEmployee(text) {
    let td = document.createElement('td');
    td.innerText = text
    return td
}

function createButtonEmployee(text,className,data, functionClick, idFila) {
    let tdButton = document.createElement('td');
    let button = document.createElement('button')
    button.innerText= text
    button.className = className
    tdButton.appendChild(button)

    
    button.addEventListener('click', function() {
        functionClick(data, idFila)
    })
    return tdButton
}
  
  function getEditEmployee(data) {
    window.location.href=`formularioEditar/form.html?id=${data.id}`;
  }

  function deleteEmployee(data, idFila){
    const tr = document.getElementById(idFila)
    tr.hidden = true;
    alert(`El empleado ${data.name} sera eliminado `)
  }
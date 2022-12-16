export function createTDEmployee(text) {
    let td = document.createElement('td');
    td.innerText = text
    return td
}

export function createButtonEmployee(text,className,data, functionClick, idFila) {
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
  
export  function getEditEmployee(data) {
    window.location.href=`form.html?id=${data.id}`;
  }

export  function deleteEmployee(data, idFila){
    const tr = document.getElementById(idFila)
    tr.hidden = true;
    alert(`El empleado ${data.name} sera eliminado `)
  }
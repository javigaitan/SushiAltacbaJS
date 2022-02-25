//arma el plato

const boton_agregar = document.getElementById('boton-agregar');
const lista_Rolls = document.querySelector('.lista-Rolls');
const boton_limpiar = document.querySelector('.boton-limpiar');

boton_agregar.addEventListener('click', () => {
  agregarTarea("")
})

boton_limpiar.addEventListener('click', () => {
  limpiarTodo()
})

lista_Rolls.addEventListener('click', (event) => {
  if(event.path[0].type == 'submit') {
    eliminarTarea(event.path[1].id)
  }
})

lista_Rolls.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    editarTarea(event.path[1].id, event.path[0].value)
  }
})

// Local Storage

var arregloRolls = []
var contador = 0

const getContador = () => {
  const cont = localStorage.getItem("contador")
  return cont
}

const setContador = () => {
    localStorage.setItem("contador",contador)
}

const inicilizarContador = () => {
  if (getContador() != null) {
    contador = getContador()
  }
}

const getArregloRolls = () => {
  setContador()
  const arreglo = JSON.parse(localStorage.getItem("arregloRolls"))
  return arreglo
}

const setArregloRolls = () => {
  localStorage.setItem("arregloRolls",JSON.stringify(arregloRolls))
  listarRolls()
}

const agregarTarea = (descripcion) => {
  contador++
  let objTarea = {
    id: contador,
    descripcion: descripcion
  }
  if (getArregloRolls() != null) {
    arregloRolls = getArregloRolls()
  }
  arregloRolls.push(objTarea)
  setArregloRolls()
}

const listarRolls = () => {
  lista_Rolls.innerHTML = ''
  let datos = getArregloRolls()
  if (datos != null) {
    for (const tarea of datos.reverse()) {
      lista_Rolls.innerHTML += `
        <li id="${tarea.id}">
            <input type="text" class="input-tarea" value="${tarea.descripcion}">  
            <button class="boton-eliminar">X</button>
        </li>
      `
    }
  }
}

const editarTarea = (idTarea, descripcion) => {
  let newTarea = {
    id: idTarea,
    descripcion: descripcion
  }
  let datos = getArregloRolls()
  let newArreglo = []
  if (datos != null) {
    for (const tarea of datos) {
      if (tarea.id == idTarea) {
        newArreglo.push(newTarea)
      }else{
        newArreglo.push(tarea)
      }
    }
  }
  arregloRolls = newArreglo
  setArregloRolls()
}

const eliminarTarea = (idTarea) => {
  let datos = getArregloRolls()
  let newArreglo = []
  if (datos != null) {
    for (const tarea of datos) {
      if (tarea.id != idTarea) {
        newArreglo.push(tarea)
      }
    }
  }
  arregloRolls = newArreglo
  setArregloRolls()
}

const limpiarTodo = () => {
  arregloRolls = []
  contador = 0
  setArregloRolls()
  setContador()
}

// inicia
inicilizarContador()
listarRolls()




//Crea tu plato 

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}








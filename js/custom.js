function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        var hash = this.hash;
        if( hash ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
    
})(jQuery);



//Evento sobre reserva


(function(){
	var recerva = function(){
		alert ('Listo ya tenes tu reserva');
	};

	var boton = document.getElementById('boton');
	boton.addEventListener('click', recerva);
}())


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










//Class Objeto constructor

class Productos {
    constructor(nombreComida, valor) {
        this.nombreComida = nombreComida,
        this.valor = parseFloat(valor),
        this.vendido = false
        
    }

    sumarEnvio(){
        this.valor = this.valor + 120;
    }

    vender(){
        this.vendido = true;
    }
}

const comidaClasica = new Productos('roll california', '80');
const comida2 = new Productos('roll clasico', '50');

comidaClasica.sumarEnvio();
comidaClasica.vender();
comida2.sumarEnvio();

console.log(comidaClasica);
console.log(comida2);




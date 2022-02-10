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


//SIMULADOR de compra 

let total = 0;
let precio = 0; 
let otroPlato = false; 

function agregaralCarrito() {
    do {
        let producto = prompt('¿Te gustaria probar nuestra promocion del dia?');

        switch (producto) {
            case 'si':
                precio = 500;
                break;

            case 'Si':
                precio = 500;
                break;

            case 'SI':
                precio = 500;
                break;

            case 'sI':
                precio = 500;
                break;

            default:
                alert('Algun dato ingresado es incorrecto');
                precio = 0;

        }

         total = total + precio;
         otroPlato = confirm('¿Te gustaria un plato mas?')

    } while (otroPlato);

}


function calcularEnvio(){
    let confirmar = confirm('¿Necesitas delivery a domicilio?');

    if(confirmar && total >=3000){
        alert ('Tenes envio gratis. El total de tu compra es ' + total);
    } else if (confirmar && total < 3000 && total !=0) {
        total = total +120;
        alert('El costo del delivery es $120. El total de la compra es:' + total);
    } else {
        alert ('El total de tu compra es : ' +total);
    }
    
    return total;

}

agregaralCarrito();
calcularEnvio(total);



// Arrays de comida

var cajita = [];

var listado = document.getElementById('listado');
var producto = document.getElementById('producto');
var contador = document.getElementById('contador');



if(cajita.length==0){
    listado.innerHTML = 'No hay nada Ingresado..';
}


function agregar(){
    cajita.push(producto.value);
    listado.innerHTML = cajita;
    contador.innerHTML = cajita.length
}

function eliminar(){
    cajita.pop(); //elimina el ultimo item
    listado.innerHTML = cajita;
    contador.innerHTML = cajita.length
}


//Evento sobre reserva


(function(){
	var recerva = function(){
		alert ('Listo ya tenes tu reserva');
	};

	var boton = document.getElementById('boton');
	boton.addEventListener('click', recerva);
}())


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

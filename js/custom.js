function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

(function ($) {
    
    $('#Container').mixItUp();

    
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

//Evento sobre finalizar compra de carrito (TERMINAR AGREGAR BULEANO TERNARIO)

(function(){
	var comprar = function(){

    alert ('Tu pedido fue generado con exito, estara listo em 30 minutos, Muchas Gracias');

	};

	var endCompra = document.getElementById('endCompra');
	endCompra.addEventListener('click', comprar);
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




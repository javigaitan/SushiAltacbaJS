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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu reserva esta lista! ',
            showConfirmButton: false,
            timer: 1500
          })
	};

	var boton = document.getElementById('boton');
	boton.addEventListener('click', recerva);
}())

//Evento sobre finalizar compra de carrito

(function(){
	var finalizar = () => 
       

         (precioTotal.innerText) ? Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Gracias por tu compra! Estara lista en 20 min ',
            showConfirmButton: false,
            timer: 2000
          }) :  Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ups, tu carro esta vacio ! ',
            showConfirmButton: false,
            timer: 2000
          });

	var endCompra = document.getElementById('endCompra');
	endCompra.addEventListener('click', finalizar);
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



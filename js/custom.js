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




//let nombre = prompt('Bienvenido a Sushi Alta Cordoba! Contanos cual es tu nombre?');

//console.log(nombre);



// Arrays

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






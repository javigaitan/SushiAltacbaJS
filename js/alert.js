(async () => {

const {value: barrio} = await Swal.fire({
	 title: 'Bienvenido!',
	 text: 'Selecciona el barrio desde donde vas a solicitar tu pedido',
	 width: '90%',
	 padding: '2rem',
	 backdrop: true,
	 input: 'select',
     confirmButtonColor: '#FFB03B',
	 inputPlaceholder: 'Selecciona tu barrio',
	 inputValue:'',
	 inputOptions: {
         altaCba: 'Alta Cordoba',
         cofico: 'Cofico',
         centro: 'Centro',
         alberdi: 'Alberdi',
         otros: 'Otros',
        }
        
	
});


if (barrio =='otros'){Swal.fire({
    title: 'El envio a barrios fuera de la lista pueden tener una demora extra para llegar, tranquil@ lo bueno se hace esperar',
    width: '90%',
	 padding: '2rem',
	 backdrop: true,
     confirmButtonColor: '#FFB03B',

     
});


}
})()
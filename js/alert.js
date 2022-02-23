//Alert de barrio inicio



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
         provi: 'Providencia',
         general: 'General Bustos',
		 pueyrre: 'Pueyrredon',
         alberdi: 'Alberdi',
         centro: 'Centro',
         america: 'Residencial America',
         otros: 'Otros',
        }
        
	
});



if (barrio =='otros'){Swal.fire({
    title: 'El envio a barrios fuera de la lista pueden tener valor extra en el delivery, pero calma solo son $50,00 extras',
    width: '90%',
	 padding: '2rem',
	 backdrop: true,
     confirmButtonColor: '#FFB03B',

     
});


}
})()



//Alert de barrio inicio- LIBRERIA AGREGADA PARA INDICAR INFO RELEVANTE



(async () => {
    
    

const {value: barrioCordoba} = await Swal.fire({
	 title: 'Bienvenido!',
	 text: 'Selecciona el barrio desde donde vas a solicitar tu pedido',
	 width: '80%',
	 padding: '2.5rem',
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



if (barrioCordoba =='otros'){Swal.fire({
    title: 'El envio a barrios fuera de la lista pueden tener valor extra en el delivery, pero calma solo son $50,00 extras',
     width: '90%',
	 padding: '2rem',
	 backdrop: true,
     confirmButtonColor: '#FFB03B',

     
});


}
})()




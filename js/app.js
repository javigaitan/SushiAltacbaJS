

let carritoDeCompras = []
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecOrigen = document.getElementById('selecOrigen')


selecOrigen.addEventListener('change',()=>{
    console.log(selecOrigen.value);
    if(selecOrigen.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(elemento => elemento.origen == selecOrigen.value))
    }
})




mostrarProductos(stockProductos)

function mostrarProductos(array){

   contenedorProductos.innerHTML = "";
   
    array.forEach(producto =>  {
        
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `
                        <div class="card">
                        <div class="card-image">
                            <img src=${producto.img}>
                            <span class="card-title">${producto.tipo}</span>
                            <a id="botonAgregar${producto.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>Origen: ${producto.origen}</p>
                            <p> $${producto.precio}</p>
                        </div>
                    </div>
        `
        contenedorProductos.appendChild(div)

        
        let btnAgregar = document.getElementById(`botonAgregar${producto.id}`)
        // console.log(btnAgregar)
    
        btnAgregar.addEventListener('click', ()=>{
            agregarAlCarrito(producto.id)
        })
        
    });
}


function agregarAlCarrito(id) {

    let agregarProducto = stockProductos.find(item => item.id == id)

    carritoDeCompras.push(agregarProducto)

    actualizarCarrito()

    let div = document.createElement('div')
    div.className='productoEnCarrito'
    div.innerHTML = `
                    <p>${agregarProducto.tipo}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <p>Cantidad: ${agregarProducto.cantidad}</p>
                    <button id="btnEliminar${agregarProducto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`

     contenedorCarrito.appendChild(div)
     
     let btnEliminar = document.getElementById(`btnEliminar${agregarProducto.id}`)

     btnEliminar.addEventListener('click',()=>{
        //  console.log(agregarProducto.id)
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != agregarProducto.id)
        actualizarCarrito()
     })

}




function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText= carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
}






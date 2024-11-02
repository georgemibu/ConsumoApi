let productos = [];

//petición a la api
async function obtenerDatos() {
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        productos = json;
    })

}

//me cargo datos operacionales en otra función para mantener el código limpio
async function mostrarDatos() {
    await obtenerDatos();
    console.log(productos)

    const listaProductos = document.getElementById('lista-productos')
    productos.forEach( producto =>{
        const item = document.createElement('div')
        item.innerHTML = `
            <h3>${producto.id}</h3>
            <h3>${producto.title}</h3>
            <h3>${producto.description}</h3>
            <img src=${producto.image} alt="imagen" />
        `;
        listaProductos.appendChild(item)
    })
}

//no olvidar invocar la función
mostrarDatos()

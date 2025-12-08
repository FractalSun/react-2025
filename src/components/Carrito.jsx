import { useState } from "react";

const Carrito = () => {
    const listaProductos = [
        {id: 1, nombre: "papas", precio: 1000},
        {id: 2, nombre: "manzanas", precio: 2000},
        {id: 3, nombre: "peras", precio: 3000}
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => { 
        setCarrito ([... carrito, producto]);
    }

    const vaciarCarrito = () => {
        setCarrito ([]);
    }

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {listaProductos.map(producto => 
                    <li key={producto.id}>
                        {producto.nombre} : 
                        {producto.precio} $ 
                        <button onClick={() => agregarCarrito(producto)}>Agregar</button>
                    </li>
                )}

            </ul>
            <hr></hr>
            <h2>Carrito</h2>
            {carrito.map(producto => 
                <p>{producto.nombre} : {producto.precio}$</p>
            )}
            <button onClick={()=> vaciarCarrito()}>Vaciar</button>
        </div>
    );
};

export default Carrito;

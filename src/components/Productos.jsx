import { useState, useEffect } from "react";

const url = 'https://693723cbf8dc350aff337a8c.mockapi.io/producto';

const Productos = () => {
    const [producto, setProducto] = useState([]);
		const [cargando, setCargando] = useState(true);
		const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
							setProducto(datos);
							setCargando(false);
						})
            .catch(error => {
							console.log(error);
							setError('Error al cargar los productos');
							setCargando(false);
						})
    },[]);

		if (cargando)
			return <p>Estamos cargando tus productos.</p>; 
		
		if (error)
			return <p>{error}</p>

    return (
		<>
    <h2>Productos</h2>
		<ul>
			{producto.map(producto => (
				<li key={producto.id}>Producto: {producto.nombre} = ${producto.precio}</li>
			))}
		</ul>
		</>
);

}

export default Productos;

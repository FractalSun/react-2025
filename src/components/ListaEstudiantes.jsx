import Estudiante from "./Estudiante.jsx";

const ListaEstudiantes = () => {
    const datosEstudiantes = [
        { nombre: "Juan Pérez", edad: 20 },
        { nombre: "María Gómez", edad: 22 },
        { nombre: "Luis Rodríguez", edad: 19 },
        { nombre: "Ana Martínez", edad: 21 }
    ];
    
    return (
         <div>
            {datosEstudiantes.map((estudiante, index) => (
                < Estudiante key={index} datosEstudiantes={estudiante}/>
            ))}
        </div>
    );

}

export default ListaEstudiantes;
import { useState, useEffect } from "react";
import Libro from "../components/Libro"

const VistaLibros = () => {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        async function fetchLibros() {
            const res = await fetch(`${import.meta.env.VITE_API_URL}`);
            const data = await res.json();
            setLibros(data.data);
        }
        fetchLibros();
    }, []);

    return (
        <>
            <h2 className='text-blue-800 font-bold text-2xl'>Libros</h2>
            <p className='mt-2 text-base'>En este apartado puedes ver, editar y eliminar los libros diponibles en el inventario.</p>

            {
                libros.map(libro => <Libro key={libro.id} libro={libro.attributes} id={libro.id} libros={libros} setLibros={setLibros} />)
            }

        </>

    )
}

export default VistaLibros
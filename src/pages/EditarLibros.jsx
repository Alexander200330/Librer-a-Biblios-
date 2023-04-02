import { obtenerLibro } from "../data/libros"
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"

const EditarLibros = () => {
    const { libroId } = useParams()
    const [libro, setLibro] = useState({})

    useEffect(() => {
        const fetchLibro = async () => {
          const data = await obtenerLibro(libroId);
          setLibro(data);
        };
        fetchLibro();
      }, [libroId]);

    return (
        <>
            <h2 className='text-blue-800 font-bold text-2xl'>Editar Libros</h2>
            <p className='mt-2 text-base'>En este apartado puedes editar los libros diponibles en el inventario.</p>

            <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
                <Formulario libro={libro.attributes} id={libro.id} />
            </div>
        </>
    )
}

export default EditarLibros

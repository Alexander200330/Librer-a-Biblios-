import { eliminarLibro } from "../data/libros"
import { useLocation, useNavigate } from "react-router-dom"

const Libro = ({ libro, id, libros, setLibros }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleEliminar = async () => {
        const resultado = confirm("¿Deseas eliminar el libro?")

        if (resultado) {
            await eliminarLibro(id)
            const librosFiltrados = libros.filter(libro => libro.id !== id)
            setLibros(librosFiltrados)
        } else {
            return
        }
    }

    return (
        <>
            <div className="bg-white rounded-lg mt-5 p-10 shadow-lg">
                <h5 className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">ID: <span className="normal-case text-black font-normal text-base">{id}</span></h5>
                <h5 className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">Título: <span className="normal-case text-black font-normal text-base">{libro.titulo}</span></h5>
                <h6 className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">Autor: <span className="normal-case text-black font-normal text-base">{libro.autor}</span></h6>
                <p className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">Descripción : <span className="normal-case text-black font-normal text-base">{libro.descripcion}</span></p>
                <p className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">Cantidad: <span className="normal-case text-black font-normal text-base">{libro.cantidad}</span></p>
                <p className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">fecha de registro: <span className="normal-case text-black font-normal text-base">{libro.fecha_registro}</span></p>
                <p className="text-blue-800 leading-8 font-bold text-base uppercase text-justify">Precio unitario: <span className="normal-case text-black font-normal text-base">{libro.precio_unitario}</span></p>
                {
                    location.pathname === "/libros" && <>
                        <button className="bg-blue-700 hover:bg-blue-800 py-2 px-3 font-bold text-white text-center mr-5 uppercase rounded-md mt-2"
                            onClick={() => navigate(`/libro/${id}/editar`)}>Actualizar</button>
                        <button className="bg-red-600 hover:bg-red-700 py-2 px-3 font-bold text-white text-center mr-5 uppercase rounded-md"
                            onClick={handleEliminar}>Eliminar</button>
                    </>
                }
            </div>
        </>

    )
}

export default Libro
import { useState } from "react";
import { agregarLibro } from "../data/libros";
import Error from "./Error";

const Formulario = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [precio_unitario, setPrecio_unitario] = useState(0);
    const [fecha_registro, setFecha_registro] = useState("");
    const [errores, setErrores] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values([titulo, autor, descripcion, cantidad, precio_unitario, fecha_registro]).includes('')) {
            setErrores('Todos los campos son obligatorios');
            return errores
        }


        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('autor', autor);
        formData.append('descripcion', descripcion);
        formData.append('cantidad', Number(cantidad));
        formData.append('precio_unitario', Number(precio_unitario));
        formData.append('fecha_registro', fecha_registro);

        agregarLibro(formData)

        setTitulo("");
        setAutor("");
        setCantidad(0);
        setDescripcion("");
        setFecha_registro("");
        setPrecio_unitario(0)
        setErrores("")


    }


    // Obtener fecha actual
    let fechaActual = new Date();
    fechaActual.setMinutes(fechaActual.getMinutes() - fechaActual.getTimezoneOffset());
    fechaActual = fechaActual.toISOString().slice(0, 10);

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            {errores !== "" ? <Error>{errores}</Error> : ""}

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="titulo"
                >Título:</label>
                <input
                    id="titulo"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Título del libro"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="autor"
                >Autor:</label>
                <input
                    id="autor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Autor del libro"
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="descripcion"
                >Descripcion:</label>
                <textarea
                    as="textarea"
                    id="descripcion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100 h-35 align-self"
                    placeholder="Descripcion del libro"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}

                />

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="cantidad"
                    >Cantidad:</label>
                    <input
                        id="cantidad"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-100"
                        placeholder="Cantidad de libros"
                        value={cantidad}
                        onChange={e => setCantidad(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="precio"
                    >Precio Unitario:</label>
                    <input
                        id="precio"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-100"
                        placeholder="Precio unitario"
                        value={precio_unitario}
                        onChange={e => setPrecio_unitario(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="fecha"
                    >Fecha de registro:</label>
                    <input
                        id="fecha"
                        type="date"
                        className="mt-2 block w-full p-3 bg-gray-100"
                        placeholder="Fecha de registro"
                        value={fecha_registro}
                        onChange={e => setFecha_registro(e.target.value)}
                    />
                </div>

            </div>

            <input className="bg-blue-800 hover:bg-blue-900 w-full mt-5 text-white uppercase font-bold px-3  py-2 rounded-md hover:cursor-pointer" type='submit' value={'Agregar libro'} />
        </form>
    )
}

export default Formulario
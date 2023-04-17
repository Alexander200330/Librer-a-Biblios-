import { useActionData } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { useRedirectIfNotAuth } from "../hooks/authorization";


const Inventario = () => {

	useRedirectIfNotAuth()();

	const errores = useActionData();

	return (
		<>
			<h2 className="text-blue-800 font-bold text-2xl">Agregar Libro</h2>
			<p className="mt-2 text-base">
				Llena todos los campos para registrar un nuevo libro.
			</p>

			<div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}
				<Formulario />
			</div>
		</>
	);
};

export default Inventario;

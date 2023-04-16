import { useNavigate, useActionData } from "react-router-dom";
import Error from "../components/Error";
import Formulario from "../components/Formulario";
import { useRedirectIfNotAuth } from "../hooks/authorization";

// export async function action({ request }) {

//   const formData = await request.formData();
//   const datos = Object.fromEntries(formData)

//     const imagen = formData.get("imagen")

//   // Validar formulario

//   const errores = [];
//   if (Object.values(datos).includes('')) {
//     errores.push('Todos los campos son obligatorios')
//   }

//   // retornando errores

// //   if (Object.keys(errores).length) {
// //     return errores
// //   }

//   // Agregar libro

//   await agregarLibro(datos, imagen)

//   return redirect('/inventario')

// }

const Inventario = () => {
	const navigate = useNavigate();

	useRedirectIfNotAuth()();

	const errores = useActionData();

	return (
		<>
			<h2 className="text-blue-800 font-bold text-2xl">Inventario</h2>
			<p className="mt-2 text-base">
				Llena todos los campos para registrar un nuevo libro.
			</p>

			<div className="flex justify-end">
				<button
					className="bg-blue-800 hover:bg-blue-900 text-white uppercase font-bold px-3  py-2 rounded-md"
					onClick={() => navigate(-1)}
				>
					Volver
				</button>
			</div>

			<div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}
				<Formulario />
			</div>
		</>
	);
};

export default Inventario;

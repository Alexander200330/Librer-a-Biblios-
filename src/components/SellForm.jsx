import { useEffect, useState } from "react";
import { postSell } from "../services/api/sells";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import sellSchema from "../models/sell/schema";
import SellModel from "../models/sell";
import { login } from "../services/api/auth";
import { getBookById, updateBook } from "../services/api/books";

const SellForm = ({ sellInfo, setSellInfo }) => {
	const [idBook, setIdBook] = useState("");
	const [quantity, setQuantity] = useState("");
	const [unityPrice, setUnityPrice] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [dateSell, setDateSell] = useState("");
	const [errores, setErrores] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [book, setBook] = useState(null);

	const navigate = useNavigate();

	// Search book when user focus out id input
	const handleOnBlur = async (e) => {
		try {
			const { data } = await getBookById(idBook);

			if (data.attributes.cantidad < 1)
				throw "El libro no tiene existencias";

			setUnityPrice(Number(data.attributes.precio_unitario));
			setBook(data.attributes);
			setDisabled(false);
		} catch (error) {
			//console.log(error);
			setErrores(error);
			setDisabled(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const sellObj = new SellModel(
			idBook,
			Number(unityPrice),
			Number(totalPrice),
			dateSell,
			Number(quantity)
		);

		if (
			!sellSchema.isValid(sellObj.getJSON()) ||
			Object.values(sellObj).includes("")
		) {
			setErrores("Todos los campos son obligatorios");
			return;
		}

		if (book != null) {
			postSell(sellObj.getJSONToDB())
				.then((e) => {
					const upBook = book;
					upBook.cantidad--;
					updateBook(upBook, idBook).then(console.log(e));
					//console.log(e);
				})
				.catch((e) => {
					//console.log(e);
				});
			return navigate("/VistaVenta");
		}

		/*setTitulo("");
        setAutor("");
        setCantidad(0);
        setDescripcion("");
        setFecha_registro("");
        setPrecio_unitario(0)
        setErrores("")*/
	};

	// Obtener fecha actual
	let fechaActual = new Date();
	fechaActual.setMinutes(
		fechaActual.getMinutes() - fechaActual.getTimezoneOffset()
	);
	fechaActual = fechaActual.toISOString().slice(0, 10);

	return (
		<form onSubmit={handleSubmit} encType="multipart/form-data">
			{errores !== "" ? <Error>{errores}</Error> : ""}
			{disabled ? <Error>{"Indique un id valido"}</Error> : ""}

			<div className="mb-4">
				<label
					className="text-gray-800"
					htmlFor="idLibro"
					onClick={() => {
						login({
							identifier: "biblio",
							password: "Password123",
						}).then((e) => {
							console.log(e);
						});
					}}
				>
					Id Libro:
				</label>
				<input
					id="idLibro"
					type="text"
					className="mt-2 block w-full p-3 bg-gray-100"
					placeholder="000-CCC"
					value={idBook}
					onChange={(e) => setIdBook(e.target.value)}
					onBlur={handleOnBlur}
				/>
			</div>
			<div className="mb-4">
				<label className="text-gray-800" htmlFor="quantity">
					Cantidad Vendida:
				</label>
				<input
					id="quantity"
					type="number"
					className="mt-2 block w-full p-3 bg-gray-100"
					placeholder="000"
					value={quantity}
					onChange={(e) => {
						setQuantity(e.target.value);
						setTotalPrice(e.target.value * unityPrice);
					}}
					disabled={disabled}
				/>
			</div>

			<div className="mb-4">
				<label className="text-gray-800" htmlFor="unityPrice">
					Costo por unidad:
				</label>
				<input
					id="unityPrice"
					type="number"
					className="mt-2 block w-full p-3 bg-gray-100"
					placeholder="000"
					value={unityPrice}
					onChange={(e) => setUnityPrice(e.target.value)}
					disabled={true}
				/>
			</div>
			<div className="mb-4">
				<label className="text-gray-800" htmlFor="total">
					Costo Total:
				</label>
				<input
					id="total"
					type="number"
					className="mt-2 block w-full p-3 bg-gray-100"
					placeholder="000"
					value={totalPrice}
					onChange={(e) => setTotalPrice(e.target.value)}
					disabled={true}
				/>
			</div>
			<div className="mb-4">
				<label className="text-gray-800" htmlFor="dateSell">
					Fecha de venta:
				</label>
				<input
					id="dateSell"
					type="date"
					className="mt-2 block w-full p-3 bg-gray-100"
					placeholder="Fecha de registro"
					value={dateSell}
					onChange={(e) => setDateSell(e.target.value)}
					disabled={disabled}
				/>
			</div>

			<input
				className="bg-blue-800 hover:bg-blue-900 w-full mt-5 text-white uppercase font-bold px-3  py-2 rounded-md hover:cursor-pointer"
				type="submit"
				value="Crear venta"
			/>
		</form>
	);
};

export default SellForm;

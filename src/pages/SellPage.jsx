import React, { useEffect, useState } from "react";
import { redirect, useActionData, useNavigate } from "react-router-dom";
import SellForm from "../components/SellForm";
import { useRedirectIfNotAuth } from "../hooks/authorization";

function SellPage() {
	const navigate = useNavigate();
	const [sellInfo, setSellInfo] = useState();

	const errores = useActionData();

	useRedirectIfNotAuth()();

	return (
		<>
			<h2 className="text-blue-800 font-bold text-2xl">Ventas</h2>
			<p className="mt-2 text-base">
				Llena todos los campos para registrar una nueva venta.
			</p>

			<div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}
				<SellForm />
			</div>
		</>
	);
}

export default SellPage;

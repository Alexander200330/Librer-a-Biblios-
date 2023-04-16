import apiBase from "../../../utilities/axios";
import { config } from "../auth/config";

const bookApi = apiBase("ventas");

export async function postSell(data) {
	try {
		const d = {
			...data,
			id_libro: data.id_libro_vendido,
		};
		const dt = await bookApi.post("/", { data: d }, config());
		return dt;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

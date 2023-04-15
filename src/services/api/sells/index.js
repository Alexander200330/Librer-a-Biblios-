import apiBase from "../../../utilities/axios";
import { config } from "../auth/config";

const bookApi = apiBase("ventas");

export async function postSell(data) {
	try {
		const dt = await bookApi.post("/", { data: data }, config());
		return dt;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

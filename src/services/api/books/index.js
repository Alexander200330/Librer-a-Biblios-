import apiBase from "../../../utilities/axios";
import { config } from "../auth/config";

const bookApi = apiBase("libros");

export async function postBook(data) {
	try {
		const dt = await bookApi.post("/", { data: data }, config());
		return dt.data;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

export async function deleteBook(id) {
	try {
		const dt = await bookApi.delete(`/${id}`, config());
		return dt.data;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

export async function updateBook(data, id) {
	try {
		const dt = await bookApi.put(`/${id}`, { data }, config());
		return dt.data;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

export async function getBookById(id) {
	try {
		const dt = await bookApi.get(`/${id}`);
		return dt.data;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}

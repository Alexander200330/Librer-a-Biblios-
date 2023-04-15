import apiBase from "../../../utilities/axios";

const bookApi = apiBase("auth");

export async function login(user) {
	const dt = await bookApi.post("/local", user);
	return dt.data;
}

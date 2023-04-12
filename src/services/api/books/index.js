import apiBase from "../../../utilities/axios";

const bookApi = apiBase('libros');

export async function postBook(data) {
    const dt = await bookApi.post('/', {data: data});
    return dt;
}


import apiBase from "../../../utilities/axios";

const bookApi = apiBase('ventas');

export async function postSell(data) {
    try
    {   
        const dt = await bookApi.post('/', {data: data});
        return dt;
    }
    catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}

export async function updateSell(data, id) {
    try
    {
        const dt = await bookApi.put(`/${id}`, {data: data});
        return dt;
    }
    catch(error)
    {
        console.log(error);
        throw new Error(error);
    }
}
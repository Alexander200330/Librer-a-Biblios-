import { login } from "../../services/api/auth";
import { saveUser } from "../../services/localstorage";

export async function searchAndLogUser(user) {
	try {
		const info = await login(user);
		console.log(info.user);
		saveUser({ jwt: info.jwt, username: info.user.username });
		return 1;
	} catch (error) {
		console.log(error);
		return null;
	}
}

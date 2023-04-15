export function saveUser(user) {
	localStorage.setItem("loggedUser", JSON.stringify(user));
}

export function getUser() {
	return localStorage.getItem("loggedUser");
}

export function destroyUser() {
	return localStorage.removeItem("loggedUser");
}

export function verifyUser() {
	return getUser() != null;
}

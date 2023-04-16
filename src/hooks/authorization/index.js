import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/localstorage";
import { useEffect } from "react";

export function useRedirectIfNotAuth(route = "login") {
	const navigator = useNavigate();
	if (!getUser()) {
		return () => {
			useEffect(() => {
				navigator("/" + route);
			});
		};
	}

	return () => {};
}

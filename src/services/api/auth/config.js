import { getUser } from "../../localstorage";

export const config = () => {
	return {
		headers: {
			Authorization: `Bearer ${getUser().jwt}`,
		},
	};
};

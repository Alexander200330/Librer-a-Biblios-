import * as Yup from "yup";

const userSchema = Yup.object().shape({
	username: Yup.string().required().nonNullable(),
	password: Yup.string().required().nonNullable(),
});

export default userSchema;

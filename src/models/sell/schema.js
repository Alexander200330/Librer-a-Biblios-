import * as Yup from 'yup';

const sellSchema = Yup.object().shape({
    idBook: Yup.string().required().default(""),
    unityPrice: Yup.number().positive().integer().required().nonNullable(),
    totalPrice: Yup.number().positive().integer().required().nonNullable(),
    sellDate: Yup.date().required().nonNullable(),
    quantity: Yup.number().positive().integer().required().nonNullable()
})

export default sellSchema;
import yup from './yupconfig';

export const loginSchema = yup
    .object({
        email: yup.string().email().required(),
    })
    .required();

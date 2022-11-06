import * as yup from "yup";
export const schema = yup.object().shape({
	name: yup.string().required("Required Field"),
	email: yup.string().email().required(),
	phone: yup
		.number()
		.integer()
		.min(10)
		.required("Required Field")
		.typeError("Invalid Phone"),
	serviceType: yup.string().required("RequiredField"),
	timeSlot: yup.string().required("RequiredField"),
	date: yup.string().required("RequiredField"),
});

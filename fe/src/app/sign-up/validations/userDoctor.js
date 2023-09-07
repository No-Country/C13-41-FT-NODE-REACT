import * as yup from 'yup';
import { countries } from './countries';

const isStrongPassword = password => {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_\-])[A-Za-z\d@$!%*?&_\-]{8,}$/;
	return regex.test(password);
};

export const doctorSchema = yup.object({
	fullname: yup.string().required(),
	birthdate: yup.date().required(),
	gender: yup.string().oneOf(['male', 'female', 'other'], 'select a gender'),
	country: yup.string().oneOf(countries, 'thats not a good response'),
	phone: yup.number().min(6).required(),
	email: yup.string().email('has to contain @ and .com, .net, etc..').required(),
	password: yup
		.string()
		.min(8)
		.test({
			message:
				'Password must be stronger, with at leat 8 characters, one capital letter, one lower case, one number and one special character',
			test: value => isStrongPassword(value),
		}),
	profesionalid: yup
		.string()
		.matches(/^[0-9]+$/, 'Must be a numeric value')
		.min(6, 'Must have at least 6 characters')
		.required('License is required'),
	nid: yup
		.string()
		.matches(/^[0-9]+$/, 'Only numbers are allowed. No dots or spaces')
		.min(6, 'Must have at least 6 characters')
		.required('NID is required'),
});

import * as yup from 'yup';

const isStrongPassword = password => {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return regex.test(password);
};

export const doctorSchema = yup.object({
	name: yup.string().required(),
	birthdate: yup.date().required(),
	gen: yup.string().oneOf(['male', 'female', 'other'], 'select a gender'),
	country: yup
		.string()
		.oneOf(
			[
				'Venezuela',
				'Colombia',
				'Argentina',
				'Chile',
				'Costa Rica',
				'Mexico',
				'Guatemala',
				'Honduras',
				'Nicaragua',
				'Peru',
				'Uruguay',
				'El Salvador',
				'Ecuador',
				'Bolivia',
			],
			'thats not a good response',
		),
	phone: yup.number().min(6).required(),
	email: yup.string().email('has to contain @ and .com, .net, etc..').required(),
	password: yup
		.string()
		.min(8)
		.test({
			message:
				'Password must be stronger, with at leat 8 characters, one capital letter, one lower case and one special character',
			test: value => isStrongPassword(value),
		}),
	license: yup
		.string()
		.matches(/^[0-9]+$/, 'Must be a numeric value')
		.min(6, 'Must have at least 6 characters')
		.required('License is required'),
	// checkbox: yup.boolean().required()
});

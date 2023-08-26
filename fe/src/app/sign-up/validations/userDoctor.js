import * as yup from 'yup';

const isStrongPassword = password => {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return regex.test(password);
};

export const doctorSchema = yup.object({
	name: yup.string().required('Fullname is required'),
	birthdate: yup.date().required('Birthdate is required'),
	gender: yup.string().oneOf(['Male', 'Female', 'Other'], 'Select a gen'),
	country: yup
		.string()
		.oneOf([
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
		]),
	phone: yup.string().min(6, 'Must be at least 6 characters').required('Phone is required'),
	email: yup.string().email('invalid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Must be at least 8 characters')
		.max(40, 'Must be 40 characters or less')
		.test({
			message:
				'Password must be stronger, with at leat 8 characters, one capital letter, one lower case and one special character',
			test: value => isStrongPassword(value),
		}),
	license: yup.string().required('License is required'),
});

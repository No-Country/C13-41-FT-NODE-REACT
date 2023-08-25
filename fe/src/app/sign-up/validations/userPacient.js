import * as yup from 'yup'
const isStrongPassword = password => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};
export const patientSchema = yup.object({
  name: yup.string().required(),
  birthdate : yup.date().required(),
  gen: yup.string().oneOf(['Male', 'Female', 'Other'], 'select a gen'),
  country: yup.string().oneOf(['Venezuela', 'Colombia', 'Argentina', 'Chile', 'Costa Rica', 'Mexico', 'Guatemala', 'Honduras', 'Nicaragua', 'Peru', 'Uruguay', 'El Salvador', 'Ecuador', 'Bolivia']),
  phone: yup.number().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).test('password must be stronger, with at leat 8 characters, one capital letter, one lower case and one special character', value  => isStrongPassword(value)),
  checkbox: yup.boolean()
})
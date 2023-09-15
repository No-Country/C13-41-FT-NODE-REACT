export const getSinglePatient = async patientID => {
	// sustituye el 40% por @
	const formattedPatientID = patientID.replace(/%40/g, '@');

	const response = await fetch(
		`http://localhost:3005/api/v1/patient?email=${formattedPatientID}`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${localStorage.getItem('token')}`,
			},
		},
	);
	const patient = await response.json();

	return patient;
};

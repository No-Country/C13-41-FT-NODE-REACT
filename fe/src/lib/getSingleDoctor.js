export const getSingleDoctor = async doctorID => {
	// sustituye el 40% por @
	const formattedDoctorID = doctorID.replace(/%40/g, '@');

	const response = await fetch(
		`http://localhost:3005/api/v1/medic?email=${formattedDoctorID}`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${localStorage.getItem('token')}`,
			},
		},
	);
	const doctor = await response.json();

	return doctor;
};
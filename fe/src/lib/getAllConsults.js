export const getAllConsultsByPatient = async patientId => {
	const response = await fetch(
		`http://localhost:3005/api/v1/consult?patientId=${patientId}`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${localStorage.getItem('token')}`,
			},
		},
	);
	if (!response) {
		throw new Error('No se pudieron obtener las consultas');
	}
	return response.json();
};

export const getAllConsultsByDoctor = async medicId => {
	const response = await fetch(
		`http://localhost:3005/api/v1/consult?medicId=${medicId}`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${localStorage.getItem('token')}`,
			},
		},
	);

	if (!response) {
		throw new Error('No se pudieron obtener las consultas');
	}
	return response.json();
};

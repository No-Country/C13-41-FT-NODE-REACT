export const getAllDoctors = async () => {
	const response = await fetch('http://localhost:3005/api/v1/medic', {
		method: 'GET',
		headers: {
			Authorization: `bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response.ok) {
		throw new Error('No se pudieron obtener los datos de los médicos');
	}

	return response.json();
};
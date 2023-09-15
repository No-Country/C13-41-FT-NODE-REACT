export const getAllSpecialities = async () => {
	const response = await fetch('http://localhost:3005/api/v1/specialty', {
		method: 'GET',
		headers: {
			Authorization: `bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response) throw new Error('No se pudieron obtener las especialidades');

	return response.json();
};

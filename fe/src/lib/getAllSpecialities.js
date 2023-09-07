export const getAllSpecialities = async () => {
	const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/specialty', {
		method: 'GET',
		headers: {
			Authorization: `bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response) throw new Error('No se pudieron obtener las especialidades');

	return response.json();
};

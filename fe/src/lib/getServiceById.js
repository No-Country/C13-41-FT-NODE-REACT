export const getServiceById = async id => {
	const response = await fetch(`http://localhost:3005/api/v1/service?serviceId=${id}`, {
		method: 'GET',
		headers: {
			Authorization: `bearer ${localStorage.getItem('token')}`,
		},
	});

	if (!response) {
		throw new Error('No se pudieron obtener los datos de los servicios');
	}

	return response.json();
};

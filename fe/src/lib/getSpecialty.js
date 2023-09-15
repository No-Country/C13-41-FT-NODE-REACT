export async function getSpecialty() {
	const response = await fetch('http://localhost:3005/api/v1/specialty', {
		method: 'GET',
		headers: {
			Authorization: `bearer ${localStorage.getItem('token')}`,
		},
	});
	if (!response) {
		throw new Error();
	}
	return response.json();
}

export async function getSpecialty() {
	const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/specialty', {
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

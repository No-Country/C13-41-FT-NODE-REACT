const fakeConsultations = [
	{
		diagnostic: 'Headache',
		recipe: 'Rest and drink water',
		consultTimestamp: '2023-08-29T10:00:00Z',
		status: 'finished',
		resume: 'The patient reported a constant headache...',
		urlFile: 'https://example.com/file1',
		patient: {
			id: 1,
			name: 'Juan Perez',
		},
		doctor: {
			id: 101,
			fullname: 'Dr. Ana Garcia',
			speciality: 'Neurology',
			email: 'ana.garcia@example.com',
		},
	},
	{
		diagnostic: 'Flu',
		recipe: 'Medications: pain relievers, fluids, and rest',
		consultTimestamp: '2023-08-25T14:30:00Z',
		status: 'finished',
		resume: 'The patient presented symptoms of the flu...',
		urlFile: 'https://example.com/file2',
		patient: {
			id: 1,
			name: 'Juan Perez',
		},
		doctor: {
			id: 102,
			fullname: 'Dr. Luis Martinez',
			speciality: 'Internal Medicine',
			email: 'luis.martinez@example.com',
		},
	},
	{
		diagnostic: 'Ankle Sprain',
		recipe: 'Immobilization and pain relievers',
		consultTimestamp: '2023-08-20T11:45:00Z',
		status: 'finished',
		resume: 'The patient suffered an ankle sprain during...',
		urlFile: 'https://example.com/file3',
		patient: {
			id: 1,
			name: 'Juan Perez',
		},
		doctor: {
			id: 103,
			fullname: 'Dr. Javier Rodriguez',
			speciality: 'Orthopedics',
			email: 'javier.rodriguez@example.com',
		},
	},
	{
		diagnostic: 'Sore Throat',
		recipe: 'Gargling and medications',
		consultTimestamp: '2023-08-15T09:15:00Z',
		status: 'finished',
		resume: 'The patient complained of a sore throat and difficulty...',
		urlFile: 'https://example.com/file4',
		patient: {
			id: 1,
			name: 'Juan Perez',
		},
		doctor: {
			id: 104,
			fullname: 'Dr. Laura Hernandez',
			speciality: 'Otolaryngology',
			email: 'laura.hernandez@example.com',
		},
	},
	{
		diagnostic: 'Routine Checkup',
		recipe: 'General review, no prescriptions',
		consultTimestamp: '2023-08-10T16:30:00Z',
		status: 'finished',
		resume: 'The patient visited for a routine checkup...',
		urlFile: 'https://example.com/file5',
		patient: {
			id: 1,
			name: 'Juan Perez',
		},
		doctor: {
			id: 105,
			fullname: 'Dr. Carlos Sanchez',
			speciality: 'Family Medicine',
			email: 'carlos.sanchez@example.com',
		},
	},
];

export default fakeConsultations;

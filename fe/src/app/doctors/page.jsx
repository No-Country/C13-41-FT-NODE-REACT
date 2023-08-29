'use client';
import { useFilterContext } from '@/contexts/Filters.context';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Container,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

const DoctorsPage = () => {
	const {
		filteredDoctor,
		allDoctors,
		setFilterByCountry,
		filterByCountry,
		setFilterByName,
		filterBySpecialty,
		setFilterBySpecialty,
	} = useFilterContext();

	const countryList = new Set(allDoctors.map(doctor => doctor.country));
	const specialtyList = new Set(allDoctors.map(doctor => doctor.specialty));

	return (
		<Container component={'main'}>
			<Box
				component={'section'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ backgroundColor: '#f2f2f2' }}
				p={2}
			>
				<TextField
					id='outlined-search'
					label='Search by name'
					type='search'
					fullWidth
					onChange={e => setFilterByName(e.target.value)}
				/>
			</Box>
			<Box component={'section'} display={'flex'} flexDirection={'row'}>
				<Container
					component={'aside'}
					sx={{ backgroundColor: '#e2e2e2', minHeight: '100vh', width: '30%', padding: '1rem' }}
				>
					<Box>
						<Typography variant='h6'>Country</Typography>
						<TextField
							id='demo-simple-select'
							select
							label='Select a Country'
							value={filterByCountry}
							onChange={e => setFilterByCountry(e.target.value)}
							fullWidth
						>
							{[...countryList].map(country => (
								<MenuItem key={country} value={country}>
									{country}
								</MenuItem>
							))}
						</TextField>
						<Button variant='contained' onClick={() => setFilterByCountry('')}>
							Clear country
						</Button>
					</Box>
					<Box>
						<Typography variant='h6'>Specialty</Typography>
						<TextField
							id='demo-simple-select'
							select
							label='Select a Specialty'
							value={filterBySpecialty}
							onChange={e => setFilterBySpecialty(e.target.value)}
							fullWidth
						>
							{[...specialtyList].map(specialty => (
								<MenuItem key={specialty} value={specialty}>
									{specialty}
								</MenuItem>
							))}
						</TextField>
						<Button variant='contained' onClick={() => setFilterBySpecialty('')}>
							Clear specialty
						</Button>
					</Box>
				</Container>
				<Container component={'section'}>
					<Box component={'div'} display={'flex'} flexDirection={'column'} rowGap={3} paddingY={4}>
						{filteredDoctor.length > 0 ? (
							filteredDoctor.map(doctor => {
								return (
									<Card>
										<CardHeader title={doctor.fullname} sx={{ backgroundColor: '#34A0A4' }}></CardHeader>
										<CardContent>
											<Typography>{doctor.specialty}</Typography>
											<Typography>{doctor.country}</Typography>
										</CardContent>
									</Card>
								);
							})
						) : (
							<Typography>No doctors available</Typography>
						)}
					</Box>
				</Container>
			</Box>
		</Container>
	);
};

export default DoctorsPage;

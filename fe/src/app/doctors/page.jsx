'use client';
import { useFilterContext } from '@/contexts/Filters.context';
import {
	Box,
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
	const { filteredDoctor, allDoctors, setFilterByCountry, setFilterByName, setFilterBySpecialty } =
		useFilterContext();
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
					<div>Inputs selects</div>
					<Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</Container>
				<Container component={'section'}>
					<div>Cards de médicos segun busqueda</div>
					<Box component={'div'} display={'flex'} flexDirection={'column'} rowGap={3}>
						{filteredDoctor?.map(doctor => {
							return (
								<Card>
									<CardHeader title={doctor.fullname} sx={{ backgroundColor: '#34A0A4' }}></CardHeader>
									<CardContent>
										<Typography>{doctor.specialty}</Typography>
										<Typography>{doctor.country}</Typography>
									</CardContent>
								</Card>
							);
						})}
					</Box>
				</Container>
			</Box>
		</Container>
	);
};

export default DoctorsPage;

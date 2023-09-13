'use client';
import { useFilterContext } from '@/contexts/Filters.context';
import { Box, Button, Chip, Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import DoctorCard from '../../../Components/Appointments/DoctorCard';
import { getAllSpecialities } from '@/lib/getAllSpecialities';
import SearcherInput from './SearcherInput';
import FiltersAside from './FiltersAside';

const DoctorsPage = () => {
	const [specialties, setSpecialties] = useState([]);
	const {
		filteredDoctor,
		allDoctors,
		setFilterByCountry,
		filterByCountry,
		setFilterByName,
		filterBySpecialty,
		setFilterBySpecialty,
		isLoading,
		fetchData,
	} = useFilterContext();

	const countryList = new Set(allDoctors.map(doctor => doctor.country));

	const fetchSpecialties = async () => {
		try {
			const data = await getAllSpecialities();
			const specialtiesList = data.data.specialties.map(specialty => specialty.name);
			setSpecialties(specialtiesList);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchSpecialties();
	}, []);

	useEffect(() => {
		if (!isLoading) {
			// Solo llamar a fetchData cuando no está cargando
			fetchData();
		}
	}, [isLoading, fetchData]);

	return (
		<Container component={'main'} sx={{ paddingY: 4 }}>
			<SearcherInput setFilterByName={setFilterByName} />
			<Box component={'section'} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} gap={4}>
				<FiltersAside
					filterByCountry={filterByCountry}
					setFilterByCountry={setFilterByCountry}
					filterBySpecialty={filterBySpecialty}
					setFilterBySpecialty={setFilterBySpecialty}
					countryList={countryList}
					specialties={specialties}
				/>
				<Divider orientation='vertical' flexItem />
				<Box component={'section'} width={{ xs: '100%', sm: '80%' }} paddingX={1}>
					<Grid container spacing={2}>
						{isLoading ? (
							<Grid item xs={12}>
								<Typography
									variant='h6'
									className='inter'
									color={colors.text}
									backgroundColor={colors.inputBackground}
									borderRadius={2}
									textAlign={'center'}
									paddingX={2}
									paddingY={1}
									fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
								>
									Loading doctors...
								</Typography>
							</Grid>
						) : filteredDoctor && filteredDoctor.length > 0 ? (
							filteredDoctor.map(doctor => {
								return (
									<Grid item xs={6} md={6} key={doctor.id}>
										<DoctorCard doctor={doctor} />
										<Button
											href={`/appointments/${doctor.email}`}
											variant='contained'
											className='inter'
											fullWidth
											sx={{
												backgroundColor: colors.buttonIcon,
												color: 'white',
												textTransform: 'none',
												mt: 1,
												':hover': { backgroundColor: colors.buttonIcon },
											}}
											fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
										>
											Book now
										</Button>
									</Grid>
								);
							})
						) : (
							<Grid item xs={12}>
								<Typography
									variant='h6'
									className='inter'
									color={colors.text}
									backgroundColor={colors.inputBackground}
									borderRadius={2}
									textAlign={'center'}
									paddingX={2}
									paddingY={1}
									fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
								>
									No doctors available
								</Typography>
							</Grid>
						)}
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default DoctorsPage;

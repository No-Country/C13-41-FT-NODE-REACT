'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import fakeConsultations from './fakeConsultationData';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import { useAuth } from '@/contexts/Auth.context';
import AppointmentCard from '../../../Components/Appointments/AppointmentCard';
import NearbyDoctorsSection from './NearbyDoctorsSection';
import ServicesSection from './ServicesSection';
import Greetings from './Greetings';

const UserHomePage = () => {
	const { userData } = useAuth();

	function compareConsultationDates(a, b) {
		const dateA = new Date(a.consultTimestamp);
		const dateB = new Date(b.consultTimestamp);
		return dateA - dateB;
	}

	fakeConsultations.sort(compareConsultationDates);

	return (
		<Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 4, paddingY: 4 }}>
			<Greetings userData={userData} />
			<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
				<Box component={'div'}>
					<Typography
						variant='h4'
						color={colors.text}
						fontWeight={500}
						className='inter'
						fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
					>
						Upcoming appointments
					</Typography>
				</Box>
				<Grid container spacing={2}>
					{fakeConsultations &&
						fakeConsultations.map((consultation, idx) => {
							return (
								<Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
									<AppointmentCard consultation={consultation} />
								</Grid>
							);
						})}
				</Grid>
			</Box>
			<ServicesSection />
			<NearbyDoctorsSection userData={userData} />
		</Container>
	);
};

export default UserHomePage;

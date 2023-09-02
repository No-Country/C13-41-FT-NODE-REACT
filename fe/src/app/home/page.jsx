'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import React from 'react';
import fakeConsultations from './fakeConsultationData';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import { useAuth } from '@/contexts/Auth.context';
import AppointmentCard from '../../../Components/Appointments/AppointmentCard';
import ServiceCard from '../../../Components/Appointments/ServicesCard';

const servicesLabels = ['labs', 'vaccines', 'doctors', 'medications', 'EHR'];
const { labs, vaccines, doctors, medication, ehr } = colors.categoryIcons;
const servicesIconColor = [labs, vaccines, doctors, medication, ehr];

const UserHomePage = () => {
	const { userData } = useAuth();
	return (
		<Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 4, paddingY: 4 }}>
			<Box component={'section'}>
				<Typography
					variant='h1'
					color={colors.text}
					className='inter'
					fontWeight={700}
					sx={{ lineHeight: 1.5 }}
					fontSize={{ xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 }}
				>
					Good morning, <br />{' '}
					<Typography
						component='span'
						className='inter'
						fontSize={{ xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 }}
						fontWeight={400}
					>
						{userData && userData.fullname.split(' ')[0]}!
					</Typography>
				</Typography>
			</Box>
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
			<Box component={'section'} display={'flex'} flexDirection={'column'} rowGap={2}>
				<Box component={'div'}>
					<Typography
						variant='h4'
						color={colors.text}
						fontWeight={500}
						className='inter'
						fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
					>
						Services
					</Typography>
				</Box>
				<Box
					component={'section'}
					display={'flex'}
					flexDirection={'row'}
					alignItems={'center'}
					columnGap={2}
				>
					{servicesLabels ? (
						servicesLabels.map((service, idx) => {
							console.log('service', service);
							console.log('idx', idx);
							console.log('color', servicesIconColor[idx]);
							return (
								<ServiceCard key={idx} serviceLabel={service} serviceIconColor={servicesIconColor[idx]} />
							);
						})
					) : (
						<></>
					)}
				</Box>
			</Box>
		</Container>
	);
};

export default UserHomePage;

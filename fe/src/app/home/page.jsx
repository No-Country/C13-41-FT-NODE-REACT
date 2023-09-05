'use client';
import { Box, Typography, Container, Grid } from '@mui/material';
import React from 'react';
import fakeConsultations from './fakeConsultationData';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import { useAuth } from '@/contexts/Auth.context';
import AppointmentCard from '../../../Components/Appointments/AppointmentCard';
import ServiceCard from '../../../Components/Appointments/ServicesCard';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import DoctorCard from '../../../Components/Appointments/DoctorCard';
import { fakeDoctorData } from '../doctors/fakeDoctosData';

const servicesLabels = ['labs', 'vaccines', 'doctors', 'medications', 'EHR'];
const { labs, vaccines, doctors, medication, ehr } = colors.categoryIcons;
const servicesColor = [labs, vaccines, doctors, medication, ehr];
const servicesIcon = [
	<BiotechOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
	<VaccinesOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
	<MasksOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
	<MedicationOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
	<FolderOpenOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
];

const UserHomePage = () => {
	const { userData } = useAuth();
	const nearbyDoctors = fakeDoctorData.filter(doctor => {
		return doctor.country.toLowerCase().includes(userData?.country?.toLowerCase());
	});
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
					gap={2}
					flexWrap={'wrap'}
				>
					{servicesLabels ? (
						servicesLabels.map((service, idx) => {
							return (
								<ServiceCard
									key={idx}
									serviceLabel={service}
									serviceColor={servicesColor[idx]}
									serviceIcon={servicesIcon[idx]}
								/>
							);
						})
					) : (
						<></>
					)}
				</Box>
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
						Nearby doctors
					</Typography>
				</Box>
				<Grid container spacing={2}>
					{nearbyDoctors.length > 0 ? (
						nearbyDoctors.map((doctor, idx) => {
							return (
								<Grid item key={idx} xs={6} sm={4} lg={3}>
									<DoctorCard doctor={doctor} />
								</Grid>
							);
						})
					) : (
						<Typography
							variant='body2'
							className='inter'
							color={colors.text}
							fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
						>
							No doctors nearby
						</Typography>
					)}
				</Grid>
			</Box>
		</Container>
	);
};

export default UserHomePage;

'use client';
import { CalendarMonthRounded, EmailRounded, StarRounded } from '@mui/icons-material';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React from 'react';

const AppointmentCard = ({ consultation, patient, doctor, userData }) => {
	const isMedic = userData && userData.profesionalid;
	console.log('doctor', doctor);
	console.log('patient', patient);
	console.log('consult', consultation);
	return (
		<Card
			sx={{
				backgroundColor: colors.cardBackground,
				boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
				borderRadius: '0.5rem',
			}}
		>
			<CardHeader
				className='inter'
				sx={{ color: colors.text }}
				avatar={
					<Avatar
						sx={{ backgroundColor: colors.categoryIcons.vaccines }}
						aria-label='recipe'
						src={isMedic ? patient.avatar : doctor.avatar}
					>
						{doctor && doctor.fullname?.split(' ')[1].charAt(0).toUpperCase()}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<StarRounded sx={{ color: colors.starIcon }} />
					</IconButton>
				}
				title={doctor && doctor.fullname}
				subheader={'Especialidad'}
				// subheader={consultation.doctor.speciality}
			/>

			<CardContent>
				<Stack direction={'row'} spacing={1} alignItems={'center'}>
					<CalendarMonthRounded fontSize='small' sx={{ color: colors.buttonIcon }} />
					<Typography
						variant='body2'
						className='inter'
						color={colors.text}
						fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
					>
						{new Date(consultation.consultTimestamp).toDateString()}
					</Typography>
				</Stack>
				<Stack direction={'row'} spacing={1} alignItems={'center'}>
					<EmailRounded fontSize='small' sx={{ color: colors.buttonIcon }} />
					<Typography
						variant='body2'
						className='inter'
						color={colors.text}
						fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
					>
						{/* {consultation.doctor.email} */}Email
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default AppointmentCard;

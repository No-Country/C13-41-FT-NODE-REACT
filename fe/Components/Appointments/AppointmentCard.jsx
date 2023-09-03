'use client';
import { CalendarMonthRounded, EmailRounded, StarRounded } from '@mui/icons-material';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React from 'react';

const AppointmentCard = ({ consultation }) => {
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
					<Avatar sx={{ backgroundColor: colors.categoryIcons.vaccines }} aria-label='recipe'>
						{consultation.doctor.fullname.split(' ')[1].charAt(0).toUpperCase()}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<StarRounded sx={{ color: colors.starIcon }} />
					</IconButton>
				}
				title={consultation.doctor.fullname}
				subheader={consultation.doctor.speciality}
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
						{consultation.doctor.email}
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default AppointmentCard;

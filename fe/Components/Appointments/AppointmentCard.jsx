'use client';
import {
	CalendarMonthRounded,
	EmailRounded,
	PlaceOutlined,
	StarRounded,
} from '@mui/icons-material';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React, { useEffect, useState } from 'react';
import { getServiceById } from '@/lib/getServiceById';
import format from 'date-fns/format';

const AppointmentCard = ({ consultation, patient, doctor, userData }) => {
	const [service, setService] = useState({});
	const isMedic = userData && userData.profesionalid;

	const fetchService = async () => {
		if (!userData) return;
		try {
			const service = await getServiceById(consultation.serviceId);

			setService(service.data.serviceFound);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchService();
	}, [userData]);

	return (
		<Card
			sx={{
				backgroundColor: colors.cardBackground,
				boxShadow: 'none',
				borderRadius: '0.5rem',
			}}
		>
			<CardHeader
				className='inter'
				sx={{ color: colors.text }}
				avatar={
					<Avatar
						sx={{
							backgroundColor: colors.categoryIcons.vaccines,
							width: '4rem',
							height: '4rem',
							fontSize: '2rem',
						}}
						aria-label='recipe'
						alt={isMedic ? patient.fullname : doctor.fullname}
						src={isMedic ? patient.avatar : doctor.avatar}
					>
						{isMedic
							? patient?.fullname?.charAt(0).toUpperCase()
							: doctor?.fullname?.charAt(0).toUpperCase()}
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<StarRounded sx={{ color: colors.starIcon }} />
					</IconButton>
				}
				title={isMedic ? patient?.fullname : doctor?.fullname}
				titleTypographyProps={{
					variant: 'h5',
					fontSize: { xs: titleFontSizeMobile.h5, md: titleFontSizeDesktop.h5 },
					fontWeight: 500,
					color: colors.text,
				}}
				subheader={`${service && service.description?.slice(0, 25)}...`}
				subheaderTypographyProps={{
					variant: 'body2',
					fontSize: { xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body },
					color: colors.text,
				}}
			/>

			<CardContent>
				<Stack direction={'column'} spacing={1} alignItems={'start'}>
					<Stack direction={'row'} spacing={1} alignItems={'center'}>
						<CalendarMonthRounded fontSize='small' sx={{ color: colors.buttonIcon }} />
						<Typography
							variant='body2'
							className='inter'
							color={colors.text}
							fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
						>
							{format(
								new Date(consultation.consultTimestamp).setMinutes(
									Math.ceil(new Date(consultation.consultTimestamp).getMinutes() / 5) * 5,
								),
								'dd MMMM, HH:mm aa',
							)}
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
							{isMedic ? patient?.email : doctor?.email}
						</Typography>
					</Stack>
					<Stack direction={'row'} spacing={1} alignItems={'center'}>
						<PlaceOutlined fontSize='small' sx={{ color: colors.buttonIcon }} />
						<Typography
							variant='body2'
							className='inter'
							color={colors.text}
							fontSize={{ xs: titleFontSizeMobile.body, md: titleFontSizeDesktop.body }}
						>
							{isMedic ? patient?.country : doctor?.country}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default AppointmentCard;

'use client';
import { ChatBubbleOutline, PlaceOutlined } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getDoctorComments } from '@/lib/getDoctorComments';

const DoctorCard = ({ doctor }) => {
	const { fullname, country, specialties, avatar, email } = doctor;
	const [comments, setComments] = useState([]);

	const fetchData = async () => {
		if (!doctor) return;

		const data = await getDoctorComments('medic', doctor?.id);
		if (!data || !data.data || data.data.comments === null) {
			setComments([]);
		} else {
			setComments(data.data.comments);
		}
	};

	useEffect(() => {
		if (doctor) {
			fetchData();
		}
	}, [doctor]);
	return (
		<Box
			component={'article'}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'space-between'}
			rowGap={2}
			padding={2}
			sx={{
				minHeight: '12rem',
				minWidth: '10rem',
				backgroundColor: colors.cardBackground,
				borderRadius: '0.5rem',
			}}
		>
			<Link href={`/profile/doctor/${email}`}>
				<Avatar
					variant='circular'
					sizes='large'
					sx={{ backgroundColor: colors.categoryIcons.vaccines, width: '4rem', height: '4rem' }}
					src={`https://mecharcovz-be.onrender.com/public/uploads/${
						doctor.profesionalid ? 'avatarmedic' : 'avatarpatient'
					}/${avatar}`}
				>
					{fullname.charAt(0).toUpperCase()}
				</Avatar>
			</Link>
			<Stack direction={'column'} spacing={0}>
				<Typography
					variant={'h6'}
					textAlign={'center'}
					className='inter'
					color={colors.text}
					fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
				>
					{fullname}
				</Typography>
				<Typography
					variant={'body1'}
					textAlign={'center'}
					className='inter'
					color={colors.text}
					fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
				>
					{specialties[specialties.length - 1]?.name ? specialties[0]?.name : 'General Practitioner'}
				</Typography>
			</Stack>
			<Box
				component={'div'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				width={'100%'}
			>
				<Stack direction={'row'} spacing={0.5} alignItems={'center'}>
					<ChatBubbleOutline sx={{ color: colors.locationIcon }} fontSize='medium' />
					<Typography variant='body2' className='inter' color={colors.text}>
						({comments?.length})
					</Typography>
				</Stack>
				<Stack direction={'row'} spacing={0.5} alignItems={'center'}>
					<PlaceOutlined sx={{ color: colors.locationIcon }} fontSize='medium' />
					<Typography variant='body2' className='inter' color={colors.text}>
						{country}
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default DoctorCard;

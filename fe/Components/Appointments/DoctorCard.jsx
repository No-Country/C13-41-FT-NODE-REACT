import { StarRounded, PlaceOutlined } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React from 'react';
import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
	const { fullname, country, specialties, avatar, email } = doctor;

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
					sx={{ backgroundColor: colors.categoryIcons.vaccines }}
					src={avatar}
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
					{specialties[0]?.name}
				</Typography>
			</Stack>
			<Box
				component={'div'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				width={'100%'}
			>
				<StarRounded sx={{ color: colors.starIcon }} />
				<Stack direction={'row'} spacing={0.5} alignItems={'center'}>
					<PlaceOutlined sx={{ color: colors.locationIcon }} />
					<Typography variant='body2' className='inter' color={colors.text}>
						{country}
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default DoctorCard;

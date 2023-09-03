import { StarRounded } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import React from 'react';

const NearbyDoctorCard = ({ doctor }) => {
	const { fullname, country, speciality } = doctor;
	return (
		<Box
			component={'article'}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'space-between'}
			padding={2}
			sx={{
				height: '10rem',
				width: '10rem',
				backgroundColor: colors.cardBackground,
				borderRadius: '0.5rem',
			}}
		>
			<Avatar variant='circular' sizes='large' sx={{ backgroundColor: colors.categoryIcons.vaccines }}>
				{fullname.charAt(0).toUpperCase()}
			</Avatar>
			<Typography
				variant={'h6'}
				textAlign={'center'}
				className='inter'
				color={colors.text}
				fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
			>
				Dr. {fullname}
			</Typography>
			<Typography
				variant={'body1'}
				textAlign={'center'}
				className='inter'
				color={colors.text}
				fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
			>
				{speciality}
			</Typography>
			<Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
				<StarRounded sx={{ color: colors.starIcon }} />
				<Typography variant='body2' className='inter' color={colors.text}>
					{country}
				</Typography>
			</Box>
		</Box>
	);
};

export default NearbyDoctorCard;

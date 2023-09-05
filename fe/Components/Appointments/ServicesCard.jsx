'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';

const ServicesCard = ({ serviceLabel, serviceColor, serviceIcon }) => {
	return (
		<Box
			component={'article'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'space-between'}
			padding={2}
			sx={{
				height: '10rem',
				width: '10rem',
				backgroundColor: colors.cardBackground,
				borderRadius: '0.5rem',
				transition: 'all 0.3s',
				':hover': {
					borderBottomRightRadius: '2rem',
				},
			}}
		>
			<Box
				component={'div'}
				padding={4}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ width: '1rem', height: '1rem', borderRadius: '100%' }}
				backgroundColor={serviceColor}
			>
				{serviceIcon}
			</Box>
			<Typography
				variant={'h4'}
				textAlign={'center'}
				className='inter'
				color={colors.text}
				fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
			>
				{serviceLabel.charAt(0).toUpperCase() + serviceLabel.slice(1)}
			</Typography>
		</Box>
	);
};

export default ServicesCard;

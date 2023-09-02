'use client';
import { titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';

const ServicesCard = ({ serviceLabel, serviceIconColor }) => {
	return (
		<Box
			component={'article'}
			display={'flex'}
			alignItems={'end'}
			justifyContent={'center'}
			padding={2}
			sx={{
				height: '10rem',
				width: '10rem',
				backgroundColor: serviceIconColor,
				borderRadius: '0.5rem',
			}}
		>
			<Typography
				variant={'h4'}
				fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
			>
				{serviceLabel}
			</Typography>
		</Box>
	);
};

export default ServicesCard;

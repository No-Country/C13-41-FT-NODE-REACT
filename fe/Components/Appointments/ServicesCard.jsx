'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ serviceLabel, serviceButton, serviceImage }) => {
	return (
		<Box
			component={'article'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'space-between'}
			alignItems={'start'}
			padding={2}
			sx={{
				minHeight: '10rem',
				width: { xs: '100%', sm: '20rem' },
				borderRadius: '0.5rem',
				position: 'relative',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 1,
					width: '100%',
					height: '100%',
					borderRadius: '0.5rem',
					background: `linear-gradient(to right, ${colors.cardBackground} 30%, transparent)`,
				}}
			></Box>
			<Typography
				variant={'h4'}
				className='inter'
				color={colors.text}
				fontWeight={600}
				sx={{
					zIndex: 1,
					paddingY: 2,
				}}
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				{serviceLabel.charAt(0).toUpperCase() + serviceLabel.slice(1)}
			</Typography>
			<Button
				href='/'
				variant='contained'
				className='inter'
				sx={{
					color: 'whitesmoke',
					backgroundColor: colors.buttonIcon,
					fontSize: { xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body },
					fontWeight: '500',
					textTransform: 'none',
					display: 'flex',
					':hover': {
						backgroundColor: colors.buttonIcon,
					},
					zIndex: 1,
				}}
			>
				{serviceButton}
			</Button>
			<Image
				src={serviceImage}
				alt={serviceLabel}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					top: 0,
					left: 0,
					borderRadius: '0.5rem',
				}}
			/>
		</Box>
	);
};

export default ServicesCard;

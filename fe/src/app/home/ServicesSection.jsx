import { Box, Typography } from '@mui/material';
import React from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import ServicesCard from '../../../Components/Appointments/ServicesCard';
import doctorImage from '@/assets/images/doctorFont.png';
import pildorsImage from '@/assets/images/pildors.png';
import tabletImage from '@/assets/images/OIP.png';
import machineImage from '@/assets/images/zoomMachine.png';
import vaccineImage from '@/assets/images/vaccines.png';
const ServicesSection = () => {
	const servicesLabels = ['doctors', 'medications', 'EHR', 'labs', 'vaccines'];
	const servicesButtons = [
		'Find by specialty',
		'Get prescription and order',
		'Access to your records',
		'Access to your results',
		'Get vaccunated',
	];
	const servicesImages = [doctorImage, pildorsImage, tabletImage, machineImage, vaccineImage];

	return (
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
				{servicesLabels.map((label, index) => (
					<ServicesCard
						key={index}
						serviceLabel={label}
						serviceButton={servicesButtons[index]}
						serviceImage={servicesImages[index]}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ServicesSection;

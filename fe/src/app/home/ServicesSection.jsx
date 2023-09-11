import { Box, Typography } from '@mui/material';
import React from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ServicesCard from '../../../Components/Appointments/ServicesCard';

const ServicesSection = () => {
	const servicesLabels = ['labs', 'vaccines', 'doctors', 'medications', 'EHR'];
	const { labs, vaccines, doctors, medication, ehr } = colors.categoryIcons;
	const servicesColor = [labs, vaccines, doctors, medication, ehr];
	const servicesIcon = [
		<BiotechOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
		<VaccinesOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
		<MasksOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
		<MedicationOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
		<FolderOpenOutlinedIcon fontSize='large' sx={{ color: colors.text }} />,
	];

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
				{servicesLabels ? (
					servicesLabels.map((service, idx) => {
						return (
							<ServicesCard
								key={idx}
								serviceLabel={service}
								serviceColor={servicesColor[idx]}
								serviceIcon={servicesIcon[idx]}
							/>
						);
					})
				) : (
					<></>
				)}
			</Box>
		</Box>
	);
};

export default ServicesSection;

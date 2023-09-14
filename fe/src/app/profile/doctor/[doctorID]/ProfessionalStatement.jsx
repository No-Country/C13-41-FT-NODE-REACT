import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const ProfessionalStatement = ({ doctorData }) => {
	return (
		<Stack direction={'column'} spacing={1} justifyContent={'start'}>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Professional statement
			</Typography>
			<Typography
				variant={'body2'}
				color={colors.text}
				fontWeight={400}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
			>
				{doctorData?.resume ? doctorData.resume : 'Resume not provided yet.'}
			</Typography>
		</Stack>
	);
};

export default ProfessionalStatement;

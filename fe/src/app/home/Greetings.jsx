import { Box, Typography } from '@mui/material';
import React from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';

const Greetings = ({ userData }) => {
	return (
		<Box component={'section'}>
			<Typography
				variant='h1'
				color={colors.text}
				className='inter'
				fontWeight={700}
				sx={{ lineHeight: 1.5 }}
				fontSize={{ xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 }}
			>
				Good morning, <br />{' '}
				<Typography
					component='span'
					className='inter'
					fontSize={{ xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 }}
					fontWeight={400}
				>
					{userData && userData.fullname}!
				</Typography>
			</Typography>
		</Box>
	);
};

export default Greetings;

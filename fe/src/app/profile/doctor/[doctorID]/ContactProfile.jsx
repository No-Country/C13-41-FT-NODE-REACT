import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { EmailOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const ContactProfile = ({ doctorData }) => {
	return (
		<Stack direction={'column'} spacing={1} justifyContent={'start'}>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Contact
			</Typography>
			<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
				<EmailOutlined sx={{ color: colors.buttonIcon }} />
				<Typography
					variant={'body2'}
					color={colors.text}
					fontWeight={400}
					className='inter'
					fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
				>
					{doctorData && doctorData.email}
				</Typography>
			</Stack>
			{doctorData && doctorData.phone && (
				<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
					<PhoneAndroidOutlined sx={{ color: colors.buttonIcon }} />
					<Typography
						variant={'body2'}
						color={colors.text}
						fontWeight={400}
						className='inter'
						fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
					>
						{doctorData.phone}
					</Typography>
				</Stack>
			)}
		</Stack>
	);
};

export default ContactProfile;

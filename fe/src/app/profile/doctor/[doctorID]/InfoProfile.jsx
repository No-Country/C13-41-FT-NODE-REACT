import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Payment } from '@mui/icons-material';
import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';

const InfoProfile = () => {
	return (
		<Stack direction={'column'} spacing={1} justifyContent={'start'}>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Info
			</Typography>
			<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
				<Card
					sx={{
						width: '10rem',
						height: '7.5rem',
						backgroundColor: colors.cardBackground,
						borderRadius: '0.5rem',
						boxShadow: 'none',
						padding: '1rem',
					}}
				>
					<Stack direction={'row'} spacing={1} alignItems={'center'}>
						<Box
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							sx={{
								backgroundColor: colors.categoryIcons.doctors,
								borderRadius: '100%',
								width: '2.5rem',
								height: '2.5rem',
							}}
						>
							<Payment
								sx={{
									color: colors.text,
								}}
								fontSize='medium'
							/>
						</Box>
						<Typography
							variant={'h6'}
							color={colors.text}
							fontWeight={500}
							className='inter'
							fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
						>
							Price
						</Typography>
					</Stack>
				</Card>
			</Stack>
		</Stack>
	);
};

export default InfoProfile;

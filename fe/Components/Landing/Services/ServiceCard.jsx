import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CardContainer = styled('article')({
	width: '17.5rem',
	minHeight: '17.5rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	rowGap: '0.5rem',
	backgroundColor: colors.cardBackground,
	padding: '1rem',
	borderRadius: '0.5rem',
});

const CardIcon = styled('img')({
	height: '3rem',
	width: '3rem',
	userSelect: 'none',
	backgroundColor: colors.doctorExperience,
	borderRadius: '100%',
	padding: '0.5rem',
});

function ServiceCard(props) {
	return (
		<CardContainer>
			<Stack direction='column' spacing={2}>
				<Box
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
					sx={{
						width: '3rem',
						height: '3rem',
						borderRadius: '100%',
						padding: '0.5rem',
						backgroundColor: colors.doctorExperience,
					}}
				>
					{props.img}
				</Box>
				<Typography
					className='inter'
					variant='h3'
					color={colors.text}
					fontSize={{ xs: titleFontSizeMobile.h3, sm: titleFontSizeDesktop.h3 }}
					fontFamily='500'
				>
					{props.title}
				</Typography>
			</Stack>
			<Typography
				className='inter'
				variant='body2'
				color={colors.text}
				fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
			>
				{props.description}
			</Typography>
			<Link className='inter' style={{ color: colors.text, fontWeight: '600' }} href={props.link}>
				Get Started
			</Link>
		</CardContainer>
	);
}

export default ServiceCard;

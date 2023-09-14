import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardContainer = styled('div')({
	position: 'relative',
	height: '17.5rem',
	width: '30rem',
	flexShrink: '0',
	borderRadius: '1.5rem',
	backgroundSize: 'cover',

	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '1.5rem',
		background: 'linear-gradient( 90deg, #C1CBCF 43%, rgba(193, 203, 207, 0) 79.50%)',
		zIndex: 1, // Aplicar zIndex al fondo
	},
});

const Title = styled('h1')({
	position: 'relative',
	left: 30,
	fontSize: '3.375rem',
	color: colors.text,
	fontWeight: '500',
	fontStyle: 'normal',
	lineHeight: '150%',
	top: -270,
	zIndex: 1,
});

const Text = styled('p')({
	fontSize: '14px',
	color: colors.text,
	textAlign: 'center',
});

function ServiceCard(props) {
	const imageStyle = {
		borderRadius: '1.5rem',
		position: 'relative',
		flexShrink: 0,
	};

	return (
		<CardContainer>
			<Image src={props.imgg} alt='doctorFont' style={imageStyle} />
			<Title>{props.title}</Title>
			<Text>{props.description}</Text>
			<Button
				href={props.button}
				variant='contained'
				sx={{
					width: '19.065rem',
					height: '3.25rem',
					backgroundColor: colors.backgroundButtonServices,
					fontSize: '0.95rem',
					color: colors.colorTextButtonService,
					fontWeight: '500',
					display: 'flex',
					flexShrink: 0,
					zIndex: 2,
					transform: 'translate(10%, -370%)',
				}}
			>
				{props.buttonTitle} <ArrowForwardIosIcon />
			</Button>
		</CardContainer>
	);
}

export default ServiceCard;

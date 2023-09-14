import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import Link from 'next/link';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const CardContainer = styled('div')({
	position: 'relative',

	flexShrink: '0',
	height: '41.125rem',
	width: '25.8125rem',
	borderRadius: '1.5rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',

	backgroundSize: 'cover',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '1.5rem',
		background: 'linear-gradient( 360deg, #C1CBCF 33%, rgba(193, 203, 207, 0) 80.50%)',
		zIndex: 1, // Aplicar zIndex al fondo
	},
});

const CardIcon = styled('img')({
	height: '64px',
	width: '64px',
	userSelect: 'none',
});

const Name = styled('h1')({
	display: 'flex',
	position: 'relative',
	zIndex: 2,
	top: -60,
	left: 25,
	width: '16.75rem',
	height: '2.5rem',
	fontFamily: 'Inter',
	fontSize: '1.75rem',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '2.625rem',
	letterSpacing: '-0.01925rem',
	color: `${colors.text}`,
});

const Title = styled('h1')({
	width: '15.5625rem',
	height: '2.5rem',
	flexDirection: 'column',
	flexShrink: 0,
	display: 'flex',
	position: 'relative',
	zIndex: 2,
	fontSize: '1.375rem',
	fontStyle: 'normal',
	color: `${colors.text}`,
	fontWeight: '400',
	lineHeight: '2.0625rem',
	fontFamily: 'Inter',
	top: -50,
	left: 25,
	letterSpacing: '-0.01513rem',
});

const Text = styled('p')({
	position: 'relative',
	zIndex: 2,
	width: '22.5rem',
	height: '5.5625rem',
	fontSize: '1.125rem',
	fontStyle: 'normal',
	fontWeight: '400',
	top: -40,
	left: 25,
	lineHeight: '1.6875rem',
	letterSpacing: '-0.01238rem',
	color: `${colors.text}`,
	textAlign: 'left',
});

const NameContainer = styled('div')({
	display: 'flex',
	gap: '20px',
});

function SpecialistsCard(props) {
	const imageStyle = {
		borderRadius: '1.5rem',
		position: 'relative',
		zIndex: 0,
		width: '25.8125rem',
		height: '27.6875rem',
		flexShrink: 0,
	};
	return (
		<CardContainer className='inter'>
			<Image src={props.imgg} alt='doctor' style={imageStyle} />
			<NameContainer>
				<Name>{props.name}</Name>
			</NameContainer>
			<Title className='inter'>{props.speciality}</Title>
			<Text className='inter'>{props.description}</Text>
			<Button
				href={props.button}
				variant='contained'
				className='inter'
				sx={{
					width: '19.065rem',
					padding: '1rem',
					backgroundColor: colors.backgroundButtonServices,
					fontSize: { xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 },
					color: colors.colorTextButtonService,
					fontWeight: '500',
					display: 'flex',
					flexShrink: 0,
					zIndex: 2,
					transform: 'translate(8%, -30%)',
					textTransform: 'none',
				}}
			>
				{props.buttonTitle} <ArrowForwardIosIcon />
			</Button>
		</CardContainer>
	);
}

export default SpecialistsCard;

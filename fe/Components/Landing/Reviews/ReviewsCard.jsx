import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import StarRating from './StarRating';
import Image from 'next/image';

const CardContainer = styled('div')({
	height: '16rem',
	width: '25rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	background: 'var(--Desktop---Cards, #C1CBCF)',
	borderRadius: '0.5rem',
	flexShrink: '0',
	padding: '1.5rem 1rem',
});

const Author = styled('h1')({
	position: 'relative',
	left: 10,
	marginTop: 10,
	fontSize: '1.375rem',
	color: `${colors.text}`,
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '2.9625rem',
	letterSpacing: '-0.01513rem',
});

const Text = styled('p')({
	fontSize: '1rem',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '1.5rem',
	letterSpacing: '-0.011rem',
	color: `${colors.text}`,
	textAlign: 'left',
});

const PersonContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '10px',
	/* justifyContent: 'center', */
});

function ReviewCard(props) {
	const imageStyle = {
		borderRadius: '5rem',
		position: 'relative',
		left: 10,
		width: '5rem',
		height: '4.82144rem',
		flexShrink: 0,
	};

	return (
		<CardContainer>
			<PersonContainer className='inter'>
				<Image src={props.imgg} alt='doctorLanding' style={imageStyle}></Image>

				<Author>{props.author}</Author>
			</PersonContainer>
			<StarRating />
			<Text className='inter'>{props.description}</Text>
		</CardContainer>
	);
}

export default ReviewCard;

import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import StarRating from './StarRating';
import Image from 'next/image';

const CardContainer = styled('div')({
	height: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	background: 'var(--Desktop---Cards, #C1CBCF)',
	borderRadius: '0.5rem',
	flexShrink: '0',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '16px 32px 20px 32px',
});

const Author = styled('h1')({
	position: 'relative',
	fontSize: '1.375rem',
	color: `${colors.text}`,
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '2.9625rem',
	letterSpacing: '-0.01513rem',
	paddingLeft: '8px',
});

const Text = styled('p')({
	fontSize: '1rem',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '1.5rem',
	color: `${colors.text}`,
	textAlign: 'center',
	paddingBottom: '8px',
	padding: '0px 16px 0px 16px',
});

const PersonContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'row',
	gap: '4px',
	alignItems: 'center',
	paddingBottom: '8px',
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

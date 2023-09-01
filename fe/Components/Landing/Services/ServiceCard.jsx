import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import Link from 'next/link';

const CardContainer = styled('div')({
	height: '300px',
	width: '300px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	backgroundColor: 'whitesmoke',
	borderRadius: '5px',
});

const CardIcon = styled('img')({
	height: '50px',
	width: '50px',
	userSelect: 'none',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
});

const Text = styled('p')({
	fontSize: '14px',
	color: `${colors.text}`,
	textAlign: 'left',
});

function ServiceCard(props) {
	return (
		<CardContainer>
			<CardIcon draggable='false' src={props.img} />
			<Title>{props.title}</Title>
			<Text>{props.description}</Text>
			<Link style={{ fontSize: '14px', color: colors.text }} href={props.link}>
				Get Started
			</Link>
		</CardContainer>
	);
}

export default ServiceCard;

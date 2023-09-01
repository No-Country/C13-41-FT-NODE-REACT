import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';

const CardContainer = styled('div')({
	height: '300px',
	width: '330px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	backgroundColor: 'whitesmoke',
	borderRadius: '5px',
	alignItems: 'center',
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
	textAlign: 'center',
});

const PersonContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '10px',
	justifyContent: 'center',
});

function ReviewCard(props) {
	return (
		<CardContainer>
			<PersonContainer>
				<CardIcon draggable='false' src={props.img} />
				<Title>{props.title}</Title>
			</PersonContainer>
			<Text>{props.description}</Text>
		</CardContainer>
	);
}

export default ReviewCard;

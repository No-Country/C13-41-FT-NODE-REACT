import React from 'react';
import styled from '@emotion/styled';
<<<<<<< HEAD
import { ColorsKlinik } from '@/app/colors';

const CardContainer = styled ("div") ({

    height: "250px",
    width: "330px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    alignItems: "center",
=======
import { colors } from '@/app/colors';
>>>>>>> dev

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

<<<<<<< HEAD
const Author = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",

=======
const CardIcon = styled('img')({
	height: '50px',
	width: '50px',
	userSelect: 'none',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
>>>>>>> dev
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

<<<<<<< HEAD


function ReviewCard (props) {

  return (
    
    <CardContainer>
        <PersonContainer>
            <Author>{props.author}</Author>
        </PersonContainer>
        <Text>{props.description}</Text>
    </CardContainer>

  )
=======
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
>>>>>>> dev
}

export default ReviewCard;

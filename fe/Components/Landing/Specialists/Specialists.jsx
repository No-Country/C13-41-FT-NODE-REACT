import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import SpecialistsCard from './SpecialistsCard';

const SpecialistsContainer = styled('section')({
	display: 'flex',
	justifyContent: 'start',
	marginTop: '100px',
	flexDirection: 'column',
});

const CardsContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '30px',
	justifyContent: 'center',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
	textAlign: 'center',
	marginBottom: '30px',
});

function Specialists() {
	return (
		<SpecialistsContainer>
			<Title>Meet our Specialists</Title>
			<CardsContainer>
				<SpecialistsCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					name='Dr. Full name'
					speciality='Speciality'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>

				<SpecialistsCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					name='Dr. Full name'
					speciality='Speciality'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>

				<SpecialistsCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					name='Dr. Full name'
					speciality='Speciality'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
			</CardsContainer>
		</SpecialistsContainer>
	);
}

export default Specialists;

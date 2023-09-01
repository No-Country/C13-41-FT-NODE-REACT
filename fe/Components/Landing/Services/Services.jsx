import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import ServiceCard from './ServiceCard';

const ServicesContainer = styled('section')({
	display: 'flex',
	justifyContent: 'start',
	marginTop: '100px',
	flexDirection: 'column',
});

const CardsContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '10px',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
	textAlign: 'center',
	marginBottom: '30px',
});

function Services() {
	return (
		<ServicesContainer>
			<Title>Services</Title>
			<CardsContainer>
				<ServiceCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					title='Cardiology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					title='Dentistry'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					title='Neurology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					title='Ophthalmology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?'
					title='Dermatology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
			</CardsContainer>
		</ServicesContainer>
	);
}

export default Services;

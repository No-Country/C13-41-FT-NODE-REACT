import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import ServiceCard from './ServiceCard';
import { Typography } from '@mui/material';

const ServicesContainer = styled('section')({
	display: 'flex',
	flexDirection: 'column',
	rowGap: '2rem',
	paddingTop: '6rem',
	justifyContent: 'center',
});

const CardsContainer = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gap: '1rem',
	alignItems: 'center',
	justifyContent: 'center',
});

const Title = styled('h1')({
	fontSize: { xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 },
	color: `${colors.text}`,
	fontWeight: '500',
	textAlign: 'center',
});

function Services() {
	return (
		<ServicesContainer>
			<Typography
				className='inter'
				variant='h2'
				fontSize={{ xs: titleFontSizeMobile.h2, sm: titleFontSizeDesktop.h2 }}
				fontWeight={'600'}
				color={colors.text}
				textAlign={'center'}
			>
				Services
			</Typography>
			<CardsContainer>
				<ServiceCard
					link='https://www.google.com'
					description='Take care of your heart with us. Our cardiologists provide comprehensive assessments and treatments for heart issues, working with you to maintain a healthy heart.
					'
					title='Cardiology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Achieve a healthy smile with our top-quality dental services. Our highly skilled team of dentists is ready to address all your oral needs.
					'
					title='Dentistry'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Safeguard your nervous system. Our neurology specialists treat various neurological conditions, providing expert diagnosis and support.
					'
					title='Neurology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Protect your vision with our ophthalmology services. Our expert ophthalmologists offer exams, diagnosis, and advanced treatments to keep your eyes in optimal condition.
					'
					title='Ophthalmology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Radiate with healthy skin through our dermatology services. Our dermatologists offer skin assessments, treatments, and cosmetic procedures for a vibrant look.
					'
					title='Dermatology'
					img='https://cdn-icons-png.flaticon.com/512/3736/3736150.png'
				/>
			</CardsContainer>
		</ServicesContainer>
	);
}

export default Services;

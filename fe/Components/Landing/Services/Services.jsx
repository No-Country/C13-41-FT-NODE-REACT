import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import ServiceCard from './ServiceCard';
import { Typography } from '@mui/material';
import {
	cardiologyIcon,
	dermatologyIcon,
	neurologyIcon,
	opthalmologyIcon,
	dentistryIcon,
} from './ServicesIcon';

const ServicesContainer = styled('section')({
	display: 'flex',
	flexDirection: 'column',
	rowGap: '2rem',
	paddingTop: '6rem',
	justifyContent: 'center',
});

<<<<<<< HEAD
const CardsContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "30px",

=======
const CardsContainer = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gap: '1rem',
	alignItems: 'center',
	justifyContent: 'center',
>>>>>>> dev
});

const Title = styled('h1')({
	fontSize: { xs: titleFontSizeMobile.h1, sm: titleFontSizeDesktop.h1 },
	color: `${colors.text}`,
	fontWeight: '500',
	textAlign: 'center',
});

<<<<<<< HEAD
function Services () {

  return (

    <ServicesContainer>
        <Title>Services</Title>
        <CardsContainer>
            <ServiceCard link="https://www.google.com" description="Cardiology is the medical specialty dedicated to the study, diagnosis, and treatment of conditions related to the heart and the circulatory system. Cardiologists are healthcare professionals who specialize in this field and are experts in managing a wide range of heart-related issues." title="Cardiology" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
            <ServiceCard link="https://www.google.com" description="Odontology is a branch of healthcare focused on the prevention, diagnosis, and treatment of oral health issues. Dentists are healthcare professionals who specialize in this field, and they play a crucial role in helping individuals maintain good oral hygiene and overall dental health. Dentistry encompasses a wide range of services and procedures" title="Odontology" img="https://img.icons8.com/cotton/64/tooth--v1.png" />
            <ServiceCard link="https://www.google.com" description="Neurology is a medical specialty that focuses on the diagnosis and treatment of disorders related to the nervous system, which includes the brain, spinal cord, nerves, and muscles. Neurologists are medical professionals who specialize in this field, and they play a crucial role in assessing, diagnosing, and managing a wide range of neurological conditions." title="Neurology" img="https://img.icons8.com/ios/100/brain--v1.png" />
            <ServiceCard link="https://www.google.com" description="Ophthalmology is the branch of medicine that deals with the diagnosis, treatment, and management of conditions related to the eyes and the visual system. Ophthalmologists are medical doctors who specialize in this field and are experts in addressing a wide range of eye and vision-related issues. " title="Ophthalmology" img="https://img.icons8.com/external-line-icons-royyan-wijaya/64/external-eyes-whatsername-medical-line-line-icons-royyan-wijaya.png" />
            <ServiceCard link="https://www.google.com" description="Dermatology is a medical specialty focused on the diagnosis, treatment, and management of disorders and conditions related to the skin, hair, nails, and mucous membranes. Dermatologists are healthcare professionals who specialize in this field and play a crucial role in helping patients maintain healthy skin and address a wide range of dermatological issues." title="Dermatology" img="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-dermathology-medical-kiranshastry-lineal-kiranshastry.png" />
        </CardsContainer>

    </ServicesContainer>

  )

=======
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
					img={cardiologyIcon()}
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Achieve a healthy smile with our top-quality dental services. Our highly skilled team of dentists is ready to address all your oral needs.
					'
					title='Dentistry'
					img={dentistryIcon()}
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Safeguard your nervous system. Our neurology specialists treat various neurological conditions, providing expert diagnosis and support.
					'
					title='Neurology'
					img={neurologyIcon()}
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Protect your vision with our ophthalmology services. Our expert ophthalmologists offer exams, diagnosis, and advanced treatments to keep your eyes in optimal condition.
					'
					title='Ophthalmology'
					img={opthalmologyIcon()}
				/>
				<ServiceCard
					link='https://www.google.com'
					description='Radiate with healthy skin through our dermatology services. Our dermatologists offer skin assessments, treatments, and cosmetic procedures for a vibrant look.
					'
					title='Dermatology'
					img={dermatologyIcon()}
				/>
			</CardsContainer>
		</ServicesContainer>
	);
>>>>>>> dev
}

export default Services;

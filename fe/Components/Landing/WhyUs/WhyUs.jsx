import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import doctoresJuntos from '@/assets/images/cincoDoctores.jpg';
import Image from 'next/image';
import { Stack } from '@mui/material';

const WhyUsContainer = styled('section')({
	display: 'flex',
	justifyContent: 'center',
	marginTop: '5.31rem',
	flexDirection: 'column',
	userSelect: 'none',
});

const InsiderContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2rem',
	'@media (max-width: 768px)': {
		flexDirection: 'column',
	},
});

const TextContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	marginTop: '2rem',
	flexDirection: 'column',
	gap: '2rem',
});

const ImageContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: '2rem',
	flexDirection: 'column',
	padding: '10px',
});

const Title = styled('h1')({
	fontSize: '2.875rem',
	color: `${colors.textWHYUS}`,
	fontWeight: '500',
	textAlign: 'center',
	fontStyle: 'normal',
	letterSpacing: '-0.03163rem',
	lineHeight: '4.3125rem',
});

const MotiveTitle = styled('h1')({
	fontSize: '1.75rem',
	color: `${colors.textWHYUS}`,
	fontWeight: '500',
	fontStyle: 'normal',
	textAlign: 'left',
});

const MotiveText = styled('p')({
	fontSize: '1.125rem',
	color: `${colors.text}`,
	fontStyle: 'normal',
	fontWeight: '400',
	textAlign: 'left',
});

function WhyUs() {
	return (
		<WhyUsContainer>
			<Title>Why you should choose us</Title>
			<InsiderContainer>
				<ImageContainer>
					<Image
						draggable='false'
						src={doctoresJuntos}
						alt='doctor'
						style={{ borderRadius: '0.5rem' }}
					/>
				</ImageContainer>
				<TextContainer>
					<MotiveTitle>Continuity of care</MotiveTitle>
					<MotiveText>
						{' '}
						Allows you to see the healthcare provider for follow-up appointments and ongoing management of
						chronic conditions.
					</MotiveText>
					<MotiveTitle>Access to specialists</MotiveTitle>
					<MotiveText>
						You will have access to a network of specialists and professionals, ensuring that you can
						receive specialized care even if you live far away.
					</MotiveText>
					<MotiveTitle>Prescriptions refills</MotiveTitle>
					<MotiveText>You can easily request prescription refills and we will delivered it. </MotiveText>
				</TextContainer>
			</InsiderContainer>
		</WhyUsContainer>
	);
}

export default WhyUs;

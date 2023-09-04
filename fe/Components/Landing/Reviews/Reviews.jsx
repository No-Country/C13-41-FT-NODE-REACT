import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import ReviewCard from './ReviewsCard';

const ReviewsContainer = styled('section')({
	display: 'flex',
	marginTop: '100px',
	flexDirection: 'column',
});

const CardsContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '70px',
	justifyContent: 'center',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
	textAlign: 'center',
	marginBottom: '30px',
});

function Reviews () {

  return (

    <ReviewsContainer>
        <Title>Our Services in the eyes of our patients</Title>
        <CardsContainer>
            <ReviewCard description="I cannot express how relieved I am to have discovered Klinika the online doctor appointment service. As a busy working mom, finding time for healthcare appointments has always been a challenge. However, thanks to HealthEase, that's a problem of the past." author="Sarah Thompson" img="https://img.icons8.com/external-others-pike-picture/100/external-Patient-organ-others-pike-picture-2.png" />
            <ReviewCard description="Klinika is a game-changer in the world of online doctor appointment services! I recently had a virtual appointment with Dr. Hibbert, and I must say, it exceeded my expectations. The platform is user-friendly and intuitive, making it easy to schedule an appointment at my convenience." author="John Martinez" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
            <ReviewCard description="Absolutely phenomenal online doctor appointment service! From the moment I signed up to when I finished my consultation, everything was seamless. The platform is user-friendly and I was matched with a doctor who was not only knowledgeable but also genuinely cared about my concerns." author="Isabella Martinez" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
        </CardsContainer>


    </ReviewsContainer>

  )

}

export default Reviews;

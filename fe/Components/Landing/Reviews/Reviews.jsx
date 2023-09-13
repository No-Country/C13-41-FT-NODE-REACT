import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import ReviewCard from './ReviewsCard';
import cliente1 from '@/assets/images/cliente1.jpg';
import cliente2 from '@/assets/images/cliente2.jpg';
import cliente3 from '@/assets/images/cliente3.jpg';
import cliente4 from '@/assets/images/cliente4.jpg';
import cliente5 from '@/assets/images/cliente5.jpg';

const ReviewsContainer = styled('section')({
	display: 'flex',
	marginTop: '100px',
	flexDirection: 'column',
	
});

const CardsContainer = styled('div')({
	display: 'flex',
	border: '3px solid blue',
	overflow: 'hidden',
	width: '91.5625rem',
	height: '19.56.25rem',
	flexShrink: '0',
	gap: '1.25rem',
	/* justifyContent: 'center', */
	alignItems : 'center',   
	
});

const Title = styled('h1')({
	
	textAlign: 'center',
	fontSize: '2.875rem',
	fontStyle: 'normal',
	color: `${colors.text}`,
	fontWeight: '500',
	lineHeight: '4.3125rem',
	marginBottom: '40px',
	flexShrink: '0',
});

const NavigationButtonRight = styled("button")`
  position: absolute;
  z-index: 3; 
  /* transform: translateY(-50%); */
  /* background: rgba(0, 0, 0, 0.5); */
  fill: var(--Background, #F0ECE4);
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const NavigationButtonLeft = styled("button")`
  position: absolute;
  z-index: 3; 
  right: 2rem;
  /* background: rgba(0, 0, 0, 0.5); */
  fill: var(--Background, #F0ECE4);
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;


function Reviews () {
	const cardContainerRef = useRef(null);

	const scrollRight = () => {
		if (cardContainerRef.current) {
		  cardContainerRef.current.scrollLeft -= 300; // Ajusta el valor de desplazamiento según sea necesario
		}
	  };
	
	  const scrollLeft = () => {
		if (cardContainerRef.current) {
		  cardContainerRef.current.scrollLeft += 300; // Ajusta el valor de desplazamiento según sea necesario
		}
	  };
  return (

    <ReviewsContainer>

        <Title>Our services in the eyes of our patients</Title>
        <CardsContainer>
		<NavigationButtonRight onClick={scrollRight}>&lt;</NavigationButtonRight>
			<ReviewCard description="“This clinic has been a game-changer for my family. We've used their services for routine check-ups and urgent health concerns.”" author="Aspen Hart" imgg = {cliente1} />
            
			<ReviewCard description="“I can't express how grateful I am for this clinic. The doctors are not only experts in their fields but also compassionate and understanding.”" author="Theo Berkshire"  imgg={cliente2} />
            
			<ReviewCard description="“I had a fantastic experience with this clinic! The virtual consultation was seamless, and the doctor was incredibly knowledgeable.”" author="Isabella Martinez" imgg={cliente3} />

			<ReviewCard description="“Exceptional service from start to finish! The doctor I consulted with was attentive and provided me with personalized advice.”" author="Amy Scarrow" imgg={cliente4} />

			<ReviewCard description="“I can't thank this clinic enough for their outstanding service. The doctors are not only knowledgeable but also genuinely caring.”" author="Jesper Riddle" imgg={cliente5} />

        </CardsContainer>


    </ReviewsContainer>

  )

}

export default Reviews;

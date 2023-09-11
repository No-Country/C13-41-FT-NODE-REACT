import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import ServiceCard from './ServiceCard';
import { Typography } from '@mui/material';
import doctorFont from '@/assets/images/doctorFont.png';
import pildors from '@/assets/images/pildors.png';
import oip from '@/assets/images/OIP.png';
import zoomMachine from '@/assets/images/zoomMachine.png';
import vaccines from '@/assets/images/vaccines.png';

const ServicesContainer = styled('section')({
	display: 'flex',
	flexDirection: 'column',
	rowGap: '2rem',
	paddingTop: '6rem',
	justifyContent: 'center',

});

const CardsContainer = styled ("div") ({
    display: 'flex',
    flexShrink: "0",
    /* overflowX: 'hidden', */ // Permitir desplazamiento horizontal
    width: '100%',
    overflow: 'hidden',
    gap: "1.25rem",
    alignItems : 'center',
    
});

const Title = styled('h1')({
	fontSize: `${titleFontSizeDesktop.h1}`,
	color: `${colors.	textSERVICES}`,
	fontWeight: '500',
	textAlign: 'center',
  display: 'flex',
  fontFamily: 'Inter',
  fontStyle: 'normal',
/*   width: '1440px', */
  height: '60px',
  flexDirection: 'column',
  justifyContent: 'center',
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

const CircleContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Circle = styled("div")`
  width: 15px;
  height: 15px;
  background-color: ${props => props.active ? "#94BECB" : "#C1CBCF"};
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`;

function Services () {
  const cardContainerRef = useRef(null);
  const [activeCircle, setActiveCircle] = useState(0);
  
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

  const scrollToPosition = (position) => {
    if (cardContainerRef.current) {
      const containerWidth = cardContainerRef.current.clientWidth;
      const totalWidth = cardContainerRef.current.scrollWidth;
      const newPosition = (position / 3) * (totalWidth - containerWidth);
      cardContainerRef.current.scrollLeft = newPosition;
      setActiveCircle(position);
    }
  }; 

  return (
    <ServicesContainer>
        <Title>Services</Title>
        <CardsContainer ref={cardContainerRef}>
          
        <NavigationButtonLeft onClick={scrollLeft}>&gt;</NavigationButtonLeft>
 
            <ServiceCard button="https://www.facebook.com" link="https://www.google.com"  title="Doctors" imgg={doctorFont} buttonTitle="Find by specially" ></ServiceCard>
            <ServiceCard link="https://www.google.com" title="Medications" imgg={pildors} buttonTitle="Get prescription & order" />
            <ServiceCard link="https://www.google.com" title="EHR Files" imgg={oip} buttonTitle="Access to your records" />
            <ServiceCard button="https://www.facebook.com" link="https://www.google.com" title="Labs" imgg={zoomMachine} buttonTitle="Access to your results"/>
            <ServiceCard button="https://www.facebook.com" link="https://www.google.com" title="Vaccines" imgg={vaccines} buttonTitle="Get vaccinated"/>
         {/*    <ServiceCard link="https://www.google.com" description="" title="Dermatology" img="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-dermathology-medical-kiranshastry-lineal-kiranshastry.png" /> */}

            <NavigationButtonRight onClick={scrollRight}>&lt;</NavigationButtonRight>
        </CardsContainer>
        <CircleContainer>
          <Circle onClick={() => scrollToPosition(0)} active={activeCircle === 0} />
          <Circle onClick={() => scrollToPosition(1)} active={activeCircle === 1} />
          <Circle onClick={() => scrollToPosition(2)} active={activeCircle === 2} />
          <Circle onClick={() => scrollToPosition(3)} active={activeCircle === 3} />
        </CircleContainer>
    </ServicesContainer>

  )

}

export default Services;

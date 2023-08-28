"use client";
import styled from '@emotion/styled'
import { Container } from '@mui/material';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Specialists from './Specialists/Specialists';
import WhyUs from './WhyUs/WhyUs';
import Reviews from './Reviews/Reviews';
import MobileApp from './MobileApp/MobileApp';

const LandingContainer = styled ("main") ({

  display: "flex",
  alignItems: "center",
  height: "100%",

});

function Landing () {

  return (

    <LandingContainer draggable="false">
        <Container maxWidth="xl">

            <Hero />
            <Services />
            <Specialists />
            <WhyUs />
            <Reviews />
            <MobileApp />

        </Container>
    </LandingContainer>

  )

}

export default Landing
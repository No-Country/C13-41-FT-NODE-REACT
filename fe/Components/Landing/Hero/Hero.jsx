import React from 'react'
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ColorsKlinik } from '@/app/colors';

const HeroContainer = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",

});

const LeftContainer = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

});

const RightContainer = styled ("div") ({

    display: "flex",
    flexDirection: "column",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    userSelect: "none",

});

const Text = styled ("p") ({

    fontSize: "16px",
    color: `${ColorsKlinik.text}`,
    textAlign: "left",
    userSelect: "none",

});


const ImagenBanner = styled ("img") ({

    display: 'flex',
    height: "500px",
    width: "500px",

});


function Hero () {

  return (

    <HeroContainer>
        
        <LeftContainer>
            <Title>Welcome to Klinika</Title>
            <Text>We're thrilled to have you here, you've come to the right place.

            We're delighted to introduce a convenient and efficient way to manage your healthcare needs. Our user-friendly online platform is designed with your well-being in mind, making it easier than ever to schedule medical appointments at your fingertips.

            Your health is our priority, and our scheduling platform is designed to make your healthcare experience as smooth as possible. Whether you're due for a routine check-up, seeking specialized care, or simply need medical advice, we're here to assist you every step of the way.

            Thank you for choosing Klinika for your medical needs. Your journey to a better health begins here.

            Schedule your appointment today and embark on a path towards a healthier, happier you.

            Best regards,
            The Klinika Team.</Text>
            <Button href='https://github.com' variant="contained" sx={{height: "60px", width: "305px", backgroundColor: ColorsKlinik.background, marginTop: "30px", fontSize: "1.2rem", color: ColorsKlinik.text, fontWeight: "600", display: "flex"}}>
                Get an appointment
            </Button>
        </LeftContainer>

        <RightContainer>

            <ImagenBanner src='https://media.istockphoto.com/id/1189304032/es/foto/m%C3%A9dico-sosteniendo-tableta-digital-en-la-sala-de-reuniones.jpg?s=1024x1024&w=is&k=20&c=7bf_zCsHVWdJ7POvGwbd-zBIuSdZnNGnX4C7y9XYIQ8=' alt='Doctors banner'/>

        </RightContainer>

    </HeroContainer>

  )

}

export default Hero;
import React from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import doctorFont from '@/assets/images/doctorFont.png';
import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const CardContainer = styled ("div")({
    position: 'relative', // Establecer la posición como relativa
    /* background: 'linear-gradient( 90deg, #C1CBCF 43%, rgba(193, 203, 207, 0) 99.50%)', */
    height: "17.5rem",
    width: "32.625rem",
    flexShrink: '0',
   
    borderRadius: "1.5rem",
    backgroundSize: 'cover', // Ajustar el tamaño de la imagen para cubrir todo el contenedor
    "&::before": {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: "1.5rem",
      background: 'linear-gradient( 90deg, #C1CBCF 43%, rgba(193, 203, 207, 0) 99.50%)',
      zIndex: 1, // Aplicar zIndex al fondo
    },
});

const CardIcon = styled('img')({
	height: '3rem',
	width: '3rem',
	userSelect: 'none',
	backgroundColor: colors.doctorExperience,
	borderRadius: '100%',
	padding: '0.5rem',
  position: 'static',
});

const Title = styled ("h1") ({
    position: 'relative',
    left: 30,
    fontSize: "3.375rem",
    color: colors.text,
    fontWeight: "500",
    fontStyle: 'normal', 
    lineHeight: "150%",
    top: -270,
    zIndex: 1,
});

const Text = styled ("p") ({

    fontSize: "14px",
    color: colors.text,
    textAlign: "left",

});



/* const EstiloImagen = styled ("div")((props) => ({
  width: "32.625rem",
  height: "17.5rem",
  flexShrink: 0,
  borderRadius: "0.5rem",
  background: `url(${props.imgg}), lightgray 50% / cover no-repeat`,
})); */



function ServiceCard (props) {

  const imageStyle = {
    borderRadius: '1.5rem',
    position: 'relative',
    zIndex: 0,
    width: '32.3rem',
    height: '17.5rem',
    flexShrink: 0,
    
  }
  return (

    <CardContainer>
        {/* <CardIcon draggable="false" src={props.img}></CardIcon> */}
        <Image src={props.imgg} alt='doctorFont' style={imageStyle} 
        /> 
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
        <Button
					href={props.button}
					variant='contained'
					sx={{
						width: '19.065rem', 
						height: '3.25rem',
						backgroundColor: colors.backgroundButtonServices,
						fontSize: '0.95rem',
						color: colors.colorTextButtonService,
						fontWeight: '500',
						display: 'flex',
            flexShrink: 0,
            zIndex: 2,
						transform: 'translate(10%, -370%)',
					}}
				>
					{props.buttonTitle} <ArrowForwardIosIcon/>
				</Button>
       {/*  <Link style={{fontSize: "14px", color: colors.text}} href={props.link}>Get Started</Link> */}
    </CardContainer>

  )
}

export default ServiceCard;

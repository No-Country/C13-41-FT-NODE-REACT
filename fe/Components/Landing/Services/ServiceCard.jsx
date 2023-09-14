import React from 'react';
import styled from '@emotion/styled';
import { colors, } from '@/app/colors';
import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardContainer = styled ("div")({

  height: "18rem",
  width: "33rem",
  backgroundSize: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: "none",

});

const Title = styled ("h1") ({
  
  position: 'relative',
  fontSize: "3.375rem",
  color: colors.text,
  fontWeight: "500",
  fontStyle: 'normal', 
  lineHeight: "150%",
  top: -270,
  zIndex: 1,

});

function ServiceCard (props) {

  return (

    <CardContainer style={{backgroundImage: props.imgg}}>

        <Image src={props.imgg} alt='doctorFont' style={{borderRadius: "0.5rem",}}/> 
        <Title>{props.title}</Title>
        <Title>{props.description}</Title>
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
						transform: 'translate(10%, -370%)',
					}}
				>
					{props.buttonTitle} <ArrowForwardIosIcon/>
				</Button>

    </CardContainer>

  )
}

export default ServiceCard;
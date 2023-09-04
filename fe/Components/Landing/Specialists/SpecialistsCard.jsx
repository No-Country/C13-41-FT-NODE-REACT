import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import Link from 'next/link';

const CardContainer = styled ("div") ({

    height: "300px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "whitesmoke",
    borderRadius: "5px",

});

const CardIcon = styled ("img") ({

    height: "64px",
    width: "64px",
    userSelect: "none",

});

const Name = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "600",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",

});

const Text = styled ("p") ({

    fontSize: "14px",
    color: `${ColorsKlinik.text}`,
    textAlign: "left",

});

const NameContainer = styled ("div") ({

    display: "flex",
    gap: "20px",

});



function SpecialistsCard (props) {

  return (
    
    <CardContainer>
        <NameContainer>
            <CardIcon draggable="false" src={props.img}/>
            <Name>{props.name}</Name>
        </NameContainer>
        <Title>{props.speciality}</Title>
        <Text>{props.description}</Text>
        <Link style={{fontSize: "14px", color: ColorsKlinik.text}} href={props.link}>Get an Appointment</Link>
    </CardContainer>

  )
}

export default SpecialistsCard;
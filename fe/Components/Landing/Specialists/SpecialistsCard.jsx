import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import Link from 'next/link';

const CardContainer = styled ("div") ({

    height: "414px",
    width: "395px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "whitesmoke",
    borderRadius: "5px",


});

const CardIcon = styled ("img") ({

    height: "414x",
    width: "165px",
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



function SpecialistsCard (props) {

  return (
    
    <CardContainer>
        <CardIcon draggable="false" src={props.img}/>
        <Name>{props.name}</Name>
        <Title>{props.speciality}</Title>
        <Text>{props.description}</Text>
        <Link style={{fontSize: "14px", color: ColorsKlinik.text}} href={props.link}>Get an Appointment</Link>
    </CardContainer>

  )
}

export default SpecialistsCard;
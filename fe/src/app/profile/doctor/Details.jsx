import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import EditIcon from '@mui/icons-material/Edit';

const DetailsContainer = styled ("div") ({

    display: "flex",

  
});

const InsideContainer = styled ("div") ({

    display: "flex",
    marginTop: "30px",
    flexDirection: "column",

  
});

const InputContainer = styled ("div") ({

    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",

  
});

const DetailSpan = styled ("span") ({

    fontSize: "30px",
    fontWeight: "bold",
    color: ColorsKlinik.text,
  
});

  

function Details (props) {


  return (

    <DetailsContainer>

        <InsideContainer>
            <DetailSpan>Account</DetailSpan>

            <InputContainer>
                <DetailSpan>Full Name:</DetailSpan>
                <DetailSpan id='fullname'>{props.fullname}<EditIcon onClick={console.log("hola")} /></DetailSpan>
            </InputContainer>

        </InsideContainer>

    </DetailsContainer>

  )

}

export default Details
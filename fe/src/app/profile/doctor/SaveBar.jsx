import styled from '@emotion/styled';
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { ColorsKlinik } from '@/app/colors';

const UserSaveContainer = styled ("div") ({

  display: "flex",
  backgroundColor: "whitesmoke",
  borderRadius: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70px",

});

const PersonContainer = styled ("div") ({

  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "10px",

});

const PersonSpan = styled ("span") ({

  fontSize: "30px",
  fontWeight: "bold",
  color: ColorsKlinik.text,

});

function SaveBar (props) {

  return (

    <UserSaveContainer>

      <PersonContainer>
          <PersonIcon sx={{color: ColorsKlinik.text, fontSize: "30px"}}/>
          <PersonSpan>User: {props.username}</PersonSpan>
      </PersonContainer>

      <Button color='warning' sx={{backgroundColor: ColorsKlinik.background, color: ColorsKlinik.text, fontWeight: "bold", fontSize: "30px"}} variant="contained">Save Changes</Button>

    </UserSaveContainer>

  )


}

export default SaveBar
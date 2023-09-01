"use client";
import styled from '@emotion/styled'
import { Container } from '@mui/material';
import SaveBar from './SaveBar';
import Details from './Details';

const ProfileContainer = styled ("section") ({

  display: "flex",
  alignItems: "center",
  height: "100%",
  marginTop: "30px",

});


function DoctorProfile (props) {

  return (

    <ProfileContainer draggable="false">
        
        <Container maxWidth="xl">

            <SaveBar username="The Medic"/>
            <Details />


        </Container>
    </ProfileContainer>

  )

}

export default DoctorProfile;
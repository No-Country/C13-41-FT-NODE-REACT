"use client";
import styled from '@emotion/styled'
import { Container } from '@mui/material';
import SaveBar from './SaveBar';
import Details from './Details';
import { useAuth } from '@/contexts/Auth.context';

const ProfileContainer = styled ("section") ({

  display: "flex",
  alignItems: "center",
  height: "100%",
  marginTop: "30px",
  paddingBottom: "30px",

});

function DoctorProfile (props) {

  const { userData } = useAuth()

  console.log (userData)

  return (

    <ProfileContainer draggable="false">
        
        <Container maxWidth="xl">

          {
            
            userData && (
              <>
                <SaveBar username={userData.fullname}/>
                <Details birthdate={userData.birthdate} nid={userData.nid} phone={userData.phone} profesionalid={userData.profesionalid} avatar={userData.avatar} country={userData.country} email={userData.email} gender={userData.gender} resume={userData.resume} />
              </>
            )

          }


        </Container>
    </ProfileContainer>

  )

}

export default DoctorProfile;
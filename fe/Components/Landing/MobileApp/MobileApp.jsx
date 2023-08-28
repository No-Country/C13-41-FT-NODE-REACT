import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';

const MobileAppContainer = styled ("section") ({

    display: "flex",
    marginTop: "100px",
    flexDirection: "column",

});

const ParentContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "70px",
    justifyContent: "center",

});

const ChildContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "70px",
    justifyContent: "center",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",

});


const AppImage = styled ("img") ({

    width: "600px",
    height: "300px",
    userSelect: "none",
  
});

function MobileApp () {

  return (

    <MobileAppContainer>
        <Title>Download our Mobile App</Title>

        <ParentContainer>
            <ChildContainer>
                <AppImage draggable="false" src="https://www.pngkit.com/png/full/435-4350684_available-on-google-play-png-app-store-play.png" />
            </ChildContainer>
        </ParentContainer>

    </MobileAppContainer>

  )

}

export default MobileApp
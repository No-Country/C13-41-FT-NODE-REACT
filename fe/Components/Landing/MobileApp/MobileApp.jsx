import React from "react";
import styled from "@emotion/styled";
import { colors } from "@/app/colors";
import phone2 from "@/assets/images/phone2.png";
import phone1 from "@/assets/images/phone.png";
import App_Store from '@/assets/images/App_Store.png';
import Google_Play from '@/assets/images/Google_Play.png';
import qr from '@/assets/images/qr.png';

import Image from "next/image";

const MobileAppContainer = styled("section")({
  display: "flex",
  justifyContent: 'center',

  '@media (min-width: 768px)': {

    marginTop: "100px",

	},

  '@media (max-width: 500px)': {

    marginTop: "200px",

	},

  marginBottom: "100px",
  flexDirection: 'column',

});

const ParentContainer = styled("div")({

  display: "flex",
  justifyContent: 'start',
  flexDirection: "row",
  alignItems: 'center',

});

const ChildContainer = styled("div")({

  display: "flex",
  flexDirection: "row",
  gap: "70px",
  justifyContent: "center",

  '@media (max-width: 768px)': {

		display: "none",

	}

});

const Child2Container = styled("div")({

  display: "flex",
  flexDirection: "row",
  gap: "70px",
  justifyContent: "center",

  '@media (max-width: 768px)': {

		display: "none",

	}

});


const TextContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "-8rem", 
    flexDirection: "column",
    gap: "35px",

});


const Title = styled("h1")({
	fontSize: '2.875rem',
	color: `${colors.textWHYUS}`,
	fontWeight: '500',
    lineHeight: '2.625rem',
    fontStyle: 'normal',    
	textAlign: 'center',

});


const Text = styled ("p") ({
	fontSize: '1.375rem',
	color: `${colors.text}`,
	fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
	
});

function MobileApp() {

  const image1Style = {
    borderRadius: "1.5rem",
	
  };
  const image2Style = {
    borderRadius: "1.5rem",

  };
  const imagenQrGpAs = {
    borderRadius: "1.5rem",
    gap:"none",
  };
  return (
    <MobileAppContainer>
      
      <ParentContainer>
	  <TextContainer>
	  <Title>Download our App</Title>
	  <Text>Experience the future of healthcare at your fingertips! Scan the code now to unlock a world of convenience and care with our clinic app.</Text>
	  <Image src={qr} alt="qr" style={imagenQrGpAs} />
	  <Image src={Google_Play} alt="googlePlay"  style={imagenQrGpAs }/>
	  <Image src={App_Store} alt="App_Store"  style={imagenQrGpAs}/>
	  </TextContainer>

        <Child2Container>
          <Image src={phone2} alt="doctorFont" style={image2Style} />
        </Child2Container>

        <ChildContainer>
          <Image src={phone1} alt="doctorFont" style={image1Style} />
        </ChildContainer>

      </ParentContainer>
    </MobileAppContainer>
  );
}

export default MobileApp;

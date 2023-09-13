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
  position: 'relative',
  justifyContent: 'initial',
  marginTop: "100px",
  width: "90rem",
  height: "53.6875rem",
  left: 15,
  flexDirection: 'column',
});

const ParentContainer = styled("div")({

  display: "flex",
  justifyContent: 'start',
  flexDirection: "row",
  alignItems: 'center',
});

const ChildContainer = styled("div")({
  position: "relative",
  left: 80,
  display: "flex",
  flexDirection: "row",
  gap: "70px",
  justifyContent: "center",
});
const Child2Container = styled("div")({
  position: "relative",
  left: 60,
  display: "flex",
  flexDirection: "row",
  gap: "70px",
  justifyContent: "center",
});


const TextContainer = styled ("div") ({

    position: 'relative',
    display: "flex",
    justifyContent: "start",
    marginTop: "-8rem", 
    flexDirection: "column",
    gap: "35px",
    width: '39.375rem',
    height: '21.475rem',
});


const Title = styled("h1")({
	fontSize: '2.875rem',
	color: `${colors.textWHYUS}`,
	fontWeight: '500',
    lineHeight: '2.625rem',
    fontStyle: 'normal',    
	textAlign: 'center',
    letterSpacing: '-0.01925rem',
});


const Text = styled ("p") ({
	fontSize: '1.375rem',
	color: `${colors.text}`,
	fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.6875rem',
    letterSpacing: '-0.01238rem',
    textAlign: 'left',
	

});

function MobileApp() {
  const image1Style = {
    borderRadius: "1.5rem",
    position: "relative",
    zIndex: 0,
    width: "20.08275rem",
    height: "40.625rem",
    flexShrink: 0,

	
  };
  const image2Style = {
    borderRadius: "1.5rem",
    position: "relative",
    zIndex: 0,
    width: "20.08275rem",
    height: "40.625rem",
    flexShrink: 0,
  };
  const imagenQrGpAs = {
    borderRadius: "1.5rem",
    gap:"none",
  };
  return (
    <MobileAppContainer>
      
      <ParentContainer>
	  <TextContainer>
	  <Title>Download our Mobile App</Title>
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

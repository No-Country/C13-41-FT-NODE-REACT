import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { colors } from '@/app/colors';
import {
	Grid,
} from '@mui/material';
import doctor1 from '@/assets/image_1.png';
import Image from 'next/image';
const HeroContainer = styled('section')({
	display: 'flex',
	justifyContent: 'center',
	gap: '30px',
	marginTop: '30px',
});
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LeftContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	left: '10%',
	justifyContent: 'space-between',
});

const RightContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
});

const Title = styled('h1')({
	fontSize: '80px',
	textAlign: 'center',
	justifyContent: 'center',
	color: `${colors.text}`,
	fontWeight: '400',
	transform: 'translate(10%, 20%)',

});

const Text = styled('p')({
	fontSize: '14px',
	color: `${colors.text}`,
	textAlign: 'left',
});

const ImagenBanner = styled('div')({
	display: 'flex',
	backgroundColor: `${colors.cardBackground}`, //Provicional xD
	padding: '20px',
	borderRadius: '15%',
	width: '75%', 
	height: '75%',
	transform: 'translate(30%, 0%)',
});



function Hero() {
	return (
		<HeroContainer>
			<LeftContainer>
				
				<Title>Your healthy,<br/> Your way!</Title>
			
				<Button
					href='https://github.com'
					variant='contained'
					sx={{
						width: '300px', 
						height: '50px',
						backgroundColor: colors.locationIcon,
						fontSize: '1.2rem',
						color: 'white',
						fontWeight: '10',
						display: 'flex',
						transform: 'translate(0%, 0%)',
					}}
				>
					Get an appointment <ArrowForwardIosIcon/>
				</Button>
				<br/>
			</LeftContainer>

			<RightContainer>
				<ImagenBanner>
					<Image src={doctor1} alt='doctorLanding' width={500} height={500}>
						</Image> 
				</ImagenBanner>
				
			</RightContainer>
		</HeroContainer>
	);
}

export default Hero;

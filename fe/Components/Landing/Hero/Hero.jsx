import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { colors } from '@/app/colors';
import doctor1 from '@/assets/image_1.png';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HeroContainer = styled('section')({

	display: 'flex',
	justifyContent: "space-around",
	gap: '30px',
	marginTop: '30px',

	'@media (max-width: 768px)': {

		display: "flex",
		flexDirection: "column-reverse",

	},
	userSelect: "none",

});

const LeftContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	gap: "30px"

});

const RightContainer = styled('div')({

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'end',
	alignSelf: "center",

	'@media (max-width: 768px)': {

		display: "flex",
		alignItems: "center",

	}

});

const Title = styled('h1')({

	fontSize: '80px',
	textAlign: 'center',
	color: `${colors.text}`,
	fontWeight: '400',
	userSelect: "none",

	'@media (max-width: 768px)': {

		fontSize: '40px',

	}

});

const ImagenBanner = styled('div')({

	display: 'flex',
	backgroundColor: `${colors.cardBackground}`,
	padding: '20px',
	borderRadius: '0.5rem',
	width: '75%', 
	height: '75%',
	justifyItems: 'center',
	alignSelf: "center",
	userSelect: "none",

});

function Hero() {
	return (
		<HeroContainer>
			<LeftContainer>
				
				<Title>Your health,<br/> Your way!</Title>
			
				<Button
					href='/sign-in'
					variant='contained'
					draggable="false"
					sx={{
						width: '300px', 
						height: '50px',
						backgroundColor: colors.locationIcon,
						fontSize: '1.2rem',
						color: 'white',
						fontWeight: '10',
						display: 'flex',
						alignSelf: 'center',
						userSelect: "none",
					}}
				>
					Get an appointment <ArrowForwardIosIcon/>
				</Button>
				<br/>
			</LeftContainer>

			<RightContainer>
				<ImagenBanner>
					<Image draggable="false" src={doctor1} alt='A female doctor wearing a white coat' width={500} height={500} style={{display: "flex", }} />
				</ImagenBanner>
				
			</RightContainer>
		</HeroContainer>
	);
}

export default Hero;

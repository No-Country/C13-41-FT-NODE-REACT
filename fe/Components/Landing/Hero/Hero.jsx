import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Paper } from '@mui/material';
import { colors } from '@/app/colors';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import heroImage from '@/assets/images/doctorBannerImage.svg';
const HeroContainer = styled('section')({
	display: 'flex',
	justifyContent: 'space-between',
	minHeight: '100vh',
	'@media (max-width: 768px)': {
		flexDirection: 'column-reverse',
		alignItems: 'center',
	},
});

const LeftContainer = styled('div')({
	width: { xs: '100%', sm: '50%' },
	display: 'flex',
	flexDirection: 'column',
	alignItems: { xs: 'center', sm: 'flex-start' },
	margin: 'auto',
	gap: '2rem',
});

const Title = styled('h1')({
	fontSize: '80px',
	textAlign: 'left',
	color: `${colors.text}`,
	fontWeight: '300',

	'@media (max-width: 768px)': {
		textAlign: 'center',
		fontSize: '2.5rem',
		fontWeight: '300',
	},
});

function Hero() {
	return (
		<HeroContainer>
			<LeftContainer>
				<Title className='inter'>
					Your health,
					<br /> Your way!
				</Title>

				<Button
					href='/sign-in'
					variant='contained'
					className='inter'
					sx={{
						padding: '1rem 2rem',
						backgroundColor: colors.locationIcon,
						fontSize: '1.2rem',
						color: 'white',
						textTransform: 'none',
						width: 'fit-content',
						':hover': {
							backgroundColor: colors.locationIcon,
						},
					}}
					endIcon={<ArrowForwardIosIcon />}
				>
					Get an appointment
				</Button>
				<br />
			</LeftContainer>

			<Box
				sx={{
					width: { xs: '90%', sm: '50%' },
					height: { xs: '75vh', sm: 'auto' },
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: { xs: '100%', sm: '60%' },
						height: '60%',
						borderRadius: '3rem',
						border: '1px solid',
						borderColor: colors.cardBackground,
						padding: '0.5rem',
					}}
				>
					<Paper
						elevation={0}
						sx={{
							width: '100%',
							height: '100%',
							backgroundColor: colors.cardBackground,
							borderRadius: '3rem',
							position: 'relative',
						}}
					>
						<Image
							src={heroImage}
							alt='A female doctor wearing a white coat'
							style={{
								position: 'absolute',
								bottom: 0,
								left: 0,
								width: 'auto',
								height: '125%',
							}}
						/>
					</Paper>
				</Box>
			</Box>
		</HeroContainer>
	);
}

export default Hero;

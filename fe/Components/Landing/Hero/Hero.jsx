import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { colors } from '@/app/colors';

const HeroContainer = styled('section')({
	display: 'flex',
	justifyContent: 'center',
	gap: '30px',
	marginTop: '30px',
});

const LeftContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
});

const RightContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
});

const Title = styled('h1')({
	fontSize: '40px',
	color: `${colors.text}`,
	fontWeight: '400',
});

const Text = styled('p')({
	fontSize: '14px',
	color: `${colors.text}`,
	textAlign: 'left',
});

const ImagenBanner = styled('img')({
	display: 'flex',
	height: '500px',
	width: '500px',
});

function Hero() {
	return (
		<HeroContainer>
			<LeftContainer>
				<Title>Welcome to Klinika</Title>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, asperiores nam nesciunt nemo
					minus hic provident, incidunt dolor minima reprehenderit excepturi officia quo! Rem eaque, illo
					placeat pariatur explicabo dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cumque cupiditate, vero rem fuga hic perferendis esse vitae ratione possimus. Debitis assumenda
					odio provident libero saepe, repellendus suscipit quae quo est? Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Autem odit aut corporis quidem harum ex, tempora dolorem porro
					et nam beatae soluta sed quod esse obcaecati vel voluptates temporibus minus. Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Numquam delectus, vel ex inventore quisquam deleniti
					obcaecati aliquam rerum quas consequatur dignissimos dicta consectetur maiores deserunt,
					tempore eos quam magnam sunt.
				</Text>
				<Button
					href='https://github.com'
					variant='contained'
					sx={{
						height: '60px',
						width: '305px',
						backgroundColor: colors.background,
						marginTop: '30px',
						fontSize: '1.2rem',
						color: colors.text,
						fontWeight: '600',
						display: 'flex',
					}}
				>
					Get an appointment
				</Button>
			</LeftContainer>

			<RightContainer>
				<ImagenBanner
					src='https://media.istockphoto.com/id/1189304032/es/foto/m%C3%A9dico-sosteniendo-tableta-digital-en-la-sala-de-reuniones.jpg?s=1024x1024&w=is&k=20&c=7bf_zCsHVWdJ7POvGwbd-zBIuSdZnNGnX4C7y9XYIQ8='
					alt='Doctors banner'
				/>
			</RightContainer>
		</HeroContainer>
	);
}

export default Hero;

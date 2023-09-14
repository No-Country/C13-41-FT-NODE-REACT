'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
	return (
		<Box
			component='footer'
			sx={{ backgroundColor: colors.navbarBackground, paddingY: { xs: '2rem', md: '3rem' } }}
		>
			<Container
				maxWidth='xl'
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'column' },
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Stack direction='column' gap={2} sx={{ width: { xs: '100%', sm: '50%' } }}>
					<Typography
						className='inter'
						variant='h3'
						sx={{
							color: colors.text,
							textAlign: 'center',
							fontSize: { xs: titleFontSizeMobile.h3, sm: titleFontSizeDesktop.h3 },
							userSelect: "none",
						}}
					>
						Klinika
					</Typography>
					<Typography variant='body2' className='inter' sx={{ color: colors.text, textAlign: 'center', userSelect: "none", }}>
					Disclaimer: The content of this project does not constitute legal, professional, academic, or any other type of advice. Any reliance you place on the information provided is therefore strictly at your own risk. References to any specific products, services, organizations, or third-party websites are provided for informational purposes only and do not constitute endorsements or recommendations. This is an academic project and it may contain links to external websites or resources over which we have no control. We are not responsible for the content, availability, or accuracy of these external resources.
					</Typography>
				</Stack>

				<Stack
					direction='column'
					gap={2}
					alignItems='center'
					paddingY={2}
					sx={{ width: { xs: '100%', sm: '50%' } }}
				>
					<Stack direction='row' gap={2}>
						<LinkedInIcon sx={{ color: colors.text }} fontSize='medium' />
						<a href="https://github.com/No-Country/C13-41-FT-NODE-REACT" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ color: colors.text }} fontSize='medium' /></a>
						<InstagramIcon sx={{ color: colors.text }} fontSize='medium' />
						<FacebookIcon sx={{ color: colors.text }} fontSize='medium' />
						<YouTubeIcon sx={{ color: colors.text }} fontSize='medium' />
					</Stack>
					<Stack direction='row' gap={2}>
						<Link
							draggable="false"
							href={'/sign-in'}
							style={{
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
								textAlign: 'center',
								userSelect: "none",
							}}
						>
							Our Services
						</Link>
						<Link
							href={'/sign-in'}
							draggable="false"
							style={{
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
								textAlign: 'center',
								userSelect: "none",
							}}
						>
							Doctors
						</Link>
						<Link draggable="false" href={'/sign-in'} style={{ color: colors.text, textTransform: 'none', fontWeight: '600', userSelect: "none", }}>
							About
						</Link>
					</Stack>
					<Typography variant='body2' className='inter' sx={{ color: colors.text, userSelect: "none",  }}>
						©2023 Klinika - All rights reserved
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;

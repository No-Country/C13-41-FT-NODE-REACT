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
						}}
					>
						Klinika Mecharcovz
					</Typography>
					<Typography variant='body2' className='inter' sx={{ color: colors.text, textAlign: 'center' }}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, natus. Corporis rerum expedita
						eligendi sit enim aut sunt sequi error, quis nostrum, optio excepturi est distinctio magni
						tempore necessitatibus sint.
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
						<GitHubIcon sx={{ color: colors.text }} fontSize='medium' />
						<InstagramIcon sx={{ color: colors.text }} fontSize='medium' />
						<FacebookIcon sx={{ color: colors.text }} fontSize='medium' />
						<YouTubeIcon sx={{ color: colors.text }} fontSize='medium' />
					</Stack>
					<Stack direction='row' gap={2}>
						<Link
							href={'/'}
							style={{
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							Our Services
						</Link>
						<Link
							href={'/'}
							style={{
								color: colors.text,
								textTransform: 'none',
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							Doctors
						</Link>
						<Link href='/' style={{ color: colors.text, textTransform: 'none', fontWeight: '600' }}>
							About
						</Link>
					</Stack>
					<Typography variant='body2' className='inter' sx={{ color: colors.text }}>
						©2023 Klinika Mecharcovz - All rights reserved
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default Footer;

'use client';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

<<<<<<< HEAD
const FooterParentContainer = styled ("footer") ({

    display: "flex",
    padding: "1rem 0rem 1rem 0rem",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorsKlinik.background,
    borderTop: "2px solid", 
    borderBottom: "2px solid", 
    borderColor: ColorsKlinik.border,
    marginTop: "100px",
  
});

const TextContainer = styled ("div") ({

    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
    color: ColorsKlinik.text,
    textAlign: "center",
    maxWidth: "30%",
    userSelect: "none",
  
});

const CompanyName = styled ("h1") ({

    fontSize: "1.25rem",
    fontWeight: "600",
  
});

const CompanyDescription = styled ("p") ({

    fontSize: "14px",
    fontWeight: "400",
    textAlign: "start"
  
});

const LinksContainer = styled ("div") ({

    display: "flex",
    justifyContent: "center",
    gap: "70px",
    flexDirection: "row",
    color: ColorsKlinik.text,
    userSelect: "none",
  
});

const RightContainer = styled ("div") ({

    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    color: ColorsKlinik.text,
    userSelect: "none",
    gap: "20px",
  
});

const SocialsContainer = styled ("div") ({

    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexDirection: "row",
    color: ColorsKlinik.text,
    userSelect: "none",
  
});


function Footer () {

  return (

    <FooterParentContainer draggable="false">
        <Container maxWidth="xl" sx={{display: "flex", justifyContent: "space-between"}}>

        <TextContainer>
            <CompanyName>Klinika</CompanyName>
            <CompanyDescription>Disclaimer: The content of this project does not constitute legal, professional, academic, or any other type of advice. Any reliance you place on the information provided is therefore strictly at your own risk. 
            
            References to any specific products, services, organizations, or third-party websites are provided for informational purposes only and do not constitute endorsements or recommendations.

            This is an academic project and it may contain links to external websites or resources over which we have no control. We are not responsible for the content, availability, or accuracy of these external resources.
            </CompanyDescription>
        </TextContainer>

        <RightContainer>
            <LinksContainer>
                <Link draggable="false" href="/" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600", textAlign: "center"}}>Home</Link>
                <Link draggable="false" href="/" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600", textAlign: "center"}}>Our Services</Link>
                <Link draggable="false" href="/" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600", textAlign: "center"}}>Doctors</Link>
                <Link draggable="false" href="/" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600",}}>About</Link>
            </LinksContainer>

            <SocialsContainer>

                <Button draggable="false" variant="text" title="Github" href="https://github.com/No-Country/C13-41-FT-NODE-REACT" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="button" sx={{ fontSize: "3rem", color: ColorsKlinik.text }}/>
                </Button>

                <Button draggable="false" variant="text" title="Instagram" href="https://www.instagram.com/nocountry.tech/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="button" sx={{ fontSize: "3rem", color: ColorsKlinik.text }}/>
                </Button>

                <Button draggable="false" variant="text" title="Facebook" href="https://web.facebook.com/profile.php?id=100076869493549" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon className="button" sx={{ fontSize: "3rem", color: ColorsKlinik.text }}/>
                </Button>

                <Button draggable="false" variant="text" title="Youtube" href="https://www.youtube.com/@Nocountrytech" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon className="button" sx={{ fontSize: "3rem", color: ColorsKlinik.text }}/>
                </Button>

                <Button draggable="false" variant="text" title="LinkedIn" href="https://www.linkedin.com/company/nocountrytalent/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="button" sx={{ fontSize: "3rem", color: ColorsKlinik.text }}/>
                </Button>

            </SocialsContainer>
            
            <CompanyDescription style={{textAlign: "center", fontWeight: "bold",}}>©2023 Klinika - All rights Reserved</CompanyDescription>

        </RightContainer>

        </Container>
    </FooterParentContainer>

  )
=======
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
>>>>>>> dev

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
						<Link href={'/'} style={{ color: colors.text, textTransform: 'none', fontWeight: '600' }}>
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

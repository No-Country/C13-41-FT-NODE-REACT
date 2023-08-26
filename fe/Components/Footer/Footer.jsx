"use client";
import { ColorsKlinik } from '@/app/colors';
import styled from '@emotion/styled'
import { Container, } from '@mui/material';
import Link from 'next/link';
import {Button} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterParentContainer = styled ("footer") ({

    display: "flex",
    padding: "2rem 4rem 4rem 4rem",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: ColorsKlinik.background,
    borderTop: "2px solid", 
    borderBottom: "2px solid", 
    borderColor: ColorsKlinik.border,
    boxShadow: "1px solid gray",
  
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
            <CompanyName>Klinika Mecharcovz</CompanyName>
            <CompanyDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, natus. Corporis rerum expedita eligendi sit enim aut sunt sequi error, quis nostrum, optio excepturi est distinctio magni tempore necessitatibus sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, voluptatem deserunt. Repellendus soluta reiciendis rerum qui consectetur atque esse amet, ad non! Assumenda quis expedita eius? Voluptatem eius velit alias.
            </CompanyDescription>
        </TextContainer>

        <RightContainer>
            <LinksContainer>
                <Link draggable="false" href="/" textAlign="center" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600"}}>Home</Link>
                <Link draggable="false" href="/" textAlign="center" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600"}}>Our Services</Link>
                <Link draggable="false" href="/" textAlign="center" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600"}}>Doctors</Link>
                <Link draggable="false" href="/" textAlign="center" style={{fontSize: "1.2rem", color: ColorsKlinik.text, textTransform: "none", fontWeight: "600"}}>About</Link>
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
            
            <CompanyDescription style={{textAlign: "center", fontWeight: "bold",}}>©2023 Klinika Mecharcovz - All rights reserved</CompanyDescription>

        </RightContainer>

        </Container>
    </FooterParentContainer>

  )

}

export default Footer
import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';

const WhyUsContainer = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    flexDirection: "column",

});

const InsiderContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    alignItems: "center",

});

const TextContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "30px",
    flexDirection: "column",

});

const ImageContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "30px",
    flexDirection: "column",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",

});

const MotiveTitle = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "600",
    textAlign: "left",

});

const MotiveText = styled ("p") ({

    fontSize: "14px",
    color: `${ColorsKlinik.text}`,
    textAlign: "left",

});

const DoctorsImage = styled ("img") ({

    width: "792px",
    height: "376px",

});

function WhyUs () {

  return (

    <WhyUsContainer>
        <Title>Why you choose us</Title>
        <InsiderContainer>

            <TextContainer>
                <MotiveTitle>Motive one</MotiveTitle>
                <MotiveText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate doloribus quod ex natus nulla iure harum. Ab ipsam accusamus doloremque possimus voluptas non a. Iure rem enim ut modi?</MotiveText>
                <MotiveTitle>Motive two</MotiveTitle>
                <MotiveText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate doloribus quod ex natus nulla iure harum. Ab ipsam accusamus doloremque possimus voluptas non a. Iure rem enim ut modi?</MotiveText>
                <MotiveTitle>Motive three</MotiveTitle>
                <MotiveText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate doloribus quod ex natus nulla iure harum. Ab ipsam accusamus doloremque possimus voluptas non a. Iure rem enim ut modi?</MotiveText>
                <MotiveTitle>Motive four</MotiveTitle>
                <MotiveText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate doloribus quod ex natus nulla iure harum. Ab ipsam accusamus doloremque possimus voluptas non a. Iure rem enim ut modi?</MotiveText>

            </TextContainer>

            <ImageContainer>
                <DoctorsImage src="https://media.istockphoto.com/id/1189304032/es/foto/m%C3%A9dico-sosteniendo-tableta-digital-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=pmijXzja8qGwKXlqt7YWzSUkxFxnODfK6u7B1QXd1wU="/>
            </ImageContainer>
        </InsiderContainer>
    </WhyUsContainer>
  )

}

export default WhyUs
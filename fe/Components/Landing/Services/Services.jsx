import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import ServiceCard from './ServiceCard';

const ServicesContainer = styled ("section") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "100px",
    flexDirection: "column",

});

const CardsContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "30px",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",

});

function Services () {

  return (

    <ServicesContainer>
        <Title>Services</Title>
        <CardsContainer>
            <ServiceCard link="https://www.google.com" description="Cardiology is the medical specialty dedicated to the study, diagnosis, and treatment of conditions related to the heart and the circulatory system. Cardiologists are healthcare professionals who specialize in this field and are experts in managing a wide range of heart-related issues." title="Cardiology" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
            <ServiceCard link="https://www.google.com" description="Odontology is a branch of healthcare focused on the prevention, diagnosis, and treatment of oral health issues. Dentists are healthcare professionals who specialize in this field, and they play a crucial role in helping individuals maintain good oral hygiene and overall dental health. Dentistry encompasses a wide range of services and procedures" title="Odontology" img="https://img.icons8.com/cotton/64/tooth--v1.png" />
            <ServiceCard link="https://www.google.com" description="Neurology is a medical specialty that focuses on the diagnosis and treatment of disorders related to the nervous system, which includes the brain, spinal cord, nerves, and muscles. Neurologists are medical professionals who specialize in this field, and they play a crucial role in assessing, diagnosing, and managing a wide range of neurological conditions." title="Neurology" img="https://img.icons8.com/ios/100/brain--v1.png" />
            <ServiceCard link="https://www.google.com" description="Ophthalmology is the branch of medicine that deals with the diagnosis, treatment, and management of conditions related to the eyes and the visual system. Ophthalmologists are medical doctors who specialize in this field and are experts in addressing a wide range of eye and vision-related issues. " title="Ophthalmology" img="https://img.icons8.com/external-line-icons-royyan-wijaya/64/external-eyes-whatsername-medical-line-line-icons-royyan-wijaya.png" />
            <ServiceCard link="https://www.google.com" description="Dermatology is a medical specialty focused on the diagnosis, treatment, and management of disorders and conditions related to the skin, hair, nails, and mucous membranes. Dermatologists are healthcare professionals who specialize in this field and play a crucial role in helping patients maintain healthy skin and address a wide range of dermatological issues." title="Dermatology" img="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-dermathology-medical-kiranshastry-lineal-kiranshastry.png" />
        </CardsContainer>

    </ServicesContainer>

  )

}

export default Services
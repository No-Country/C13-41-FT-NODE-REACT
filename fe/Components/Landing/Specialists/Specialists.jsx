import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import SpecialistsCard from './SpecialistsCard';

const SpecialistsContainer = styled ("section") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "100px",
    flexDirection: "column",

});

const CardsContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "30px",
    justifyContent: "center",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",

});



function Specialists () {

  return (

    <SpecialistsContainer>
        <Title>Meet our Specialists</Title>
        <CardsContainer>
            <SpecialistsCard link="https://www.google.com" description="Dr. Nick Rivera is a renowned cardiologist whose passion for the heart extends beyond his medical expertise. With a warm and caring demeanor, he's not just a healer of hearts but a friend to his patients. Dr. Rivera is known for his unwavering dedication to his profession and his commitment to providing the best care possible." name="Dr. Nick Rivera" speciality="Cardiologist" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />

            <SpecialistsCard link="https://www.google.com" description="
            Dr. Julius Hibbert is a distinguished neurologist whose brilliance and charisma set him apart in the world of medicine. With his signature bow tie and an infectious laugh, he brings a unique blend of professionalism and approachability to his practice. Dr. Hibbert is not only a leading expert in neurology but also a source of inspiration and comfort to his patients." name="Dr. Julius Hibbert" speciality="Neurologist" img="https://img.icons8.com/ios/100/brain--v1.png" />

            <SpecialistsCard link="https://www.google.com" description="Dr. Robert Terwilliger is a renowned surgeon whose exceptional skills and unwavering dedication to his craft have earned him a place among the elite in the field of surgery. With a demeanor that exudes confidence and a touch of humility, he is known not only for his precise surgical techniques but also for his commitment to his patients." name="Dr. Robert Terwill" speciality="General Surgeon" img="https://img.icons8.com/external-febrian-hidayat-detailed-outline-febrian-hidayat/64/external-11-disaster-febrian-hidayat-detailed-outline-febrian-hidayat.png" />

        </CardsContainer>


    </SpecialistsContainer>

  )

}

export default Specialists
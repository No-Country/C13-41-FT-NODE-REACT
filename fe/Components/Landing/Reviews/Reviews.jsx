import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';
import ReviewCard from './ReviewsCard';

const ReviewsContainer = styled ("section") ({

    display: "flex",
    marginTop: "100px",
    flexDirection: "column",

});

const CardsContainer = styled ("div") ({

    display: "flex",
    flexDirection: "row",
    gap: "70px",
    justifyContent: "center",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",

});

function Reviews () {

  return (

    <ReviewsContainer>
        <Title>Our Services in the eyes of our patients</Title>
        <CardsContainer>
            <ReviewCard description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?" title="Batman" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
            <ReviewCard description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?" title="Fulanito de tal" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
            <ReviewCard description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero laudantium, quam magni odit dolor quasi quidem hic, distinctio natus consequuntur alias, quibusdam quisquam! Numquam, adipisci. Quisquam consequuntur laudantium blanditiis sapiente?" title="Aquiles Baeza" img="https://cdn-icons-png.flaticon.com/512/3736/3736150.png" />
        </CardsContainer>


    </ReviewsContainer>

  )

}

export default Reviews
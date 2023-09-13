import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import SpecialistsCard from './SpecialistsCard';
import doctor2 from '@/assets/images/doctor2.png';
import doctor3 from '@/assets/images/doctor3.png';
import doctor1 from '@/assets/images/doctor1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const SpecialistsContainer = styled('section')({
	display: 'flex',
	justifyContent: 'start',
	marginTop: '100px',
	flexDirection: 'column',
	gap: "2rem",

});

const CardsContainer = styled('div')({
	display: 'flex',
	flexShrink: "0",
	width: '100%',
	height: '41.125rem',
	
	justifyContent: 'center',
	alignItems : 'center',
	gap: "1.44rem",
	/* 
    overflow: 'hidden',
	flexDirection: 'row',
    border: '3px solid red',
     */
});

const Title = styled('h1')({
	fontSize: '2.875rem',
	fontFamily : 'Inter',
	fontStyle : 'normal',
	color: `${colors.textMeetSpecialist}`,
	fontWeight: '500',
	textAlign: 'center',
	lineHeight : '4.3125rem',
	letterSpacing: '-0.03163rem',
});

function Specialists () {

  return (

    <SpecialistsContainer>
        <Title>Meet our Specialists</Title>
        <CardsContainer>

		<Swiper autoplay={{delay:100}} slidesPerView={3} spaceBetween={100} pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper" breakpoints={{320:{slidesPerView: 1, spaceBetween: 10}, 640:{slidesPerView: 3, spaceBetween: 1}}} color={colors.background} allowSlideNext allowSlidePrev>

          <SwiperSlide style={{backgroundColor: colors.background}}>
		  	<SpecialistsCard link="https://www.google.com"  description="Dr. Campbell areas of expertise include chest pain, palpitations, breathlessness, cardiovascular imaging, general cardiology." name="Dr. James Campbell" speciality="Cardiologist" buttonTitle="Get an appointment" imgg={doctor2} />
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
		  	<SpecialistsCard link="https://www.google.com" description="
            Dr Avery is a chartered counselling psychologist She deals with areas of abuse, loneliness, trauma, social dynamics" name="Dr. Primrose Avery" speciality="Psychologist" buttonTitle="Get an appointment" imgg= {doctor1}/>
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
		  	<SpecialistsCard link="https://www.google.com" description="Dr Knox specialises in the treatment of skin cancer, skin surgery, psoriasis, eczema, acne, and skin rashes." name="Dr. Amber Knox" speciality="Dermatologist" buttonTitle="Get an appointment" imgg= {doctor3} />
          </SwiperSlide>

        </Swiper>








        </CardsContainer>


    </SpecialistsContainer>

  )

}

export default Specialists;

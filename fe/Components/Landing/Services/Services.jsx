import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { colors, titleFontSizeDesktop, } from '@/app/colors';
import ServiceCard from './ServiceCard';
import doctorFont from '@/assets/images/doctorFont.png';
import pildors from '@/assets/images/pildors.png';
import oip from '@/assets/images/OIP.png';
import zoomMachine from '@/assets/images/zoomMachine.png';
import vaccines from '@/assets/images/vaccines.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const ServicesContainer = styled('section')({
	display: 'flex',
	flexDirection: 'column',
	gap: '2rem',
	paddingTop: '6rem',
	justifyContent: 'center',
  
});

const Title = styled('h1')({
	fontSize: `${titleFontSizeDesktop.h1}`,
	color: `${colors.	textSERVICES}`,
	fontWeight: '500',
	textAlign: 'center',
  display: 'flex',
  fontFamily: 'Inter',
  fontStyle: 'normal',
/*   width: '1440px', */
  height: '80px',
  flexDirection: 'column',
  justifyContent: 'center',
  flexShrink: '0',
});


function Services () {

  return (
    <ServicesContainer>
        <Title>Services</Title>

        <Swiper autoplay={{delay:100}} slidesPerView={3} spaceBetween={100} pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper" breakpoints={{320:{slidesPerView: 1, spaceBetween: 10}, 640:{slidesPerView: 3, spaceBetween: 100}}} color={colors.background} allowSlideNext allowSlidePrev >

          <SwiperSlide style={{backgroundColor: colors.background}}>
            <ServiceCard button="/sign-in" title="Doctors" imgg={doctorFont} buttonTitle="Find by medical speciality"/>
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
            <ServiceCard button="/sign-in" title="Medications" imgg={pildors} buttonTitle="Get prescription & order" />
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
            <ServiceCard button="/sign-in" title="EHR Files" imgg={oip} buttonTitle="Access to your records" />
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
            <ServiceCard button="/sign-in" title="Labs" imgg={zoomMachine} buttonTitle="Access to your results"/>
          </SwiperSlide>

          <SwiperSlide style={{backgroundColor: colors.background}}>
            <ServiceCard button="/sign-in" title="Vaccines" imgg={vaccines} buttonTitle="Get vaccinated"/>
          </SwiperSlide>


        </Swiper>
  

    </ServicesContainer>


  )

}

export default Services;

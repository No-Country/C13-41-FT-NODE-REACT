import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@/app/colors';
import ReviewCard from './ReviewsCard';
import cliente1 from '@/assets/images/cliente1.jpg';
import cliente2 from '@/assets/images/cliente2.jpg';
import cliente3 from '@/assets/images/cliente3.jpg';
import cliente4 from '@/assets/images/cliente4.jpg';
import cliente5 from '@/assets/images/cliente5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const ReviewsContainer = styled('section')({
	display: 'flex',
	marginTop: '100px',
	flexDirection: 'column',
	flexShrink: '0',

	height: '28rem',
});

const CardsContainer = styled('div')({
	display: 'flex',
	gap: '1.25rem',
	justifyContent: 'center',
	alignItems: 'center',
});

const Title = styled('h1')({
	textAlign: 'center',
	fontSize: '2.875rem',
	fontStyle: 'normal',
	color: `${colors.text}`,
	fontWeight: '500',
	lineHeight: '4.3125rem',
	marginBottom: '40px',
	flexShrink: '0',
});

function Reviews() {
	return (
		<ReviewsContainer>
			<Title className='inter'>Our services in the eyes of our patients</Title>
			<CardsContainer>
				<Swiper
					autoplay={{ delay: 100 }}
					slidesPerView={3}
					spaceBetween={100}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className='mySwiper'
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 10 },
						640: { slidesPerView: 3, spaceBetween: 100 },
					}}
					color={colors.background}
					allowSlideNext
					allowSlidePrev
				>
					<SwiperSlide style={{ backgroundColor: colors.background }}>
						<ReviewCard
							description="“This clinic has been a game-changer for my family. We've used their services for routine check-ups and urgent health concerns.”"
							author='Aspen Hart'
							imgg={cliente1}
						/>
					</SwiperSlide>

					<SwiperSlide style={{ backgroundColor: colors.background }}>
						<ReviewCard
							description="“I can't express how grateful I am for this clinic. The doctors are not only experts in their fields but also compassionate and understanding.”"
							author='Theo Berkshire'
							imgg={cliente2}
						/>
					</SwiperSlide>

					<SwiperSlide style={{ backgroundColor: colors.background }}>
						<ReviewCard
							description='“I had a fantastic experience with this clinic! The virtual consultation was seamless, and the doctor was incredibly knowledgeable.”'
							author='Isabella Martinez'
							imgg={cliente3}
						/>
					</SwiperSlide>

					<SwiperSlide style={{ backgroundColor: colors.background }}>
						<ReviewCard
							description='“Exceptional service from start to finish! The doctor I consulted with was attentive and provided me with personalized advice.”'
							author='Amy Scarrow'
							imgg={cliente4}
						/>
					</SwiperSlide>

					<SwiperSlide style={{ backgroundColor: colors.background }}>
						<ReviewCard
							description="“I can't thank this clinic enough for their outstanding service. The doctors are not only knowledgeable but also genuinely caring.”"
							author='Jesper Riddle'
							imgg={cliente5}
						/>
					</SwiperSlide>
				</Swiper>
			</CardsContainer>
		</ReviewsContainer>
	);
}

export default Reviews;

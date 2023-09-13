import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "@/app/colors";
import ReviewCard from "./ReviewsCard";
import cliente1 from "@/assets/images/cliente1.jpg";
import cliente2 from "@/assets/images/cliente2.jpg";
import cliente3 from "@/assets/images/cliente3.jpg";
import cliente4 from "@/assets/images/cliente4.jpg";
import cliente5 from "@/assets/images/cliente5.jpg";

const ReviewsContainer = styled("section")({
  display: "flex",
  marginTop: "100px",
  flexDirection: "column",
  flexShrink: "0",

  height: "28rem",
});

const CardsContainer = styled("div")({
  display: "flex",
  flexShrink: "0",
  overflow: "hidden",
  width: "91.5625rem",
  height: "19.56.25rem",
  gap: "1.25rem",
  /* justifyContent: 'center', */
  alignItems: "center",
});

const Title = styled("h1")({
  textAlign: "center",
  fontSize: "2.875rem",
  fontStyle: "normal",
  color: `${colors.text}`,
  fontWeight: "500",
  lineHeight: "4.3125rem",
  marginBottom: "40px",
  flexShrink: "0",
});

const NavigationButtonRight = styled("button")`
  position: absolute;
  z-index: 10;
  /* transform: translateY(-50%); */
  /* background: rgba(0, 0, 0, 0.5); */
  fill: var(--Background, #f0ece4);
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const NavigationButtonLeft = styled("button")`
  position: absolute;
  z-index: 10;
  right: 2rem;
  /* background: rgba(0, 0, 0, 0.5); */
  fill: var(--Background, #f0ece4);
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
const CircleContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Circle = styled("div")`
  width: 15px;
  height: 15px;
  background-color: ${props => props.active ? "#94BECB" : "#C1CBCF"};
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`;

function Reviews() {
  const cardContainerRef = useRef(null);
  const [activeCircle, setActiveCircle] = useState(0);

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 300; // Ajusta el valor de desplazamiento según sea necesario
    }
  };

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 300; // Ajusta el valor de desplazamiento según sea necesario
    }
  };

  const scrollToPosition = (position) => {
    if (cardContainerRef.current) {
      const containerWidth = cardContainerRef.current.clientWidth;
      const totalWidth = cardContainerRef.current.scrollWidth;
      const newPosition = (position / 3) * (totalWidth - containerWidth);
      cardContainerRef.current.scrollLeft = newPosition;
      setActiveCircle(position);
    }
  };
  return (
    <ReviewsContainer>
      <Title>Our services in the eyes of our patients</Title>
      <CardsContainer>
        <NavigationButtonLeft onClick={scrollLeft}>&gt;</NavigationButtonLeft>
        <ReviewCard
          description="“This clinic has been a game-changer for my family. We've used their services for routine check-ups and urgent health concerns.”"
          author="Aspen Hart"
          imgg={cliente1}
        />

        <ReviewCard
          description="“I can't express how grateful I am for this clinic. The doctors are not only experts in their fields but also compassionate and understanding.”"
          author="Theo Berkshire"
          imgg={cliente2}
        />

        <ReviewCard
          description="“I had a fantastic experience with this clinic! The virtual consultation was seamless, and the doctor was incredibly knowledgeable.”"
          author="Isabella Martinez"
          imgg={cliente3}
        />

        <ReviewCard
          description="“Exceptional service from start to finish! The doctor I consulted with was attentive and provided me with personalized advice.”"
          author="Amy Scarrow"
          imgg={cliente4}
        />

        <ReviewCard
          description="“I can't thank this clinic enough for their outstanding service. The doctors are not only knowledgeable but also genuinely caring.”"
          author="Jesper Riddle"
          imgg={cliente5}
        />
        <NavigationButtonRight onClick={scrollRight}>
          &lt;
        </NavigationButtonRight>
      </CardsContainer>
	  <CircleContainer>
          <Circle onClick={() => scrollToPosition(0)} active={activeCircle === 0} />
          <Circle onClick={() => scrollToPosition(1)} active={activeCircle === 1} />
          <Circle onClick={() => scrollToPosition(2)} active={activeCircle === 2} />
          <Circle onClick={() => scrollToPosition(3)} active={activeCircle === 3} />
        </CircleContainer>
    </ReviewsContainer>
  );
}

export default Reviews;

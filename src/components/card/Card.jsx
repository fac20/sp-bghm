import React from "react";
import styled from "styled-components";

const Container = styled.article`
  background-color: transparent;
  height: 22rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  width: 100%;
  &:focus {
    transform: rotateY(180deg);
  }
`;

const FrontBack = styled.div`
  backface-visibility: hidden;
  background-color: hsl(159, 56%, 7%);
  color: hsl(141, 45%, 81%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const Front = styled(FrontBack)``;

const Back = styled(FrontBack)`
  transform: rotateY(180deg);
`;

const Title = styled.h3``;

const CategoryIcon = styled.img``;

const CategoryBinImage = styled.img``;

const Button = styled.button``;

function Card({ material, wasteOrganisation, src }) {
  return (
    <Container tabIndex="0">
      <Front>
        <Title>{material}</Title>
        <CategoryIcon src={src} alt={material} />
      </Front>
      <Back>
        <Title>
          {material} goes in {wasteOrganisation}
        </Title>
        <CategoryBinImage src="" alt="bin-type" />
        <Button>press for more information</Button>
      </Back>
    </Container>
  );
}

export default Card;

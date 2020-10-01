import React from "react";
import styled from "styled-components";
import blueBin from "../assets/wheelie-bin-blue.svg";

const Container = styled.article`
  background-color: transparent;
  height: 22rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  width: 100%;
  box-shadow: 0 0 1rem;
  &:focus {
    transform: rotateY(180deg);
  }
`;

const FrontBack = styled.div`
  backface-visibility: hidden;
  background-color: var(--card-background-green);
  color: var(--card-background-green);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const Front = styled(FrontBack)``;

const Back = styled(FrontBack)`
  transform: rotateY(180deg);
`;

const Title = styled.span`
  background-color: var(--main-orange);
  color: var(--background-dark-blue);
`;

const CategoryIcon = styled.img`
  height: 100%;
  margin: 1rem;
  width: auto;
`;

const CategoryBinImage = styled.img``;

const Button = styled.button`
  background-color: hsla(33, 98%, 50%, 0.8);
  padding: 0.8rem;
  font: inherit;
  line-height: 1;
  border: 1px;
  margin: 0;
`;

function Card({ material, wasteOrganisation, src }) {
  return (
    <Container tabIndex="0">
      <Front>
        <Title>
          <h2>{material}</h2>
        </Title>
        <CategoryIcon src={src} alt={material} />
      </Front>
      <Back>
        <Title>
          Put {material} in {wasteOrganisation}
        </Title>
        <CategoryBinImage src={blueBin} alt="bin-type" />
        <Button>press for more information</Button>
      </Back>
    </Container>
  );
}

export default Card;

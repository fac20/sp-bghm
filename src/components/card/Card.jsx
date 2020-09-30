import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  background-color: transparent;
  height: 22rem;
  width: 10rem;
  position: relative;
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5%;
  backface-visibility: hidden;

  background-color: #1b4332;
  color: #eee;
`;

const CardBack = styled(CardFront)``;

const CardTitle = styled.h3``;

const CategoryIcon = styled.img``;

const CategoryBinImage = styled.img``;

const CardButton = styled.button``;

function Card({ material, wasteOrganisation }) {
  return (
    <CardContainer>
      <CardFront>
        <CardTitle>{material}</CardTitle>
        <CategoryIcon src="" alt={material} />
      </CardFront>
      <CardBack>
        <CardTitle>
          {material} goes in {wasteOrganisation}
        </CardTitle>
        <CategoryBinImage src="" alt="bin-type" />
        <CardButton>press for more information</CardButton>
      </CardBack>
    </CardContainer>
  );
}

export default Card;

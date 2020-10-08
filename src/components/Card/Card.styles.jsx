import styled from "styled-components";

export const Container = styled.article`
  background-color: transparent;
  box-shadow: 0 0 1rem #000;
  height: 22rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  width: 100%;
`;

export const OuterContainer = styled.div`
  &:hover ${Container} {
    transform: rotateY(180deg);
  }
`;

export const FrontBack = styled.div`
  backface-visibility: hidden;
  background-color: var(--light-green);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const Front = styled(FrontBack)``;

export const Back = styled(FrontBack)`
  transform: rotateY(180deg);
`;

export const Title = styled.span`
  background-color: var(--very-dark-green);
  color: var(--very-light-green);
  font-weight: bold;
`;

export const BackText = styled.p`
  /* background-color: var(--very-dark-green); */
  color: var(--very-dark-green);
  /* font-weight: bold; */
  font-size: 0.7em;
  margin: 0;
  padding: 1rem;
`;

export const CategoryIcon = styled.img`
  height: 85%;
  width: auto;
  margin: 1rem;
`;

export const CategoryBinImage = styled.img``;

export const Button = styled.button`
  background-color: var(--very-dark-green);
  color: var(--very-light-green);
  font: inherit;
  font-weight: bold;
  line-height: 1;
  /* margin: 0; */
  padding: 0.8rem;
  border: 3px solid var(--very-light-green);
`;

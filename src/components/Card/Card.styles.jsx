import styled from "styled-components";

export const Container = styled.article`
  background-color: transparent;
  box-shadow: 0 0 1rem;
  height: 22rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  width: 100%;
  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FrontBack = styled.div`
  backface-visibility: hidden;
  background-color: var(--very-light-green);
  color: var(--very-light-green);
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
  background-color: var(--main-orange);
  color: var(--background-dark-blue);
  font-weight: bold;
`;

export const BackTitle = styled.span`
  background-color: var(--main-orange);
  color: var(--background-dark-blue);
  font-weight: bold;
  padding: 1rem;
`;
export const CategoryIcon = styled.img`
  height: 85%;
  width: auto;
  margin: 1rem;
`;

export const CategoryBinImage = styled.img``;

export const Button = styled.button`
  background-color: var(--main-orange);
  border: 1px;
  color: var(--background-dark-blue);
  font: inherit;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  padding: 0.8rem;
`;

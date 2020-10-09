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
  /* background-color: var(--very-light-green); */
  color: var(--very-dark-green);
  font-size: 85%;
  font-weight: 500;
  margin: 1rem 0;
  padding: 1rem;
`;

export const CategoryIcon = styled.img`
  height: 85%;
  margin: 1rem;
  width: auto;
`;

export const CategoryBinImage = styled.img``;

export const Button = styled.button`
  border: 3px solid var(--very-light-green);
  background-color: var(--dark-green);
  color: var(--very-light-green);
  font-weight: bold;
  font: inherit;
  border: 1px;
  line-height: 1;
  margin: 0.5rem;
  padding: 0.8rem;

  /* button hover and glow effect */
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition: background-color 0.3s, color 0.3s;
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  z-index: 1;
  &:before {
    -webkit-transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    border-radius: inherit;
    border: 2px solid var(--main-orange);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    width: 100%;
    z-index: -1;
  }
  &:hover {
    background-color: var(--light-orange);
    box-shadow: 0px 15px 20px var(--clear-orange) inset;
    color: var(--dark-orange);
  }
  &:hover:before {
    -webkit-transform: scale3d(1, 1, 1);
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

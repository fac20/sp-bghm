import styled from "styled-components";

export const Title = styled.h3`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px; //to space out the underline
  position: relative;
  &:hover {
    color: rgba(253, 187, 45, 1);
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 0.3rem;
    left: 50%; //makes the undline stop at the middle after hover
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(148, 232, 183, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 50%;
    left: 23%;
  }
`;
export const Section = styled.section``;
export const Article = styled.article`
  margin: 0 auto;
  padding: 0 2rem;
`;

import styled from "styled-components";

export const Title = styled.h3`
  display: inline-block;
  letter-spacing: 0.15em;
  padding: 7rem 4em 1em; //to space out the underline
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: var(--main-orange);
  }
  &:after {
    background: linear-gradient(
      0deg,
      var(--light-green) 0%,
      var(--main-orange) 100%
    );
    /* background: none repeat scroll 0 0 transparent; */
    bottom: 0;
    content: "";
    display: block;
    height: 0.3rem;
    left: 50%; //makes the undline stop at the middle after hover
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 50%;
    left: 23%;
  }
`;
export const Section = styled.section`
  text-align: center;
`;
export const Article = styled.article`
  margin: 0 auto;
  padding: 0 2rem;
`;

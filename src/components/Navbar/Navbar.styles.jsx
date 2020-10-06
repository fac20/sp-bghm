import styled from "styled-components";

/* <nav class="slidemenu">
  
    <!-- Item 1 -->
    <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
    <label for="slide-item-1"><p class="icon">♬</p><span>What can be recycled?</span></label>
    
    <!-- Item 2 -->
    <input type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>
    <label for="slide-item-2"><p class="icon">★</p><span>Where to recycle it</span></label>
    
    <!-- Item 3 -->
    <input type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>
    <label for="slide-item-3"><p class="icon">✈</p><span>What happens to it?</span></label>
    
    <!-- Item 4 -->
    <input type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>
    <label for="slide-item-4"><p class="icon">✎</p><span>Impact of recycling</span></label>
    
    <div class="clear"></div>
    
    <!-- Bar -->
    <div class="slider">
      <div class="bar"></div>
    </div>
    
  </nav> */

/* 
     input
 label
 p tag 
 span 
 div of class clear
 div class slider
 div class bar 
 */

export const DivWrapper = styled.div``;
export const Nav = styled.nav`
  font-family: arial, sans-serif;

  max-width: auto;
  margin: 3.125rem auto;
  overflow: hidden;
`;

/*  ${Label} lets us point to siblings in styled components  */

export const Label = styled.label`
  width: 20%;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: block;
  float: left;
  color: var(--very-dark-green);
  opacity: 0.2;
  &:hover {
    cursor: pointer;
    color: var(main-green);
  }
  transition: all 500ms ease-in-out;
  -webkit-transition: all 500ms ease-in-out;
  -moz-transition: all 500ms ease-in-out;
`;

export const Input = styled.input`
  display: none;
  &:checked + label {
    opacity: 1;
    display: block;
  }
`;

export const DivBar = styled.div`
  width: 20%;
  height: 0.6rem;
  background: var(--very-dark-green);
  border-radius: 0.1rem;
  margin-left: ${(props) => props.margin};
`;
// (e) => setCheck(e.target.value === "inputone")

// export const Input1 = styled(Input)`

// `

// export const Input2 = styled(Input)`

// `

// export const Input3 = styled(Input)`
// &:checked{
//     ${DivBar}{
//         margin-left: 40%;
//     }
// }
// `
// export const Input4 = styled(Input)`
// &:checked{
//     DivBar{
//         margin-left: 60%;
//     }
// }
// `
// export const Input5 = styled(Input)`
// &:checked{
//     DivBar{
//         margin-left: 8%;
//     }
// }
// `

export const PTag = styled.p`
  font-size: 1.2 rem;
  border: solid 0.3rem var(--very-dark-green);
  text-align: center;
  height: 5rem;
  width: 5rem;
  display: block;
  margin: 10% auto;
  line-height: 3.125rem;
  border-radius: 50%;
`;

export const Span = styled.span`
  display: block;
  padding: 0.6rem;
`;

export const DivClear = styled.div`
  clear: both;
`;

export const DivSlider = styled.div`
  width: 100%;
  height: 0.3rem;
  display: block;
  background: var(--nearly-white);
  margin-top: 0.6rem;
  border-radius: 0.3;
`;

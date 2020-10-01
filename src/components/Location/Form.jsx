import React from "react";
import styled from "styled-components";
import getLocation from "../.././utils/getPostcode.js";
import { useHistory } from "react-router-dom";

const PostcodeForm = styled.form`
  background: #d8f3dc;
  border-radius: 20px;
  border: 2px solid #74c69d;
  color: #74c69d;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  width: 50vw;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  &:hover {
    border-radius: 3px;
  }
`;

const Input = styled.input`
  /* border: 1px solid #2d6a4f; */

  border: none;
  border-radius: 10px;
  color: #74c69d;
  padding: 10px;
  margin: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background: #ebfce1;
  }
`;

const PostCodeInput = styled(Input)``;

const SubmitInput = styled(Input)``;

export default function Form() {
  const history = useHistory();
  const storeLocation = (event) => {
    //  prevemt default
    event.preventDefault();
    //  get  postcode from user input
    console.log(event.target);
    console.log(event.target.postcode.value);
    const postcode = event.target.postcode.value;

    getLocation(postcode).then((data) => {
      if (!data.result) {
        return; //take user to error page;
      } else {
        window.localStorage.setItem("location", data.result.admin_district);
        //take user to RecyclingCategories;
        history.push("/categories/" + data.result.admin_district);
      }
    });

    // fetch data depending on postcode
    //  store returned borough in local storage and direct to categories page
    //  return a message  `wrong postcode`if error
  };

  //admin_district
  return (
    <PostcodeForm onSubmit={storeLocation}>
      <Label htmlFor="postcode">Enter your postcode:</Label>
      <PostCodeInput name="postcode" id="postcode" required />
      <SubmitInput type="submit" value="Find categories!" />
    </PostcodeForm>
  );
}

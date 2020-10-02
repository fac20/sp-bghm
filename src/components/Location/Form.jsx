import React from "react";
import styled from "styled-components";
import getLocation from "../.././utils/getPostcode.js";
import { useHistory } from "react-router-dom";

const PostcodeForm = styled.form`
  background: #d8f3dc;
  border: 2px solid #74c69d;
  border-radius: 20px;
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

  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #74c69d;
  margin: 0.5rem;
  padding: 10px;
  width: 100%;
  &:hover {
    background: #ebfce1;
  }
`;

const PostCodeInput = styled(Input)``;

const SubmitInput = styled(Input)``;

export default function Form() {
  const [postCodeError, SetErrorMessage] = React.useState("");
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
        SetErrorMessage("Borough Not Found! Please try again!");
      } else {
        const location = data.result.admin_district
          .toLowerCase()
          .split(" ")
          .join("");
        window.localStorage.setItem("location", location);
        //take user to RecyclingCategories;
        history.push("/categories/" + location);
      }
    });
  };

  return (
    <PostcodeForm onSubmit={storeLocation}>
      <Label htmlFor="postcode">Enter your postcode:</Label>
      <PostCodeInput name="postcode" id="postcode" required />
      <SubmitInput type="submit" value="Find categories!" />
      {postCodeError ? <h1>{postCodeError}</h1> : null}
    </PostcodeForm>
  );
}

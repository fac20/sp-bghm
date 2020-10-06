import React from "react";
import useLocation from "../../hooks/getPostcode.js";
import { useHistory } from "react-router-dom";
import * as SC from "./PostcodeForm.styles.jsx";

export default function PostcodeForm() {
  const [postcode, setPostcode] = React.useState("");
  const [postcodeErrorMessage, setPostcodeErrorMessage] = React.useState("");
  const history = useHistory();
  useLocation({ postcode, setPostcodeErrorMessage, history });
  const storeLocation = (event) => {
    //  prevent default
    event.preventDefault();
    //  get  postcode from user input
    setPostcode(event.target.postcode.value);
  };

  return (
    <SC.Form onSubmit={storeLocation}>
      <SC.Label htmlFor="postcode">Enter your postcode:</SC.Label>
      <SC.PostCodeInput name="postcode" id="postcode" required />
      <SC.SubmitInput type="submit" value="Let's recycle!" />
      {postcodeErrorMessage ? (
        <SC.Title>{postcodeErrorMessage}</SC.Title>
      ) : null}
    </SC.Form>
  );
}

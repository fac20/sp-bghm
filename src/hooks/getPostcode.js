import { useEffect } from "react";

const useLocation = ({ postcode, setPostcodeErrorMessage, history }) => {
  const url = `https://api.postcodes.io/postcodes/${postcode}`;
  useEffect(() => {
    if (!postcode) {
      return;
    }
    fetch(url)
      .then((data) => {
        if (!data) {
          throw new Error("no postcode found");
        }
        return data.json();
      })
      .then((data) => {
        if (!data.result) {
          setPostcodeErrorMessage("Borough Not Found! Please try again!");
        } else {
          const location = data.result.admin_district
            .toLowerCase()
            .split(" ")
            .join("");
          window.localStorage.setItem("location", location);
          //take user to RecyclingCategories;
          history.push("/categories/" + location);
        }
      })
      .catch((error) => setPostcodeErrorMessage(error.message));
  }, [postcode, url, setPostcodeErrorMessage, history]);
};

export default useLocation;

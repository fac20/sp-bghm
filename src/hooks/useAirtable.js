import { useEffect } from "react";
require("dotenv").config();

const base = process.env.REACT_APP_BASE;
const api = process.env.REACT_APP_API_KEY; //maybe we can meet in jitsi and commit the changes?

const useAirtable = ({
  borough,
  linkToLocalAuthority,
  setLinkToLocalAuthority,
}) => {
  const url = `https://api.airtable.com/v0/${base}/Contacts?filterByFormula=({BoroughName} = '${borough}')`;
  useEffect(() => {
    if (!borough) {
      return;
    }
    fetch(url, {
      method: "GET",
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${api}`,
      },
    })
      .then((data) => {
        if (!data) {
          throw new Error("no response from local authorities");
        }
        return data.json();
      })
      .then((data) => {
        if (!data) {
          console.log("link does not exist!");
        } else {
          const link = data.records[0].fields.ContactUrl;
          console.log(link);
          return setLinkToLocalAuthority(link);
        }
      })
      .catch((error) => console.log(error.message));
  }, [borough, setLinkToLocalAuthority, url]);
};

export default useAirtable;

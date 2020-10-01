const getLocation = (postcode) => {
  const url = `https://api.postcodes.io/postcodes/${postcode}`;
  return fetch(url)
    .then((data) => {
      if (!data) {
        throw new Error("no postcode found");
      }
      return data.json();
    })
    .catch(console.error);
};

export default getLocation;

const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyWV2X6AWN87KR6D" }).base(
  "app9mx8EOykX0uizo"
);

const table = base("Contacts");

const getRecords = async (borough) => {
  const records = await table
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 33,
      view: "Grid view",
      filterByFormula: `({BoroughName} = '${borough}')`,
    })
    .firstPage((err, records) => {
      if (err) {
        return console.error(err);
      }
      console.log(records);
    });
};

// getRecords("Havering");

export default getRecords;

// const minifyRecord = (record) => {
//   return {
//     borough: record.BoroughName,
//     url: record.ContactUrl,
//   };
// };

// export default getRecords;

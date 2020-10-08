import { useEffect } from "react";
require("dotenv").config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_BASE
);

// const base = new Airtable({ apiKey: "keyWV2X6AWN87KR6D" }).base(
//   "app9mx8EOykX0uizo"
// );
const table = base("Contacts");

const useRecords = (borough) => {
  useEffect(() => {
    (async (borough) => {
      await table
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
          return records;
        });
    })();
  }, [borough]);
};

export default useRecords;

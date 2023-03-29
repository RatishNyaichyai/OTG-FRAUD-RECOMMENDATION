import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import FraudTable from "./FraudTable";
import { useEffect, useState } from "react";
import { parseCsv } from "./CsvParser";
import csvData from "../../../data/demo.csv";

const FraudTransaction = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parsedData = await parseCsv(csvData);
      setJsonData(parsedData);
    };
    fetchData();
  }, []);

  if (!jsonData) {
    return <div>Loading data...</div>;
  }

  const title = "FRAUD TRANSACTION";

  return (
    <div>
      <Navbar title={title} />
      <Header />
      <div>
        <h2>Suspicious Fraud Transactions Detail </h2>
        <FraudTable data={jsonData} />
      </div>
    </div>
  );
};

export default FraudTransaction;

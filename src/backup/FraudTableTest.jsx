import React from "react";
import { useState, useEffect } from "react";
import { parseCsv } from "../utils/CsvParser";
import csvData from "../../../data/data.csv";

const FraudTableTest = () => {
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

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>TransactionID</th>
          <th>TransactionAmt</th>
          <th>Suspicious</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, index) => (
          <tr key={index}>
            <td>{row.Date}</td>
            <td>{row.TransactionID}</td>
            <td>{row.TransactionAmt}</td>
            <td>{row.suspicious}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FraudTableTest;

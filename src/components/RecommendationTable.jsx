import React from "react";
import { useState, useEffect } from "react";
import { parseCsv } from "../utils/CsvParser";
import csvData from "../data/recommendations_10samples.csv";
import { Tag } from "antd";

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

  function strToArray(data) {
    const str = data;
    const arr = str.substring(1, str.length - 1).split(",");
    return arr;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>product_id</th>
            <th>product_name</th>
            <th>recommendations</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((row, index) => (
            <tr key={index}>
              <td>{row.product_id}</td>
              <td>
                <Tag>{row.product_name}</Tag>
              </td>
              <td>{console.log(strToArray(row.recommendations))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FraudTableTest;

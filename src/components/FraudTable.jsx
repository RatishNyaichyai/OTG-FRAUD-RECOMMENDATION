import React, { useState, useEffect } from "react";
import { Table } from "antd";
import csvData from "../data/data.csv";
const RecommendationEngine = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "TransactionID",
      dataIndex: "TransactionID",
      key: "TransactionID",
    },
    {
      title: "TransactionAmt",
      dataIndex: "TransactionAmt",
      key: "TransactionAmt",
    },
    {
      title: "Fraud Meta-data",
      dataIndex: "suspicious",
      key: "suspicious",
    },
  ];
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(csvData);
      const text = await response.text();
      const rows = text.split("\n");
      const headers = rows[0].split(",").map((header) => header.trim());
      const data = rows.slice(1).map((row) => {
        const values = row.split(",").map((value) => value.trim());
        return headers.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
      });
      const dataTypeArray = data.map((row) => ({
        Date: row["Date"],
        TransactionID: row["TransactionID"],
        TransactionAmt: row["TransactionAmt"],
        suspicious: row["suspicious"],
      }));
      setData(dataTypeArray);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecommendationEngine;

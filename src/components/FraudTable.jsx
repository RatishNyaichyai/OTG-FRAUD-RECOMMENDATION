import React, { useState, useEffect } from "react";
import { Table } from "antd";
import csvData from "../data/final_ui_demo_df.csv";
import Papa from "papaparse";

const FraudTable = () => {
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
      const { data } = Papa.parse(text, { header: true });
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

export default FraudTable;

import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import csvData from "../data/transaction_lineplot.csv";

const FraudLinegraph = () => {
  const [data, setData] = useState([]);

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
        TransactionAmt: Number(row["TransactionAmt"]),
        transaction_type: row["transaction_type"],
      }));
      setData(dataTypeArray);
    }
    fetchData();
  }, []);

  console.log(data);

  const config = {
    data: data,
    xField: "Date",
    yField: "TransactionAmt",
    seriesField: "transaction_type",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) => `${v / 1000} K`,
      },
    },
  };

  return <Line {...config} />;
};

export default FraudLinegraph;

import React from "react";
import { useState, useEffect } from "react";
import { Tag, Table } from "antd";
import Papa from "papaparse";
import csvData from "../data/recommendations_10samples.csv";
import "./styles/RecommendationTable.css";

function strToArray(data) {
  const str = data.replace(/'/g, ""); // remove single quotes
  const arr = str.substring(1, str.length - 1).split(", ");
  return arr;
}

const FraudTableTest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(csvData);
      const text = await response.text();
      const { data } = Papa.parse(text, { header: true });
      const dataTypeArray = data.map((row) => ({
        product_id: row["product_id"],
        product_name: row["product_name"],
        recommendations: row["recommendations"],
      }));
      setData(dataTypeArray);
    }
    fetchData();
  });

  const columns = [
    {
      title: "Product Id",
      dataIndex: "product_id",
      key: "product_id",
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Recommendations",
      dataIndex: "recommendations",
      key: "recommendations",
      render: (recommendations) => (
        <div>
          {strToArray(recommendations).map((recommendation, index) => (
            <Tag key={index} style={{ fontSize: "13px" }} color="orange">
              {recommendation}
            </Tag>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default FraudTableTest;

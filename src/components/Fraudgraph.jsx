import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import csvData from "../data/transaction_lineplot.csv";
import "./styles/Fraudgraph.css";
import LocationDropdownMenu from "./LocationDropdownMenu";
import { Col, Row, Statistic } from "antd";

const Fraudgraph = () => {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [normalTotal, setNormalTotal] = useState(0);
  const [suspiciousTotal, setSuspiciousTotal] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  const handleLocationChange = (option) => {
    setSelectedLocation(option.label);
  };

  const Location = [
    { value: "ALL", label: "ALL" },
    { value: "SCC", label: "SCC" },
    { value: "BUR", label: "BUR" },
    { value: "SFO", label: "SFO" },
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
        TransactionAmt: Number(row["TransactionAmt"]),
        transaction_type: row["transaction_type"],
        location: row["Location"],
      }));
      const filteredData = selectedLocation === "ALL"
        ? dataTypeArray
        : dataTypeArray.filter((row) => row.location === selectedLocation);
      setData(filteredData);
      const normalTransactions = filteredData.filter(
        (row) => row.transaction_type === "Normal Transactions"
      );
      const suspiciousTransactions = filteredData.filter(
        (row) => row.transaction_type === "Suspicious Transactions"
      );
      const normalTotal = normalTransactions.reduce(
        (total, row) => total + row.TransactionAmt,
        0
      );
      const suspiciousTotal = suspiciousTransactions.reduce(
        (total, row) => total + row.TransactionAmt,
        0
      );
      const total = filteredData.reduce(
        (total, row) => total + row.TransactionAmt,
        0
      );
      setNormalTotal(normalTotal);
      setSuspiciousTotal(suspiciousTotal);
      setTotalTransactions(total);
    }
    fetchData();
  }, [selectedLocation]);

  console.log(data);

  const config = {
    data,
    isGroup: true,
    xField: "Date",
    yField: "TransactionAmt",
    seriesField: "transaction_type",
    color: ["#f88c24", "#000000"],
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Total Transactions" value={Math.round(totalTransactions)} />
        </Col>
        <Col span={8}>
          <Statistic title="Total Normal Transactions" value={Math.round(normalTotal)} />
        </Col>
        <Col span={8}>
          <Statistic title="Total Suspicious Transactions" value={Math.round(totalTransactions - normalTotal)} />
        </Col>
      </Row>

      <LocationDropdownMenu options={Location} onSelection={handleLocationChange}
        selectedLocation={selectedLocation} />

      <Column {...config} className="chart" />;
    </div>
  )
};

export default Fraudgraph;

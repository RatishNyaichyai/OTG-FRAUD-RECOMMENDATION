import React, { useState, useEffect } from "react";
import { Table } from "antd";
import csvData from "../data/final_demo_explanationimproved - final_demo_df.csv";
import Papa from "papaparse";
import "./styles/FraudTable.css";
import LocationDropdownMenu from "./LocationDropdownMenu";
import SearchBar from "./SearchBar";

const FraudTable = () => {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [dataTypeArray, setDataTypeArray] = useState([]);

  const handleLocationChange = (option) => {
    setSelectedLocation(option.label);
  };

  const onSearch = (searchValue) => {
    let filteredData = dataTypeArray;
    if (searchValue !== "") {
      filteredData = dataTypeArray.filter((row) => {
        const values = Object.values(row).map((value) =>
          value.toString().toLowerCase()
        );
        return values.some((value) => value.includes(searchValue.toLowerCase()));
      });
    }
    setData(filteredData);
  };

  const Location = [
    { value: "ALL", label: "ALL" },
    { value: "SCC", label: "SCC" },
    { value: "BUR", label: "BUR" },
    { value: "SFO", label: "SFO" },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Transaction ID",
      dataIndex: "TransactionID",
      key: "TransactionID",
    },
    {
      title: "Transaction Amount ($)",
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
        location: row["Location"],
      }));
      setDataTypeArray(dataTypeArray);
      const filteredData = selectedLocation === "ALL"
        ? dataTypeArray
        : dataTypeArray.filter((row) => row.location === selectedLocation);
      setData(filteredData);
    }
    fetchData();
  }, [selectedLocation]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <LocationDropdownMenu options={Location} onSelection={handleLocationChange}
        selectedLocation={selectedLocation} />
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default FraudTable;

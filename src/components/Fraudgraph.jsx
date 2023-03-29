import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import csvData from "../data/transaction_lineplot.csv";

const Fraudgraph = () => {
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
                TransactionAmt: Number(row['TransactionAmt']),
                transaction_type: row["transaction_type"],
            }));
            setData(dataTypeArray);
        }
        fetchData();
    }, []);

    console.log(data)

    const config = {
        data,
        isGroup: true,
        xField: 'Date',
        yField: 'TransactionAmt',
        seriesField: 'transaction_type',
        color: ['#000000', '#f88c24'],
    };

    return <Column {...config} />;
};

export default Fraudgraph;
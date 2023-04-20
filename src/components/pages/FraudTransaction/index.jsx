import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import "../../styles/Index.css";
import FraudTable from "../../FraudTable";
import Fraudgraph from "../../Fraudgraph";

const FraudTransaction = () => {
  const title = "FRAUD TRANSACTION";
  return (
    <div>
      <Navbar title={title} />
      <Header />

      <div className="fraud-transaction-chart">
        <h2>Total Transaction</h2>
        <Fraudgraph />
      </div>

      <div className="fraud-transaction-table">
        <h2>Suspicious Fraud Transaction Details</h2>
        <FraudTable />
      </div>
    </div>
  );
};

export default FraudTransaction;

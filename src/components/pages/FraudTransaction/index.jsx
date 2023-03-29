import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import CalanderDropdownMenu from "../../CalanderDropdownMenu";
import LocationDropdownMenu from "../../LocationDropdownMenu";
import SearchBar from "../../SearchBar";
import "../../styles/Index.css";
import FraudTable from "../../FraudTable";
import FraudLinegraph from "../../FraudLinegraph";

const Location = [
  { value: "ALL", label: "ALL" },
  { value: "SCC", label: "SCC" },
  { value: "BUR", label: "BUR" },
  { value: "SFO", label: "SFO" },
  { value: "DAB", label: "DAB" },
];

const Periodicity = [
  { value: "Daily", label: "Daily" },
  { value: "Monthly", label: "Monthly" },
];

const onSelection = (selectedOption) => {
  console.log(`Selected option: ${selectedOption.label}`);
  // Perform action based on selected option here
};

const onSearch = (searchValue) => {
  console.log(`Search value: ${searchValue}`);
  // Make API call or perform search logic here
};

const FraudTransaction = () => {
  const title = "FRAUD TRANSACTION";
  return (
    <div>
      <Navbar title={title} />
      <Header />
      <div className="fraud-transaction-line-graph">
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "500",
            margin: "30px",
          }}
        >
          Total Transaction
        </h2>
        <div className="elements">
          <LocationDropdownMenu options={Location} onSelection={onSelection} />
          <CalanderDropdownMenu
            options={Periodicity}
            onSelection={onSelection}
          />
        </div>
        <FraudLinegraph />
      </div>
      <div className="fraud-transaction-table">
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "500",
            margin: "30px",
          }}
        >
          Suspicious Fraud Transaction Details
        </h2>
        <div className="elements">
          <SearchBar onSearch={onSearch} />
          <LocationDropdownMenu options={Location} onSelection={onSelection} />
          <CalanderDropdownMenu
            options={Periodicity}
            onSelection={onSelection}
          />
        </div>
        <FraudTable />
      </div>
    </div>
  );
};

export default FraudTransaction;

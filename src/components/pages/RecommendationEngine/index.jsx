import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import RecommendationTable from "../../RecommendationTable";
import "../../styles/Index.css";

import LocationDropdownMenu from "../../LocationDropdownMenu";
import SearchBar from "../../SearchBar";

const Location = [
  { value: "ALL", label: "ALL" },
  { value: "SCC", label: "SCC" },
  { value: "BUR", label: "BUR" },
  { value: "SFO", label: "SFO" },
  { value: "DAB", label: "DAB" },
];

const onSelection = (selectedOption) => {
  console.log(`Selected option: ${selectedOption.label}`);
  // Perform action based on selected option here
};

const onSearch = (searchValue) => {
  console.log(`Search value: ${searchValue}`);
  // Make API call or perform search logic here
};

const RecomendationEngine = () => {
  const title = "RECOMMENDATION ENGINE";
  return (
    <div>
      <Navbar title={title} />
      <Header />

      <div className="recommendation-table">
        <h2>Recommendation Table</h2>
        <div className="elements">
          <SearchBar onSearch={onSearch} />
          <LocationDropdownMenu options={Location} onSelection={onSelection} />
          <button className="recommendation-button">
            Try Generate Recommendations
          </button>
        </div>

        <RecommendationTable />
      </div>
    </div>
  );
};
export default RecomendationEngine;

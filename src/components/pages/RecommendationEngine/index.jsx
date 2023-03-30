import React from "react";
import Navbar from "../../Navbar";
import Header from "../../Header";
import RecommendationTable from "../../RecommendationTable";

const RecomendationEngine = () => {
  const title = "RECOMMENDATION ENGINE";
  return (
    <div>
      <Navbar title={title} />
      <Header />
      <div className="recommendation-table">
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "500",
            margin: "30px",
          }}
        >
          Recommendation Table
        </h2>
        <RecommendationTable />
      </div>
    </div>
  );
};
export default RecomendationEngine;

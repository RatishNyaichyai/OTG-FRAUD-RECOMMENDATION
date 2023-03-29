import React from "react";

const FraudTableTest = (props) => {
  const { data } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>TransactionID</th>
          <th>TransactionAmt</th>
          <th>Suspicious</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.Date}</td>
            <td>{row.TransactionID}</td>
            <td>{row.TransactionAmt}</td>
            <td>{row.suspicious}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FraudTableTest;

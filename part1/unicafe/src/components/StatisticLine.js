import React from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.label}</td><td>{props.value}</td>
    </tr>
  );
};

export default StatisticLine;

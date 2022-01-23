import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const total = props.bad + props.good + props.neutral;
  const average = (props.good * 1 + props.bad * -1) / total;
  const positive = (props.good * 100) / total;

  return (
    <>
      <h1>Statistics</h1>

      {total ? (
        <div>
          <table>
            <tbody>
              <StatisticLine value={props.good} label="good"></StatisticLine>
              <StatisticLine
                value={props.neutral}
                label="neutral"
              ></StatisticLine>
              <StatisticLine value={props.bad} label="bad"></StatisticLine>
              <StatisticLine value={total} label="total"></StatisticLine>
              <StatisticLine value={average} label="average"></StatisticLine>
              <StatisticLine value={positive} label="positive"></StatisticLine>
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};

export default Statistics;

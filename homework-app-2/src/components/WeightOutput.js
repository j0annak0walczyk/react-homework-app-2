import React from "react";
import "./WeightOutput.css";

export const WeightOutput = ({ content, className, result }) => {
  return (
    <div>
      <div className={className}>
        {content}
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

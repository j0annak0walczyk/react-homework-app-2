import React from "react";
import "./WeightForm.css";
// import { useState } from "react";

export const WeightForm = ({ setPounds }) => {
  // const [pounds, setPounds] = useState(0);
  return (
    <div>
      <input
        type="number"
        className="weight-form"
        placeholder="Enter pounds"
        onChange={(e) => {
          let pounds = e.target.value;
          setPounds(parseFloat(pounds));
          console.log(pounds);
        }}
      ></input>
    </div>
  );
};

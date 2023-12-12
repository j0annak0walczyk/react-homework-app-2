import "./App.css";
import { AppTitle } from "./components/AppTitle";
import { WeightForm } from "./components/WeightForm";
import { WeightOutput } from "./components/WeightOutput";
import { useState } from "react";

function App() {
  const [pounds, setPounds] = useState(0);
  const grams = () => {
    return pounds * 453.59237;
  };

  const kilograms = () => {
    return pounds * 0.45359237;
  };

  const ounces = () => {
    return pounds * 16;
  };

  return (
    <div className="App">
      <AppTitle />
      <WeightForm setPounds={setPounds} />
      <WeightOutput
        content="Grams:"
        className="weight-output-1"
        result={grams()}
      />
      <WeightOutput
        content="Kilograms:"
        className="weight-output-2"
        result={kilograms()}
      />
      <WeightOutput
        content="Ounces:"
        className="weight-output-3"
        result={ounces()}
      />
    </div>
  );
}

export default App;

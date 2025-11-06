import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./layouts/InputGroup";

import Input from "./layouts/Input";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import {
  LABEL_INITIAL_INVESTMENT,
  LABEL_ANNUAL_INVESTMENT,
  LABEL_INVESTMENT_DURATION,
  LABEL_EXPECTED_RATE_OF_RETURN,
  AMOUNT_INITIAL_INVESTMENT,
  AMOUNT_ANNUAL_INVESTMENT,
  AMOUNT_INVESTMENT_DURATION,
  AMOUNT_EXPECTED_RATE_OF_RETURN,
} from "./constants/investment";
import { NUMBER } from "./constants/types";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(
    AMOUNT_INITIAL_INVESTMENT
  );
  const [annualInvestment, setAnnualInvestment] = useState(
    AMOUNT_ANNUAL_INVESTMENT
  );
  const [investmentDuration, setInvestmentDuration] = useState(
    AMOUNT_INVESTMENT_DURATION
  );
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(
    AMOUNT_EXPECTED_RATE_OF_RETURN
  );

  const data = calculateInvestmentResults({
    initialInvestment: +initialInvestment,
    annualInvestment: +annualInvestment,
    expectedReturn: +expectedRateOfReturn,
    duration: +investmentDuration,
  });

  function handleInitialInvestment(event) {
    setInitialInvestment(event.target.value);
    console.log("Initial Investment:", event.target.value);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(event.target.value);
    console.log("Annual Investment:", event.target.value);
  }

  function handleInvestmentDuration(event) {
    setInvestmentDuration(event.target.value);
    console.log("Investment Duration:", event.target.value);
  }

  function handleExpectedRateOfReturn(event) {
    setExpectedRateOfReturn(event.target.value);
    console.log("Expected Rate Of Return:", event.target.value);
  }

  return (
    <>
      <Header />
      <InputGroup>
        <Input
          type={NUMBER}
          label={LABEL_INITIAL_INVESTMENT}
          value={initialInvestment}
          handleChange={handleInitialInvestment}
        />
        <Input
          type={NUMBER}
          label={LABEL_ANNUAL_INVESTMENT}
          value={annualInvestment}
          handleChange={handleAnnualInvestment}
        />
        <Input
          type={NUMBER}
          label={LABEL_INVESTMENT_DURATION}
          value={investmentDuration}
          handleChange={handleInvestmentDuration}
        />
        <Input
          type={NUMBER}
          label={LABEL_EXPECTED_RATE_OF_RETURN}
          value={expectedRateOfReturn}
          handleChange={handleExpectedRateOfReturn}
        />
      </InputGroup>
      <Results data={data} />
    </>
  );
}

export default App;

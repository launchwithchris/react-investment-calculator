import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup/InputGroup";
import Input from "./layouts/Input";

const INITIAL_INVESTMENT = "Initial Investment";
const ANNUAL_INVESTMENT = "Annual Investment";
const INVESTMENT_DURATION = "Duration";
const EXPECTED_RATE_OF_RETURN = "Expected Return";

const NUMBER = "number";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(0);

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
          label={INITIAL_INVESTMENT}
          value={initialInvestment}
          handleChange={handleInitialInvestment}
        />
        <Input
          type={NUMBER}
          label={ANNUAL_INVESTMENT}
          value={annualInvestment}
          handleChange={handleAnnualInvestment}
        />
        <Input
          type={NUMBER}
          label={INVESTMENT_DURATION}
          value={investmentDuration}
          handleChange={handleInvestmentDuration}
        />
        <Input
          type={NUMBER}
          label={EXPECTED_RATE_OF_RETURN}
          value={expectedRateOfReturn}
          handleChange={handleExpectedRateOfReturn}
        />
      </InputGroup>
    </>
  );
}

export default App;

import {
  LABEL_YEAR,
  LABEL_INTEREST_EARNED,
  LABEL_END_OF_YEAR_VALUE,
  LABEL_TOTAL_INTEREST,
  LABEL_INVESTMENT_VALUE,
} from "../constants/Results";

import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({
  initialInvestment,
  annualInvestment,
  investmentDuration,
  expectedRateOfReturn,
}) {
  const data = calculateInvestmentResults({
    initialInvestment: +initialInvestment,
    annualInvestment: +annualInvestment,
    expectedReturn: +expectedRateOfReturn,
    duration: +investmentDuration,
  });
  const initialInvestmentAmount =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    <section>
      <table className="center" id="result">
        <thead>
          <tr>
            <th>{LABEL_YEAR}</th>
            <th>{LABEL_INVESTMENT_VALUE}</th>
            <th>{LABEL_INTEREST_EARNED}</th>
            <th>{LABEL_END_OF_YEAR_VALUE}</th>
            <th>{LABEL_TOTAL_INTEREST}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              initialInvestmentAmount -
              yearData.annualInvestment * yearData.year;

            const totalAmmountInvested =
              yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(totalAmmountInvested)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(totalInterest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

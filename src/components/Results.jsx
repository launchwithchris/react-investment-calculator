export default function Results({ data }) {
  return (
    <section>
      <table className="center" id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest Earned</th>
            <th>End of Year Value</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{yearData.interest.toFixed(2)}</td>
              <td>{yearData.valueEndOfYear.toFixed(2)}</td>
              <td>{yearData.annualInvestment.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

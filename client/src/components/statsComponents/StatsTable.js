import "./StatsTable.css";
function StatsTable(props) {
  return (
    <table className="mps">
      <thead>
        <tr>
          <th>Party</th>
          <th>Party Representative</th>
          <th># of Votes</th>
        </tr>
      </thead>
      <tbody>
        {props.stats.map((x) => (
          <tr key={x.PartyName}>
            <td>{x.PartyName}</td>
            <td>{x.firstName + " " + x.lastName}</td>
            <td>{x.numberofvotes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default StatsTable;

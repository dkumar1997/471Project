import "./StatsTable.css";
function ElectionsTable(props) {
  return (
    <table className="mps">
      <thead>
        <tr>
          <th>Year</th>
          <th>Winning Party</th>
          <th>Winning Prime Minister</th>
        </tr>
      </thead>
      <tbody>
        {props.stats.map((x) => (
          <tr key={x.PartyName}>
            <td>{x.electionYear}</td>
            <td>{x.PartyName}</td>
            <td>{x.PartyLeader}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ElectionsTable;

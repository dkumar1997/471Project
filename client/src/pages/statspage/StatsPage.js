import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import "./StatsPage.css";
import StatsTable from "../../components/statsComponents/StatsTable";
import ElectionsTable from "../../components/statsComponents/ElectionsTable";
function StatsPage() {
  const [ridingStats, setRidingStats] = useState(null);
  const [electionWinners, setElectionWinners] = useState(null);
  useEffect(() => {
    fetch(`/get_riding_stats`)
      .then((res) => res.json())
      .then((ridingStats) => {
        setRidingStats(ridingStats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRidingStats]);
  useEffect(() => {
    fetch(`/get_election_winners`)
      .then((res) => res.json())
      .then((electionWinners) => {
        setElectionWinners(electionWinners);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setElectionWinners]);
  return (
    <div>
      <NavBar />
      {ridingStats != null && electionWinners != null ? (
        <div className="tables">
          <div className="mpstats">
            <StatsTable stats={ridingStats} />
          </div>
          <div className="electionstats">
            <ElectionsTable stats={electionWinners} />
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default StatsPage;

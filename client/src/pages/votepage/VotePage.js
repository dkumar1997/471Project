import NavBar from "../../components/NavBar";
import { useState } from "react";
import "./VotePage.scss";
import { useEffect } from "react";
function VotePage() {
  const [mps, setMps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [votePerson, setVotePerson] = useState(null);
  const [didVote, setDidVote] = useState(false);
  let userId = localStorage.getItem("userId");

  useEffect(() => {
    getVoteCheck();

    if (didVote === false) {
      getMps();
    }
  }, []);
  async function getVoteCheck() {
    await fetch(`/get_didVote?userId=${userId}`)
      .then((res) => res.json())
      .then((voteId) => {
        if (voteId.voteId > 0) {
          setDidVote(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getMps() {
    await fetch(`/get_mp_for_riding?userId=${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setMps(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  if (loading) return "Loading...";
  if (error) return "Error!";
  const handleVoteChange = (event) => {
    setVotePerson(event.target.value);
  };
  const handleSubmitVote = (event) => {
    let firstName = votePerson.split(" ")[0];
    let lastName = votePerson.split(" ")[1];
    console.log(votePerson);
    console.log(userId);
    fetch(`/submit_vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        firstName: firstName,
        lastName: lastName,
      }),
    })
      .then((res) => res.json())
      .then((voteId) => {
        console.log(voteId);
        setDidVote(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="voting">
      <NavBar />

      {mps != null && didVote === false ? (
        <div className="vote-section">
          <div className="selectdiv">
            <label>
              <select onChange={handleVoteChange} defaultValue="nonSelect">
                <option value="nonSelect" disabled>
                  Select MP
                </option>
                {mps.map((x) => (
                  <option
                    key={x.PartyName}
                    value={x.firstName + " " + x.lastName}
                  >
                    {x.PartyName + " " + x.firstName + " " + x.lastName}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button className="button-33" onClick={handleSubmitVote}>
              Vote
            </button>
          </div>
        </div>
      ) : (
        <h1>You have voted! Thank you for voting</h1>
      )}
    </div>
  );
}
export default VotePage;

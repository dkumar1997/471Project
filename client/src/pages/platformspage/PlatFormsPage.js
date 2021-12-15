import NavBar from "../../components/NavBar";
import PlatFormsCard from "../../components/platFormsComponents/PlatFormsCard";
import "./PlatFormsPage.scss";
import { useState, useEffect } from "react";
import liberal from "../../images/liberal.jpg";
import conservative from "../../images/conservative.jpg";
import quebecois from "../../images/quebecois.jpg";
import ndp from "../../images/NDP.png";
import green from "../../images/green.png";
function PlatFormsPage() {
  const [platforms, setPlatforms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, [setPlatforms]);
  async function getData() {
    await fetch("/get_platform_info")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setPlatforms(data);
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
  console.log(platforms);
  if (platforms == null) {
    return "";
  }
  return (
    <div>
      <NavBar />
      {platforms != null ? (
        <div className="platform_container">
          <PlatFormsCard
            platform={platforms[0]}
            link="https://liberal.ca/"
            image={liberal}
          />
          <PlatFormsCard
            platform={platforms[1]}
            link="https://www.conservative.ca/"
            image={conservative}
          />
          <PlatFormsCard
            platform={platforms[2]}
            link="https://www.blocquebecois.org/"
            image={quebecois}
          />
          <PlatFormsCard
            platform={platforms[3]}
            link="https://www.ndp.ca/"
            image={ndp}
          />
          <PlatFormsCard
            platform={platforms[4]}
            link="https://www.greenparty.ca/en"
            image={green}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default PlatFormsPage;

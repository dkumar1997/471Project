import { useEffect, useState } from "react";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import PlatFormsPage from "./pages/platformspage/PlatFormsPage";
import StatsPage from "./pages/statspage/StatsPage";
import VotePage from "./pages/votepage/VotePage";
import SignUpPage from "./pages/signuppage/SignUpPage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage navigate={navigate} />} />
        <Route exact path="/platform" element={<PlatFormsPage />} />
        <Route exact path="/stats" element={<StatsPage />} />
        <Route exact path="/vote" element={<VotePage />} />
        <Route
          exact
          path="/signup"
          element={<SignUpPage navigate={navigate} />}
        />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

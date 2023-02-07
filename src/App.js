import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import Description from "./pages/description/Description";
import Selection from "./pages/selection/Selection";
import Final from "./pages/final/Final";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [playlist, setPlaylist] = useState(null);
  const [token, setToken] = useState("");
  const [description, setDescription] = useState(null);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  const updatePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
  }

  const updateDescription = (newDescription) => {
    setDescription(newDescription);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/description" /> : <Login />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/description" element={token ? (description ? <Navigate to="/selection" /> : <Description onSubmission={updateDescription}/>) : <Login />}/>
        <Route path="/selection" element={token ? (description ? <Selection onPlaylistSelect={updatePlaylist} /> : <Navigate to="/description" />) : <Login />} />
        <Route path="/final" element={token ? (playlist ? <Final playlist={playlist} /> : <Navigate to="/selection" />) : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
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

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  const updatePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Selection /> : <Login />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/selection" element={token ? <Selection onPlaylistSelect={updatePlaylist} /> : <Login />} />
        <Route path="/final" element={token ? (playlist ? <Final playlist={playlist} /> : <Selection />) : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import Login from "./pages/login/Login";
import Selection from "./pages/selection/Selection";
import Final from "./pages/final/Final";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {useState} from "react";

function App() {
  const [token, setToken] = useState("");
  let tempToken = window.localStorage.getItem("token");
  if (tempToken) {
    setToken(tempToken);
  }

  return (
    <Router>
      <Routes>
        {console.log("hello")}
        <Route path="/" element={token ? <Selection /> : <Login />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/selection" element={token ? <Selection /> : <Login />} />
        <Route path="/final" element={token ? <Final /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;

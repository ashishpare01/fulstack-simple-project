import "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChallengeList from "./components/ChallengeList";
import './components/Navbar.css';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to Createath</h1>} />
          <Route path="/challenges" element={<ChallengeList />} />
          <Route path="/about" element={<h1>About Createath</h1>} />
        </Routes>
    </Router>
  );
}

export default App;

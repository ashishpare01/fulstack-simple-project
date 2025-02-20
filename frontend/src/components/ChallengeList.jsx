import  { useState, useEffect } from "react";
import axios from "axios";
import { FaTrophy, FaRegCalendarAlt } from "react-icons/fa";
import "./ChallengeList.css";

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/challenges/")
      .then((response) => {
        setChallenges(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch challenges. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="challenge-container">
      <h2 className="title">Challenges</h2>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="challenge-grid">
          {challenges.map((challenge) => (
            <div className="challenge-card" key={challenge.id}>
              <h3 className="challenge-title">{challenge.title}</h3>
              <p className="challenge-description">{challenge.description}</p>
              <span
                className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}
              >
                {challenge.difficulty}
              </span>
              <div className="points">
                <FaTrophy /> {challenge.points} Points
              </div>
              <div className="created-at">
                <FaRegCalendarAlt />{" "}
                {new Date(challenge.created_at).toLocaleDateString()}
              </div>
              <button className="start-button">Start Challenge</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeList;

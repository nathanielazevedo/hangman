import { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch("http://localhost:3000/leaderboard");
      const data = await response.json();
      setLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);
  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "flex-start",
        marginTop: "10vh",
      }}
    >
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            position: "absolute",
            top: "1rem",
            left: "1rem",
          }}
        >
          <Typography>Home</Typography>
        </Button>
      </Link>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "5vh",
        }}
      >
        Leaderboard
      </Typography>
      <table
        style={{
          width: "50%",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>
              <Typography variant="h6">Rank</Typography>
            </th>
            <th style={{ textAlign: "left" }}>
              <Typography variant="h6">Name</Typography>
            </th>
            <th style={{ textAlign: "left" }}>
              <Typography variant="h6">Score</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Leaderboard;

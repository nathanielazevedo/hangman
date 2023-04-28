import { Dialog, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

// eslint-disable-next-line react/prop-types
const LostDialog = ({ open, resetGame, score }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const addToLeaderboard = async () => {
    await fetch("http://localhost:3000/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, score: score }),
    });
    setSubmitted(true);
  };

  return (
    <Dialog open={open} fullWidth>
      <Box
        sx={{
          height: "40vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h4">Great Job!</Typography>
          <Typography variant="h5">Your Score: {score}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            sx={{
              width: "65%",
            }}
            onChange={(event) => {
              setName(event.target.value);
            }}
          >
            Username
          </TextField>
          <Button
            variant="contained"
            color={submitted ? "success" : "primary"}
            onClick={addToLeaderboard}
            sx={{
              maxWidth: "30%",
              height: "55px",
            }}
          >
            {submitted ? <CheckIcon /> : "Submit to Leaderboard"}
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={resetGame}
          sx={{
            height: "50px",
          }}
        >
          Play Again
        </Button>
        <Link
          to="/"
          sx={{
            width: "100%",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            onClick={resetGame}
            sx={{
              height: "50px",
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};

export default LostDialog;

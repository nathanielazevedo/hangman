import { Dialog, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const LostDialog = ({ open, resetGame, score, word }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const addToLeaderboard = async () => {
    if (!name.replace(/\s/g, "").length) {
      setNameError(true);
      return;
    }
    toast.info("Submitting Score... free servers are slow :)");
    fetch("https://hangman-back.onrender.com/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, score: score }),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Score Submitted!");
        setSubmitted(true);
      } else {
        toast.error("Score Failed to Submit :(");
      }
    });
  };

  return (
    <Dialog open={open} fullWidth>
      <ToastContainer position="bottom-right" theme="dark" />
      <Box
        sx={{
          height: "40vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
          fontFamily: "Coming Soon, cursive",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Coming Soon, cursive",
              }}
            >
              Great Job!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Coming Soon, cursive",
              }}
            >
              The word was:{" "}
              <Typography
                sx={{
                  fontFamily: "Coming Soon, cursive",
                  display: "inline",
                  color: "red",
                  fontSize: "30px",
                }}
              >
                {word}
              </Typography>
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Coming Soon, cursive",
              marginTop: "20px",
            }}
          >
            Your Score: {score}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: score > 0 ? "flex" : "none",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            error={nameError}
            helperText={nameError ? "Name cannot be empty" : ""}
            value={name}
            sx={{
              width: "65%",
              fontFamily: "Coming Soon, cursive",
              "& label": {
                fontFamily: "Coming Soon, cursive",
              },
              "& fieldset": {
                fontFamily: "Coming Soon, cursive",
              },
            }}
            onChange={(event) => {
              setNameError(false);
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
              fontFamily: "Coming Soon, cursive",
            }}
          >
            {submitted ? <CheckIcon /> : "Submit to Leaderboard"}
          </Button>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            setName("");
            setNameError(false);
            setSubmitted(false);
            resetGame();
          }}
          sx={{
            height: "50px",
            fontFamily: "Coming Soon, cursive",
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
              fontFamily: "Coming Soon, cursive",
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

import { useState } from "react";
import "./App.css";
import zero from "./assets/0.svg";
import one from "./assets/1.svg";
import two from "./assets/2.svg";
import three from "./assets/3.svg";
import four from "./assets/4.svg";
import five from "./assets/5.svg";
import six from "./assets/6.svg";
import paper from "./assets/paper.jpeg";
import { wordBank } from "./wordBank";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import LostDialog from "./LostDialog";
import ChallengeDialog from "./ChallengeDialog";
import CryptoJS from "crypto-js";

const imagesHash = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

const alphabet = Array.from(Array(26)).map((_, index) =>
  String.fromCharCode(97 + index)
);

function App() {
  const { text } = useParams();

  const decrypt = (data) => {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  };
  const { category, difficulty } = useParams();
  const [rightLetters, setRightLetters] = useState(0);
  const words = wordBank[category];
  const [guessed, setGuessed] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [wrongs, setWrongs] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(decrypt(text));

  const [score, setScore] = useState(0);

  const handleGuess = (letter) => {
    if (remainingAttempts === 0) {
      setOpen(true);
      return;
    }
    if (guessed.includes(letter)) return;
    setGuessed((guessed) => [...guessed, letter]);
    if (currentWord.includes(letter)) {
      const count = currentWord.split("").reduce((acc, curr) => {
        if (curr === letter) {
          acc++;
        }
        return acc;
      }, 0);
      setScore((score) => score + count);
      setRightLetters((rightLetters) => rightLetters + count);
      if (rightLetters + count === currentWord.length) {
        setOpen(true);
        return;
      }
    } else {
      setWrongs((wrongs) => wrongs + 1);
      setRemainingAttempts((remainingAttempts) => {
        const rA = remainingAttempts - 1;
        if (rA === 0) {
          setOpen(true);
        }
        return rA;
      });
    }
  };

  const resetGame = () => {
    setGuessed([]);
    setRemainingAttempts(6);
    setWrongs(0);
    setOpen(false);
    setScore(0);
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
  };

  const getButtonColor = (letter) => {
    if (!guessed.includes(letter)) return "primary";
    if (currentWord.includes(letter)) {
      return "success";
    } else {
      return "error";
    }
  };

  return (
    <Box style={styles.container}>
      <ChallengeDialog open={open} resetGame={resetGame} score={score} />
      <img src={imagesHash[wrongs]} width="400px" />
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: "1",
          }}
        >
          Go Back
        </Button>
      </Link>
      <Box sx={styles.score}>
        <Typography>Score: {score}</Typography>
        <Typography>Remaining: {wrongs}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={styles.inputContainer}>
          {currentWord.split("").map((letter, i) => {
            return (
              <div key={i} style={styles.letter}>
                {guessed.includes(letter) ? letter : ""}
              </div>
            );
          })}
        </Box>
        <Box style={styles.wordBankContainer}>
          {alphabet.map((letter, index) => (
            <Button
              key={index}
              sx={styles.button}
              color={getButtonColor(letter)}
              variant="contained"
              // disabled={guessed.includes(letter)}
              onClick={() => handleGuess(letter)}
            >
              {letter}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;

const styles = {
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  img: {
    position: "absolute",
    zIndex: "-1",
    width: "100vw",
    height: "100vh",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  score: {
    position: "absolute",
    top: "50px",
    right: "50px",
    color: "white",
  },
  letter: {
    borderBottom: "3px solid white",
    textAlign: "center",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  wordBankContainer: {
    marginTop: "70px",
    width: "500px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50px",
    height: "50px",
    margin: "5px",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
};

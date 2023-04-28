import { useState } from "react";
import "./App.css";
import zero from "./assets/0.svg";
import one from "./assets/1.svg";
import two from "./assets/2.svg";
import three from "./assets/3.svg";
import four from "./assets/4.svg";
import five from "./assets/5.svg";
import six from "./assets/6.svg";
import { wordBank } from "./wordBank";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LostDialog from "./LostDialog";
import chalkboard from "./assets/chalkboard.jpeg";

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
  const { category } = useParams();
  const [rightLetters, setRightLetters] = useState(0);
  const words = wordBank[category];
  const [guessed, setGuessed] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [wrongs, setWrongs] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

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
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        setRightLetters(0);
        setGuessed([]);
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
      <LostDialog
        open={open}
        resetGame={resetGame}
        score={score}
        word={currentWord}
      />
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: "1",
            fontFamily: "Coming Soon, cursive",
            fontSize: { xs: "20px", lg: "30px" },
          }}
        >
          Home
        </Button>
      </Link>
      <Box sx={styles.score}>
        <Typography
          sx={{
            fontFamily: "Coming Soon, cursive",
            fontSize: { xs: "20px", lg: "30px" },
          }}
        >
          Score: {score}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Coming Soon, cursive",
            fontSize: { xs: "20px", lg: "30px" },
          }}
        >
          Remaining Guesses: {remainingAttempts}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          width: "100%",
          justifyContent: "space-evenly",
          paddingBottom: { xs: "15px", sm: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: "200px", lg: "400px" },
            marginTop: { xs: "100px", lg: "0px" },
          }}
        >
          <img src={imagesHash[wrongs]} width="100%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "400px", lg: "400px" },
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
    </Box>
  );
}

export default App;

const styles = {
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundImage: `url(${chalkboard})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
    flexWrap: "wrap",
    width: { xs: "400px", lg: "500px" },
  },
  score: {
    position: "absolute",
    top: { xs: "20px", lg: "30px" },
    right: { xs: "20px", lg: "30px" },
    color: "white",
    fontFamily: "Coming Soon, cursive",
  },
  letter: {
    borderBottom: "3px solid white",
    textAlign: "center",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    alignItems: "center",
    margin: "5px",
  },
  wordBankContainer: {
    marginTop: "20px",
    width: { xs: "300px", lg: "500px" },
    maxWidth: { xs: "300px", lg: "500px" },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: { xs: "20px", sm: "30px", lg: "50px" },
    maxWidth: { xs: "20px", sm: "30px", lg: "50px" },
    margin: "5px",
    color: "white",
    fontSize: { xs: "10px", sm: "20px", lg: "20px" },
    cursor: "pointer",
    fontFamily: "Coming Soon, cursive",
  },
};

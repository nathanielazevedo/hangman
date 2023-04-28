import { useState } from "react";
import "./App.css";
import zero from "./assets/0.svg";
import one from "./assets/1.svg";
import two from "./assets/2.svg";
import three from "./assets/3.svg";
import four from "./assets/4.svg";
import five from "./assets/5.svg";
import six from "./assets/6.svg";

const imagesHash = {
  0: zero,
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

function App() {
  const [guessed, setGuessed] = useState([]);
  const [input, setInput] = useState("");
  const [currentWord, setCurrentWord] = useState(wordBank[Math.floor(Math.random() * wordBank.length)])
  const [remainingAttempts, setRemainingAttempts] = useState(6)
  const [wrongs, setWrongs] = useState(0);
  const [helperText, setHelperText] = useState("");
  const wordBank = ["hello", "world", "react", "javascript", "hangman"];

  const handleGuess = (letter) => {
    const newGuessed = [...guessed. letter.toLowerCase()]
    setGuessed(newGuessed)

    if (currentWord.toLowerCase().includes(letter.toLowerCase())) {
      if (newGuessed.filter((guess) => currentWord.toLowerCase().includes(guess)).length === currentWord.length) {
        alert("You win!")
        resetGame();
      }
    } else {
      setRemainingAttempts(remainingAttempts - 1)
      if (remainingAttempts === 1) {
        alert(`You lost! The word was "${currentWord}".`);  
        resetGame();
      }
    }
  }

  const resetGame = () => {
    setGuessed([]);
    setCurrentWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
    setRemainingAttempts(6);
  };

  return (
    <>
      <div
        className="App"
        style={{
          maxWidth: "800px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center"
        }}
      >
        <h1>Hangman</h1>
      </div>
      <div
        style={{
          width: "500px",
        }}
      >
        {currentWord.split('').map((letter, index) => (
          <span key={index}>
            {guessed.includes(letter.toLowerCase()) ? letter : '_'}
          </span>
        ))}
        <img src={imagesHash[wrongs]} width="200px" />
      </div>
      <p>Remaining attempts: {remainingAttempts}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {wordBank.split("").map((letter, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid white",
                textAlign: "center",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "5px",
              }}
            >
              {Array.from(Array(26)).map((_, index) => (
          <button key={index} disabled={guessed.includes(String.fromCharCode(97 + index))} onClick={() => handleGuess(String.fromCharCode(97 + index))}>
            {String.fromCharCode(97 + index)}
          </button>
        ))}
              <h5
                style={{
                  color: "white",
                }}
              >
                {guessed.includes(letter) ? letter : ""}
              </h5>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "70px",
        }}
      >
        <div>Guess a Letter</div>
        <input
          type="text"
          value={input}
          onChange={(evt) => {
            setInput(evt.target.value);
            if (wordBank.includes(evt.target.value)) {
              setHelperText("Correct!");
              setGuessed((guessed) => [...guessed, evt.target.value]);
            } else {
              if (wrongs === 6) {
                setHelperText("You lost!");
              } else if (guessed.includes(evt.target.value)) {
                setHelperText("You already guessed that!");
              } else {
                setGuessed((guessed) => [...guessed, evt.target.value]);
                setHelperText("Wrong!");
                setWrongs((wrongs) => wrongs + 1);
              }
            }
            setInput("");
          }}
        />
        <div>{helperText}</div>
      </div>
      <div>
        <h3>Guessed Letters</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "100px",
            border: "1px solid white",
            flexWrap: "wrap",
          }}
        >
          {guessed.map((letter, i) => {
            return (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "5px",
                }}
              >
                <h5
                  style={{
                    color: "white",
                  }}
                >
                  {letter}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

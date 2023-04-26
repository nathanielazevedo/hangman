import { useState } from "react";
import hangman from "./assets/hangman.svg";
import "./App.css";

function App() {
  const [guessed, setGuessed] = useState([]);
  const [input, setInput] = useState("");
  const [wrongs, setWrongs] = useState(0);
  const word = "hello";

  return (
    <>
      <div
        className="App"
        style={{
          marginBottom: "50px",
        }}
      >
        <h1>Hangman</h1>
      </div>
      <div>
        <img src={hangman} width={200} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {word.split("").map((letter) => {
          return (
            <div
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
            setGuessed((guessed) => [...guessed, evt.target.value]);
            if (word.includes(evt.target.value)) {
              console.log("correct");
            } else {
              console.log("incorrect");
            }
            setInput("");
          }}
        />
      </div>
    </>
  );
}

export default App;

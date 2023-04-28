import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import chalkboard from "./assets/chalkboard.jpeg";

const Challenge = () => {
  const [text, setText] = useState("");
  const [link, setLink] = useState(window.location.href);
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const encrypt = (text) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  };

  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        backgroundImage: `url(${chalkboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Link to="/">
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: "1",
            fontFamily: "Coming Soon, cursive",
            fontSize: "30px",
          }}
        >
          Home
        </Button>
      </Link>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "20px",
          height: "30vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            marginBottom: "30px",
            fontFamily: "Coming Soon, cursive",
          }}
        >
          Send a link to Challenge a Friend
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            sx={{
              color: "black",
              width: "80%",
              fontFamily: "Coming Soon, cursive",
              "& .MuiInputBase-input": {
                fontFamily: "Coming Soon, cursive",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "Coming Soon, cursive",
              },
            }}
            label="Custom Word"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setLink(`${url}/${encrypt(e.target.value)}`);
            }}
          >
            Word
          </TextField>
          <Button
            variant="contained"
            color={copied ? "success" : "primary"}
            sx={{
              height: "50px",
              fontFamily: "Coming Soon, cursive",
              fontSize: "20px",
            }}
            onClick={() => {
              if (copied) return;
              if (!navigator.clipboard) return;
              if (!link) return;
              if (!text.length) return;
              setCopied(true), navigator.clipboard.writeText(link);
            }}
          >
            {copied ? <CheckIcon /> : "Copy"}
          </Button>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "black",
            marginTop: "20px",
            fontStyle: "italic",
            fontFamily: "Coming Soon, cursive",
          }}
        >
          {link}
        </Typography>
      </Box>
    </Box>
  );
};

export default Challenge;

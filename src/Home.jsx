import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlayDialog from "./PlayDialog";
import chalkboard from "./assets/chalkboard.jpeg";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {
  const warmUpRef = useRef(null);
  const [playDialogOpen, setPlayDialogOpen] = useState(false);

  useEffect(() => {
    if (warmUpRef.current) return;
    else {
      fetch("https://hangman-back.onrender.com/leaderboard").then((res) => {
        if (res.status === 200) {
          console.log("warmed up");
          warmUpRef.current = true;
        } else {
          console.log("warm up failed");
        }
      });
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${chalkboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "white",
          padding: { xs: "70px 25px", sm: "50px", md: "50px", lg: "50px" },
          borderRadius: "10px",
          width: { xs: "90%", sm: "500px", md: "500px", lg: "500px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: "30px",
            color: "black",
            fontFamily: "Coming Soon, cursive",
          }}
        >
          Hangman
        </Typography>
        <Button
          variant="contained"
          onClick={() => setPlayDialogOpen(true)}
          fullWidth
          sx={{
            width: "100%",
            height: "50px",
            fontFamily: "Coming Soon, cursive",
            fontSize: "20px",
          }}
        >
          Play
        </Button>
        <PlayDialog open={playDialogOpen} setOpen={setPlayDialogOpen} />
        <Link to="/challenge">
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: "100%",
              height: "50px",
              fontFamily: "Coming Soon, cursive",
              fontSize: "20px",
            }}
          >
            Challenge a Friend
          </Button>
        </Link>
        <Link to="/leaderboard">
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: "100%",
              height: "50px",
              fontFamily: "Coming Soon, cursive",
              fontSize: "20px",
            }}
          >
            Leaderboard
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;

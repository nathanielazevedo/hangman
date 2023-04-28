import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlayDialog from "./PlayDialog";
import chalkboard from "./assets/chalkboard.jpeg";

const Home = () => {
  const [playDialogOpen, setPlayDialogOpen] = useState(false);
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "white",
          padding: "70px",
          borderRadius: "10px",
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

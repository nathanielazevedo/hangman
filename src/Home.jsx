import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlayDialog from "./PlayDialog";

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: "50px",
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

import { Dialog, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LostDialog = ({ open, resetGame, score }) => {
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
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Coming Soon, cursive",
            }}
          >
            Great Job!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Coming Soon, cursive",
            }}
          >
            Your Score: {score}
          </Typography>
        </Box>

        <Box>
          <Button
            variant="contained"
            onClick={resetGame}
            sx={{
              height: "50px",
              width: "100%",
              marginBottom: "20px",
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
              Checkout out our homepage!
            </Button>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LostDialog;

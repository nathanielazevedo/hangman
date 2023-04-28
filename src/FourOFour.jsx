import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function FourOFour() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "100px",
            fontFamily: "Coming Soon, cursive",
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: "Coming Soon, cursive",
          }}
        >
          You are Lost
        </Typography>
        <Link to="/">
          <Button
            variant="contained"
            sx={{
              fontFamily: "Coming Soon, cursive",
              fontSize: "20px",
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default FourOFour;

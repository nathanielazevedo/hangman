import { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import chalkboard from "./assets/chalkboard.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    toast.info("Loading Leaderboard, free servers are slow :)");
    const fetchLeaderboard = async () => {
      fetch("https://hangman-back.onrender.com/leaderboard").then(
        async (res) => {
          if (res.status === 200) {
            toast.success("Leaderboard Loaded!");
            const data = await res.json();
            setLeaderboard(data);
          } else {
            toast.error("Leaderboard Failed to Load :(");
          }
        }
      );
    };
    fetchLeaderboard();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${chalkboard})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Link
        to="/"
        sx={{
          position: "absolute",
          top: "30px",
          left: "30px",
          zIndex: "1",
        }}
      >
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
      <ToastContainer position="bottom-right" theme="dark" />
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          fontFamily: "Coming Soon, cursive",
          fontSize: "30px",
          // maxHeight: "80vh",
          overflowY: "scroll",
          width: { xs: "100vw", sm: "100vw", md: "90vw", lg: "50vw" },
          // height: "80vh",
          marginTop: "15vh",
          marginBottom: "10vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "40px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: "5vh",
            fontFamily: "Coming Soon, cursive",
            fontSize: "50px",
            alignSelf: "flex-start",
          }}
        >
          Leaderboard
        </Typography>
        <table
          style={{
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Coming Soon, cursive",
                    fontSize: { xs: "25px", sm: "35px" },
                  }}
                >
                  Rank
                </Typography>
              </th>
              <th style={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Coming Soon, cursive",
                    fontSize: { xs: "25px", sm: "35px" },
                  }}
                >
                  Name
                </Typography>
              </th>
              <th style={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Coming Soon, cursive",
                    fontSize: { xs: "25px", sm: "35px" },
                  }}
                >
                  Score
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    index < 3
                      ? "rgba(50,250,20,0.7)"
                      : index % 2 === 0
                      ? "rgba(0,0,0,0.5)"
                      : "rgba(0,0,0,0.3)",
                }}
              >
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    padding: "15px",
                  }}
                >
                  <Tooltip title={entry.name} placement="top">
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Coming Soon, cursive",
                        fontSize: { xs: "25px", sm: "35px" },
                      }}
                    >
                      {entry.name.slice(0, 10)}
                    </Typography>
                  </Tooltip>
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {entry.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Leaderboard;

import { Dialog, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { categories } from "./wordBank";

const difficulties = ["Easy", "Medium", "Hard"];

// eslint-disable-next-line react/prop-types
const PlayDialog = ({ open, setOpen }) => {
  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <Box
        sx={{
          height: "40vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Typography variant="h3">Game Setup</Typography>
        <Box sx={{ minWidth: 120, width: "100%" }}>
          <FormControl
            fullWidth
            sx={{
              width: "100%",
            }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                marginBottom: "20px",
                width: "100%",
              }}
              value={category}
              fullWidth
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={difficulty}
              label="Difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            >
              {difficulties.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Link
          to={
            !category || !difficulty ? "#" : `/play/${difficulty}/${category}`
          }
          style={{ width: "100%" }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "50px",
              width: "100%",
            }}
            disabled={!category || !difficulty}
          >
            Play
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};

export default PlayDialog;

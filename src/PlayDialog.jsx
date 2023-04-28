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

// eslint-disable-next-line react/prop-types
const PlayDialog = ({ open, setOpen }) => {
  const [category, setCategory] = React.useState("");

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
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Coming Soon, cursive",
            alignSelf: "flex-start",
          }}
        >
          Game Setup
        </Typography>
        <Box sx={{ minWidth: 120, width: "100%" }}>
          <FormControl
            fullWidth
            sx={{
              width: "100%",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                fontFamily: "Coming Soon, cursive",
                fontSize: "20px",
              }}
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                marginBottom: "20px",
                width: "100%",
                fontFamily: "Coming Soon, cursive",
                fontSize: "20px",
              }}
              value={category}
              fullWidth
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  sx={{
                    fontFamily: "Coming Soon, cursive",
                    fontSize: "20px",
                  }}
                >
                  {category == "allWords" ? "All Words" : category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Link
          to={!category ? "#" : `/play/${category}`}
          style={{ width: "100%" }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "50px",
              width: "100%",
              fontFamily: "Coming Soon, cursive",
              fontSize: "20px",
            }}
            disabled={!category}
          >
            Play
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};

export default PlayDialog;

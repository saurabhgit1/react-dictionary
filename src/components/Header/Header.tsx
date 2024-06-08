import React from "react";
import "./Header.css";
import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import category from "../../data/category";

function Header({ word, setWord, lang, setLang, lightMode }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });
  const handleSelectChange = (value) => {
    setLang(value);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="search"
            className="search"
            label="Search a word"
            variant="standard"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            className="select"
            label="Select"
            defaultValue="en"
            value={lang}
            onChange={(e) => {
              handleSelectChange(e.target.value);
            }}
          >
            {category.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;

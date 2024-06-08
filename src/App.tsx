import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container } from "@mui/material";
import Header from "./components/Header/Header.tsx";
function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const getDictionaryResp = async (word: string) => {
    const data = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );
    console.log("dddd", data);
  };

  useEffect(() => {
    getDictionaryResp("plane");
  }, []);

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header/>
      </Container>
    </div>
  );
}

export default App;

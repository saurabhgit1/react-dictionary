import React from "react";
import "./Definition.css";

function Definition({ word, lang, meaning, lightMode }) {
  return (
    <div className="meanings">
      {meaning[0] && word && lang == "en" && (
        <div>
          <audio
            src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              zIndex: "100",
            }}
            controls
          ></audio>
          {/* <span>
            {meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          </span> */}
        </div>
      )}
      {word && meaning ? (
        meaning?.map((mean) => {
          console.log("mena", mean);
          return mean?.meanings?.map((item) => {
            console.log("def", item);
            return item.definitions.map((def) => {
              return (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: lightMode ? "#3b5360" : "white",
                    color: lightMode ? "white" : "black",
                  }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Example: </b> {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms: </b> {def.synonyms.map((syn) => syn)}
                    </span>
                  )}
                </div>
              );
            });
          });
        })
      ) : (
        <span className="subtitle">Start by typing in search</span>
      )}
    </div>
  );
}

export default Definition;

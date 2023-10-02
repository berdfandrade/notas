import React, { useState } from "react";
import Fountain from "fountain-js";

function FountainEditor() {
  const [fountainText, setFountainText] = useState("");

  const handleFountainChange = (event) => {
    setFountainText(event.target.value);
  };

  const renderFountain = () => {
    const fountainParser = new Fountain();
    const html = fountainParser.toHtml(fountainText);
    return { __html: html };
  };
  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={fountainText}
        onChange={handleFountainChange}
      />
      <div>
        <h2>Roteiro Renderizado:</h2>
        <div dangerouslySetInnerHTML={renderFountain()} />
      </div>
    </div>
  );
}

export default FountainEditor
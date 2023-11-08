// Image.js
import React from "react";

function Image ({image}) {
  return (
  <img src={image} alt="Product" style={{ Width: "800px" }}/>
  );
};

export default Image;
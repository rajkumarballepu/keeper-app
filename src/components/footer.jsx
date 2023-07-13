import React from "react";
var year = new Date().getFullYear();
let footer = () => {
  return (
    <footer>
      <p>Created by Raj Kumar Ballepu &copy; {year}</p>
    </footer>
  );
};

export default footer;

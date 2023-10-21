import React from "react";

const Left = () => {
  const cardStyles = {
    position: "fixed",
    top: "54%", // Position in the middle vertically
    right: "50px", // Adjust the right position as needed
    transform: "translate(0, -50%)", // Center vertically    // Adjust the left position as needed
    width: "450px",
    height: "500px",
    backgroundColor: "#B2533E",
    boxShadow: "100px 50px 6px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "15% 30% 15% 40% ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  const styleh = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "50px",
    fontFamily: 'Amatic SC, cursive',

  };
  const styled = {
    position: "fixed",
    bottom: "0",
    left: " 1",
    width: "100%",
    textAlign: "center",
    padding:"10px",
    color:"#3E001F",
  };

  return (
    <div style={cardStyles}>
      <div style={styled}>
        <h1 style={styleh}>GrievEase</h1>
      </div>
    </div>
  );
};
export default Left;

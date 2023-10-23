import React from "react";
import { Link } from "react-router-dom";
const Right = () => {
  const cardStyles = {
    position: "fixed",
    top: "48%",
    left: "5em",
    transform: "translate(0, -50%)",
    width: "700px",
    height: "500px",
    backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white background
    // Box shadow for a subtle effect
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const headingStyles = {
    fontSize: "55px", // Adjust the font size as needed
    fontFamily: "Oswald, sans-serif",
    padding: "0",
    margin: "2px 0",
  };
  const span1 = {
    color: "#3E001F",
  };
  const span2 = {
    color: "#6C3428",
  };
  const pstyle = {
    color: "#3D0C11",
    fontSize: "25px",
    margin: "12px 0",
  };
  const buttonStyles = {
    backgroundColor: "rgba(243,130,66,255)",
    color: "#6C3428",
    border: "none",
    borderRadius: "30px", // Add border radius
    padding: "10px ",
    cursor: "pointer",
    position: "absolute",
    bottom: "42px", // Moved to the bottom
    left: "20px",
    fontSize: "20px",
    width: "200px",
  };
  buttonStyles[":hover"] = {
    backgroundColor: "darkblue",
  };
  const arrowStyles = {
    fontSize: "30px", // Adjust the size of the arrow as needed
    // marginLeft: '10px',
    // position: 'absolute',
    // color: '#6C3428',
    // bottom: '3px', // Moved to the bottom
    // left: '230px', // Add some spacing between the arrow and button text
  };
  const handleButtonClick = () => {
    // Define the function to be executed when the button is clicked
    console.log("works!!"); // Replace this with your desired action
  };
  return (
    <div style={cardStyles}>
      <h1 style={headingStyles}>
        <span style={span1}>Grievances</span>{" "}
        <span style={span2}>becomes solutions </span>
        <span style={span1}>here</span>
      </h1>
      <p style={pstyle}>
      Elevate your community experience with GrievEase, where your concerns are heard,
       and solutions are crafted collaboratively. Join us in building a smarter, 
       more connected neighborhood. Sign up now, because positive change begins with you!{" "}
      </p>
      <span>
        <Link to="/signin">
          <button style={buttonStyles} onClick={handleButtonClick}>
            Get Started<span style={arrowStyles}>&rarr;</span>
          </button>
        </Link>
      </span>
    </div>
  );
};

export default Right;

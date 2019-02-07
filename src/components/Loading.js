import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div style={{transform: 'translateX(-20px)'}}>
      <img
        src={spinner}
        alt="Loading.."
        style={{
          width: "200px",
          margin: "40px auto",
          display: "block",
          borderRadius: "50%",
          boxShadow: "-2px 2px 35px 0px rgba(0,82,136,.8)"
        }}
      />
    </div>
  );
};

export default Spinner;

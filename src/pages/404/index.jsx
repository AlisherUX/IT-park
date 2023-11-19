import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        fontSize: "40px",
      }}
    >
      404
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button style={{ border: "1px solid #000", padding: "10px" }}>
          Bosh sahifaga qaytish
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;

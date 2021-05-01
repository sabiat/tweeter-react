import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <span>tweeter</span>
      <div className="nav-links">
        <p>
          <strong>Write</strong> a new tweet
        </p>
        <button className="compose" type="button">
          <i className="fas fa-angle-double-down"></i>
        </button>
      </div>
    </nav>
  );
};

import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <span>tweeter</span>
      <div class="nav-links">
        <p>
          <strong>Write</strong> a new tweet
        </p>
        <button class="compose" type="button">
          <i class="fas fa-angle-double-down"></i>
        </button>
      </div>
    </nav>
  );
};

import React from "react";
import "./Tweet.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <article class="tweet">
      <header>
        <div class="left-side">
          <img src={profile_image} alt="usericon" />
          <span>{name}</span>
        </div>
        <p class="hidden-username">{handle}</p>
      </header>
      <div class="tweet-feed">{text}</div>
      <footer>
        <p>{props.date}</p>
        <div class="icons">
          <i class="fas fa-flag" aria-hidden="true"></i>
          <i class="fas fa-retweet" aria-hidden="true"></i>
          <i class="far fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  );
};

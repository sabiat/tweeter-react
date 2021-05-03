import React from "react";
import "./Tweet.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <>
      {name && handle && text && profile_image && date && (
        <article className="tweet">
          <header>
            <div className="left-side">
              <img src={profile_image} alt="usericon" />
              <span>{name}</span>
            </div>
            <p className="hidden-username">{handle}</p>
          </header>
          <div className="tweet-feed">{text}</div>
          <footer>
            <p>{props.date}</p>
            <div className="icons">
              <i className="fas fa-flag" aria-hidden="true"></i>
              <i className="fas fa-retweet" aria-hidden="true"></i>
              <i className="far fa-heart" aria-hidden="true"></i>
            </div>
          </footer>
        </article>
      )}
    </>
  );
};

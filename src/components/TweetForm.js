import React, { useState } from "react";
import "./TweetForm.css";

export const TweetForm = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? "black" : "red" };

  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  };

  return (
    <section className="new-tweet">
      <div className="error">
        <span id="error-text"></span>
      </div>
      <form method="POST" action="/tweets/" onSubmit={submitTweet}>
        <label for="tweet-text">What are you humming about?</label>
        <textarea
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
          name="text"
          id="tweet-text"
        ></textarea>
        <div className="button-counter">
          <button type="submit">Tweet</button>
          <output
            style={spanStyle}
            name="counter"
            className="counter"
            for="tweet-text"
          >
            {tweetRemainingLength}
          </output>
        </div>
      </form>
    </section>
  );
};

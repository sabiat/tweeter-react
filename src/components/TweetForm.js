import React from "react";
import "./TweetForm.css";

export const TweetForm = () => {
  return (
    <section class="new-tweet">
      <div class="error">
        <span id="error-text"></span>
      </div>
      <form method="POST" action="/tweets/">
        <label for="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text"></textarea>
        <div class="button-counter">
          <button type="submit">Tweet</button>
          <output name="counter" class="counter" for="tweet-text">
            140
          </output>
        </div>
      </form>
    </section>
  );
};

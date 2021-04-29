import React from "react";

export const Tweet = () => {
  return (
    <article class="tweet">
      <header>
        <div class="left-side">
          <img src="https://i.imgur.com/nlhLi3I.png" alt="usericon" />
          <span>Descartes</span>
        </div>
        <p class="hidden-username">@rd</p>
      </header>
      <div class="tweet-feed">Je pense , donc je suis</div>
      <footer>
        <p>a day ago</p>
        <div class="icons">
          <i class="fas fa-flag" aria-hidden="true"></i>
          <i class="fas fa-retweet" aria-hidden="true"></i>
          <i class="far fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  );
};

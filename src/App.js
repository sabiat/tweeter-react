import "./App.css";
import { Navigation } from "./Navigation";

const Profile = () => {
  return (
    <header class="main-header">
      <div>
        <img src="/images/profile-hex.png" />
      </div>
      <br />
      <div>
        <h2>Your Name</h2>
      </div>
    </header>
  );
};

const TweetForm = () => {
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

const Tweet = () => {
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

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;

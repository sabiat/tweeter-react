import "./App.css";
import { Navigation } from "./components/Navigation";
import { TweetForm } from "./components/TweetForm";
import { Profile } from "./components/Profile";
import { Tweet } from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <section id="all-tweets">
          <Tweet />
          <Tweet />
          <Tweet />
        </section>
      </main>
    </div>
  );
}

export default App;

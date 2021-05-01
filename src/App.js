import "./App.css";
import { Navigation } from "./components/Navigation";
import { TweetForm } from "./components/TweetForm";
import { Profile } from "./components/Profile";
import { Tweet } from "./components/Tweet";

const tweetsData = [
  {
    name: "Sabia",
    handle: "@sabiat",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "hello world",
    date: "10 days ago",
  },
  {
    name: "Bob",
    handle: "@bob",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "hellooooo",
    date: "15 days ago",
  },
];

function App() {
  const tweets = tweetsData.map((tweetData) => {
    return (
      <Tweet
        name={tweetData.name}
        handle={tweetData.handle}
        profile_image={tweetData.profile_image}
        text={tweetData.text}
        date={tweetData.date}
      />
    );
  });
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm />
        <section id="all-tweets">{tweets}</section>
      </main>
    </div>
  );
}

export default App;

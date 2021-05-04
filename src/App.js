import "./App.css";
import { React, useState } from "react";
import { Navigation } from "./components/Navigation";
import { TweetForm } from "./components/TweetForm";
import { Profile } from "./components/Profile";

const initialTweetData = [
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
  const [tweetData, setTweetData] = useState(initialTweetData);

  const addNewTweet = (text) => {
    const newTweet = {
      name: "Bob",
      handle: "@bob",
      profile_image: "https://i.imgur.com/nlhLi3I.png",
      text,
      date: "15 days ago",
    };

    setTweetData([newTweet, ...tweetData]);
  };
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={addNewTweet} />
        <Tweets tweetData={tweetData} />
      </main>
    </div>
  );
}

export default App;

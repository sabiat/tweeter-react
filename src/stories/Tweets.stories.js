import React from "react";
import { Tweets } from "../components/Tweets";

export default { title: "Tweet container" };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
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

  return <Tweets tweetData={tweets} />;
};

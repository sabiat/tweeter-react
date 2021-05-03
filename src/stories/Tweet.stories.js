import React from "react";
import { Tweet } from "../components/Tweet";

export default { title: "Singular tweet" };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {
  const singleTweet = {
    name: "Sabia",
    handle: "@sabiat",
    profile_image: "https://i.imgur.com/nlhLi3I.png",
    text: "hello world",
    date: "10 days ago",
  };

  return <Tweet {...singleTweet} />;
};

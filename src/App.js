import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Conversation from "./components/Conversation";
import "./styles/app.css";

function App() {
  const comments = [
    {
      id: 100001,
      image: "",
      author: "Micheal Lyons",
      date: new Date("12/18/2018"),
      comment:
        "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    {
      id: 100002,
      image: "",
      author: "Gary Wong",
      date: new Date("12/18/2018"),
      comment:
        "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },
    {
      id: 100003,
      image: "",
      author: "Theodore Duncan",
      date: new Date("11/15/2018"),
      comment:
        "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="bottom">
        <Conversation />
      </div>
    </div>
  );
}

export default App;

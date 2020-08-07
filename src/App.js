import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Description from "./components/Description";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import VideoList from "./components/VideoList/VideoList";
import "./styles/app.css";

function App() {
  const videoComments = [
    {
      id: 100001,
      image: "",
      author: "Micheal Lyons",
      date: "12/18/2018",
      text:
        "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    {
      id: 100002,
      image: "",
      author: "Gary Wong",
      date: "12/18/2018",
      text:
        "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    },
    {
      id: 100003,
      image: "",
      author: "Theodore Duncan",
      date: "11/15/2018",
      text:
        "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    },
  ];

  const sidebarVideos = [
    {
      id: 10000001,
      title: "Become A Travel Pro In One Easy Lesson",
      channel: "Todd Welch",
      image: "./images/video-list-1.jpg",
    },
    {
      id: 10000002,
      title: "Les Houches The Hidden Gem Of The Chamonix",
      channel: "Cornelia Blair",
      image: "./images/video-list-2.jpg",
    },
    {
      id: 10000003,
      title: "Travel Health Useful Medical Information For",
      channel: "Glen Harper",
      image: "./images/video-list-3.jpg",
    },
    {
      id: 10000004,
      title: "Cheap Airline Tickets Great Ways To Save",
      channel: "Emily Harper",
      image: "./images/video-list-4.jpg",
    },
    {
      id: 10000005,
      title: "Take A Romantic Break In A Boutique Hotel",
      channel: "Ethan Owen",
      image: "./images/video-list-5.jpg",
    },
    {
      id: 10000006,
      title: "Choose The Perfect Accommodations",
      channel: "Lydia Perez",
      image: "./images/video-list-6.jpg",
    },
    {
      id: 10000007,
      title: "Cruising Destination Ideas",
      channel: "Timothy Austin",
      image: "./images/video-list-7.jpg",
    },
    {
      id: 10000008,
      title: "Train Travel On Track For Safety",
      channel: "Scotty Cranmer",
      image: "./images/video-list-8.jpg",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="bottom">
        <div>
          <Description />
          <CommentsSection comments={videoComments} />
        </div>
        <VideoList videos={sidebarVideos} />
      </div>
    </div>
  );
}

export default App;

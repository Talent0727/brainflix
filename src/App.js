import React, { Component } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import Description from "./components/Description";
import NewComment from "./components/CommentsSection/NewComment";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import VideoList from "./components/VideoList/VideoList";
import { v4 as uuidv4 } from "uuid";
import "./styles/app.css";
import moment from "moment";
moment().format();

class App extends Component {
  state = {
    videos: [
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
    ],
    activeVideo: {
      id: 100001,
      title: "BMX Rampage: 2018 Highlights",
      author: "Red Cow",
      date: new Date("08/09/2020"),
      image: "/images/video-list-0.jpg",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      views: "1,001,023",
      likes: "110,985",
      video:
        "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      comments: [
        {
          id: 100001,
          image: "",
          name: "Micheal Lyons",
          date: new Date("08/09/2020"),
          text:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          id: 100002,
          image: "",
          name: "Gary Wong",
          date: new Date("08/04/2020"),
          text:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          id: 100003,
          image: "",
          name: "Theodore Duncan",
          date: new Date("07/09/2020"),
          text:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        },
      ],
    },
  };

  submitMessage = (event) => {
    event.preventDefault();

    const id = uuidv4();
    const name = "Mohan Muruge";
    const text = event.target.message.value;
    const date = Date.now();
    console.log(event.target.message.value);

    this.setState({
      activeVideo: {
        ...this.state.activeVideo,
        comments: [
          { id, name, text, date },
          ...this.state.activeVideo.comments,
        ],
      },
    });

    // console.log(this.state.activeVideo.comments);
    event.target.reset();
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <VideoPlayer mainVideo={this.state.activeVideo} />
        <div className="bottom">
          <div className="descriptionAndForm">
            <Description mainVideo={this.state.activeVideo} />
            <NewComment submitMessage={this.submitMessage} />
            <CommentsSection comments={this.state.activeVideo.comments} />
          </div>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect, useParams, Switch } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import Description from "./components/Description";
import NewComment from "./components/CommentsSection/NewComment";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import VideoList from "./components/VideoList/VideoList";
import { API_KEY } from "./env/env_variables";
import { v4 as uuidv4 } from "uuid";
import "./styles/app.css";
import moment from "moment";
moment().format();

const BASE_URL = "https://project-2-api.herokuapp.com";
const VIDEO_URL = `${BASE_URL}/videos/?api_key=${API_KEY}`;

class App extends Component {
  state = {
    videos: [],
    videoDetails: {},
    currentID: "",
    error: "",
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.match);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadData();
      window.scrollTo(0, 0);
    }
  }

  loadData = () => {
    axios.get(VIDEO_URL).then(({ data }) => {
      if (!data.length) {
        return;
      }

      const { params } = this.props.match;
      console.log(this.props.match);
      const currentVideoID = params.id || data[0].id;
      const filteredVideos = data.filter(
        (video) => video.id !== currentVideoID
      );
      this.setState(
        {
          videos: filteredVideos,
          currentID: currentVideoID,
        },
        () => this.searchVideoById(currentVideoID)
      );
    });
  };

  searchVideoById = (id) => {
    console.log("id", id);
    axios.get(`${BASE_URL}/videos/${id}?api_key=${API_KEY}`).then((result) => {
      console.log(result);
      this.setState({
        videoDetails: result.data,
      });
    });
  };

  postNewComment = (comment) => {
    axios
      .post(
        `${BASE_URL}/videos/${this.state.currentID}/comments?api_key=${API_KEY}`,
        comment
      )
      .then((result) => {
        console.log(result);
        this.setState({
          videoDetails: {
            ...this.state.videoDetails,
            comments: [...this.state.videoDetails.comments, result.data],
          },
        });
      })
      .catch((error) => console.log(error));
  };

  // POSTS NEW COMMENT
  submitMessage = (event) => {
    event.preventDefault();
    const commentValue = event.target.message.value;
    if (commentValue.trim(" ") === "") {
      this.setState({ error: "You must enter a comment." });
      return;
    }

    this.setState({ error: "" });

    const comment = {
      name: "Mohan Muruge",
      comment: commentValue,
    };
    this.postNewComment(comment);
    event.target.reset();
  };

  render() {
    if (!this.state.videos || !this.state.videoDetails) {
      return <div> loading </div>;
    }

    console.log(this.state.videoDetails);
    return (
      <div className="App">
        <VideoPlayer
          {...this.props}
          mainVideo={this.state.videoDetails}
          searchVideoById={this.searchVideoById}
        />
        <div className="bottom">
          <div className="descriptionAndForm">
            <Description mainVideo={this.state.videoDetails} />
            <NewComment
              error={this.state.error}
              submitMessage={this.submitMessage}
            />
            <CommentsSection comments={this.state.videoDetails.comments} />
          </div>
          <VideoList {...this.props} videos={this.state.videos} />
        </div>
        >
      </div>
    );
  }
}

export default App;

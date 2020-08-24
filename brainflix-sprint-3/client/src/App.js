import React, { Component } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import Description from "./components/Description";
import NewComment from "./components/CommentsSection/NewComment";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import VideoList from "./components/VideoList/VideoList";
// import { API_KEY } from "./env/env_variables";
import "./styles/app.css";
import moment from "moment";
moment().format();

const BASE_URL = "http://localhost:5000";
const VIDEO_URL = `${BASE_URL}/videos`;

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
    // console.log("component did update", this.props.match);
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

      // console.log(data);

      const { params } = this.props.match;
      // console.log(this.props.match);
      const currentVideoID = params.id || data[0].id;
      // console.log(currentVideoID);
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
    // console.log("id", id);
    axios.get(`${BASE_URL}/videos/${id}`).then((result) => {
      // console.log("search video by id", result.data);
      this.setState({
        videoDetails: result.data,
      });
    });
  };

  postNewComment = (comment) => {
    axios
      .post(`${BASE_URL}/videos/${this.state.currentID}/comments`, comment)
      .then((result) => {
        // console.log("post new comment", result);
        this.setState({
          videoDetails: {
            ...this.state.videoDetails,
            comments: [result.data, ...this.state.videoDetails.comments],
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

    // console.log(this.state.videoDetails);
    return (
      <div className="App">
        <VideoPlayer
          {...this.props}
          mainVideo={this.state.videoDetails}
          searchVideoById={this.searchVideoById}
        />
        <div className="bottom">
          <div className="bottom__descriptionForm">
            <Description mainVideo={this.state.videoDetails} />
            <NewComment
              error={this.state.error}
              submitMessage={this.submitMessage}
            />
            <CommentsSection comments={this.state.videoDetails.comments} />
          </div>
          <VideoList {...this.props} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;

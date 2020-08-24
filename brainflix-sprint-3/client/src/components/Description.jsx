import React, { Component } from "react";
import IconViews from "../assets/icons/SVG/Icon-views.svg";
import IconLikes from "../assets/icons/SVG/Icon-likes.svg";
import moment from "moment";
import axios from "axios";

moment().format();

const BASE_URL = "http://localhost:5000";
const VIDEO_URL = `${BASE_URL}/videos`;

class Description extends Component {
  state = {
    likes: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);
    if (prevProps.mainVideo !== this.props.mainVideo) {
      this.setState({
        likes: this.props.mainVideo.likes,
      });
    }
  }

  likeVideo = () => {
    const videoId = this.props.mainVideo.id;

    axios
      .put(`${VIDEO_URL}/${videoId}/likes`)
      .then((result) => {
        this.setState({
          likes: result.data.likes_count,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.props.mainVideo.title) {
      return <div />;
    }

    const unixDate = new Date(this.props.mainVideo.timestamp);
    const formattedTime = moment(unixDate).fromNow();
    // console.log("formattedTime", formattedTime);

    const {
      title,
      channel,
      views,
      description,
      comments,
    } = this.props.mainVideo;

    return (
      <div className="description">
        <h1 className="description__title">{title}</h1>
        <div className="description__subtitle">
          <div className="description__subtitle-topRow">
            <h3 className="description__subtitle-channel">By {channel}</h3>
            <p className="description__subtitle-date">{formattedTime}</p>
          </div>
          <div className="description__subtitle-bottomRow">
            <img
              className="description__subtitle-icon"
              src={IconViews}
              alt=""
            />
            <p className="description__subtitle-numbers">{views}</p>
            <span onClick={this.likeVideo}>
              <img
                className="description__subtitle-icon"
                src={IconLikes}
                alt=""
              />
            </span>
            <p className="description__subtitle-numbers">{this.state.likes}</p>
          </div>
        </div>
        <p className="description__text">{description}</p>
        <h4 className="description__number-comments">
          {comments.length === 1 ? "1 Comment" : `${comments.length} Comments`}
        </h4>
      </div>
    );
  }
}

export default Description;

import React, { Component } from "react";
import UploadVideoPreview from "../assets/images/Upload-video-preview.jpg";
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const VIDEO_URL = `${BASE_URL}/videos`;

class VideoUpload extends Component {
  uploadNewVideo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    if (title.trim(" ") === "" && description.trim(" ") === "") {
      return;
    }

    axios
      .post(VIDEO_URL, { title, description })
      .then((result) => {
        const id = result.data.id;
        this.props.history.push(`/videos/${id}`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="videoUpload">
        <h1 className="videoUpload__title">Upload Video</h1>
        <div className="videoUpload__main-container">
          <div className="videoUpload__image-container">
            <h5 className="videoUpload__image-label">VIDEO THUMBNAIL</h5>
            <img
              className="videoUpload__image"
              src={UploadVideoPreview}
              alt="thumbnail"
            />
          </div>
          <form className="videoUpload__form" onSubmit={this.uploadNewVideo}>
            <label className="videoUpload__title-label">TITLE YOUR VIDEO</label>
            <input
              className="videoUpload__title-input"
              name="title"
              placeholder="Add a title to your video"
            ></input>
            <label className="videoUpload__description-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="videoUpload__description-input"
              name="description"
              placeholder="Add a description of your video"
              cols="30"
              rows="10"
            ></textarea>
            <div className="videoUpload__buttons">
              <button className="videoUpload__btn-cancel">CANCEL</button>

              <button className="videoUpload__btn-publish" type="submit">
                PUBLISH
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default VideoUpload;

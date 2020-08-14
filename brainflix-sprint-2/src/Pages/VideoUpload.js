import React from "react";
import UploadVideoPreview from "../assets/images/Upload-video-preview.jpg";

const VideoUpload = () => {
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
        <form className="videoUpload__form">
          <label className="videoUpload__title-label">TITLE YOUR VIDEO</label>
          <input
            className="videoUpload__title-input"
            name="message"
            placeholder="Add a title to your video"
          ></input>
          <label className="videoUpload__description-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="videoUpload__description-input"
            name="message"
            placeholder="Add a description of your video"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
      <div className="videoUpload__buttons">
        <button className="videoUpload__btn-cancel" type="submit">
          CANCEL
        </button>
        <button className="videoUpload__btn-publish" type="submit">
          PUBLISH
        </button>
      </div>
    </div>
  );
};

export default VideoUpload;

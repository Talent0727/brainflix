import React from "react";
import { Link } from "react-router-dom";

import VideoItem from "./VideoItem";

export default function VideoList({ videos, match }) {
  const videoSection = videos.map((video) => (
    <Link to={`/videos/${video.id}`} key={video.id}>
      <VideoItem videoData={video} />
    </Link>
  ));

  return (
    <ul className="videos">
      <p className="videos__title">NEXT VIDEO</p>
      {videoSection}
    </ul>
  );
}

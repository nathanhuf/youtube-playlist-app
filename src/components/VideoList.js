import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, addToPlaylist }) {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} addToPlaylist={addToPlaylist} />
      ))}
    </div>
  );
}

export default VideoList;

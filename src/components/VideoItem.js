import React from "react";

function VideoItem({ video, addToPlaylist }) {
  return (
    <div>
      <img src={video.thumbnail_url} alt={video.title} />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <p>{video.views}</p>
      <button onClick={() => addToPlaylist(video)}>Add to Playlist</button>
    </div>
  );
}

export default VideoItem;

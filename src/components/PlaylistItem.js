import React from "react";

function PlaylistItem({ video, removeFromPlaylist }) {
  return (
    <div>
      <img src={video.thumbnail_url} alt={video.title} />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <p>{video.views}</p>
      <button onClick={() => removeFromPlaylist(video)}>
        Remove from Playlist
      </button>
    </div>
  );
}

export default PlaylistItem;

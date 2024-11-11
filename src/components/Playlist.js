import React from "react";
import PlaylistItem from "./PlaylistItem";

function Playlist({ playlist, removeFromPlaylist }) {
  return (
    <div>
      <h1>------------------</h1>
      <h1>This is Playlist</h1>
      <h1>------------------</h1>
      {playlist.map((video) => (
        <PlaylistItem
          key={video.id}
          video={video}
          removeFromPlaylist={removeFromPlaylist}
        />
      ))}
    </div>
  );
}

export default Playlist;

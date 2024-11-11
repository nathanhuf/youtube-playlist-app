import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import VideoList from "./components/VideoList";
import Playlist from "./components/Playlist";

function App() {
  const [videos, setVideos] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`/videos?page=${page}`)
      .then((response) => {
        setVideos(response.data.videos);
      })
      .catch((error) => console.error(error));
  }, [page]);

  const addToPlaylist = (video) => {
    setPlaylist([...playlist, video]);
  };

  const removeFromPlaylist = (video) => {
    setPlaylist(playlist.filter((v) => v.id !== video.id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const [removed] = playlist.splice(result.source.index, 1);
    playlist.splice(result.destination.index, 0, removed);
    setPlaylist([...playlist]);
  };

  const filterVideos = () => {
    return videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => changePage(page - 1)}>Previous Page</button>
      <button onClick={() => changePage(page + 1)}>Next Page</button>
      <VideoList videos={filterVideos()} addToPlaylist={addToPlaylist} />
      <Droppable droppableId="playlist">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Playlist
              playlist={playlist}
              removeFromPlaylist={removeFromPlaylist}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;

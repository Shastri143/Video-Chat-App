import React from "react";
import "./App.css";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";

function App() {
  return (
    <div className="app">
      <h1>Video Chat</h1>

      <VideoPlayer />

      <Options />
    </div>
  );
}

export default App;
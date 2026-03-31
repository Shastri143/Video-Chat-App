import React, { useContext } from "react";
import { SocketContext } from "./SocketContext";

function VideoPlayer() {
  const { myVideo, userVideo, callAccepted, callEnded } =
    useContext(SocketContext);

  return (
    <div className="video-container">

      <div className="video-box">
        <h3>My Video</h3>
        <video playsInline muted ref={myVideo} autoPlay />
      </div>

      {callAccepted && !callEnded && (
        <div className="video-box">
          <h3>User Video</h3>
          <video playsInline ref={userVideo} autoPlay />
        </div>
      )}

    </div>
  );
}

export default VideoPlayer;
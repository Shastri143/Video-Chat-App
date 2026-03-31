import React, { useState, useContext } from "react";
import { SocketContext } from "./SocketContext";

function Options() {
  const {
    me,
    call,
    callAccepted,
    leaveCall,
    callUser,
    answerCall,
    name,
    setName,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="controls">

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="my-id">
        <p>Your ID</p>
        <p>{me}</p>
      </div>

      <input
        placeholder="ID to call"
        value={idToCall}
        onChange={(e) => setIdToCall(e.target.value)}
      />

      {callAccepted ? (
        <button className="endCall" onClick={leaveCall}>
          End Call
        </button>
      ) : (
        <button onClick={() => callUser(idToCall)}>Call</button>
      )}

      {call.isReceivingCall && !callAccepted && (
        <div className="incoming">
          <h3>{call.name || "Someone"} is calling...</h3>
          <button onClick={answerCall}>Accept</button>
        </div>
      )}
    </div>
  );
}

export default Options;
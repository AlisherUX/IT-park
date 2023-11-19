import { useState, useEffect } from "react";
import {
  CirclePauseIcon,
  CirclePlayIcon,
  FullScreen,
  MiniPauseIcon,
  MiniPlayIcon,
} from "@/assets/icons";

const VideoPlayer = ({ tabs, activeTab, videoRef, handleToggle, toggle }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [controls, setControls] = useState("0");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const videoCon = videoRef.current;

    const timeUpdateHandler = () => {
      setCurrentTime(videoCon.currentTime);
    };

    const loadedMetaDataHandler = () => {
      setDuration(videoCon.duration);
    };

    videoCon.addEventListener("timeupdate", timeUpdateHandler);
    videoCon.addEventListener("loadedmetadata", loadedMetaDataHandler);
  }, []);

  const toggleFullScreen = () => {
    const element = document.getElementById("video");
    const isFullScreen = document.fullscreenElement;
    if (!isFullScreen) {
      element.requestFullscreen();
    }
  };

  function convertTime(sec) {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;

    min.toString().length == 1 ? (min = "0" + min) : void 0;
    sec.toString().length == 1 ? (sec = "0" + sec) : void 0;

    return hours + ":" + min + ":" + sec;
  }

  return (
    <div
      className="video-container"
      onMouseEnter={() => setControls("10")}
      onMouseLeave={() => setControls("0")}
    >
      <video
        id="video"
        className="video-player"
        src={tabs[activeTab].content}
        ref={videoRef}
        style={{ width: "1008px" }}
      ></video>
      <div className="controls" style={{ opacity: `${controls}` }}>
        <div className="control-button" onClick={handleToggle}>
          {toggle ? <CirclePauseIcon /> : <CirclePlayIcon />}
        </div>
      </div>
      <div
        className="progress-bar-container"
        style={{ opacity: `${controls}` }}
      >
        <div className="time-indicators">
          <div>
            <div onClick={handleToggle}>
              {toggle ? <MiniPauseIcon /> : <MiniPlayIcon />}
            </div>
            <div className="time">
              <span className="current-time">
                {convertTime(Math.round(currentTime.toFixed(2)))}
              </span>
              <p className="time-slash">/</p>
              <span className="duration">
                {convertTime(Math.round(duration.toFixed(2)))}
              </span>
            </div>
          </div>

          <button onClick={toggleFullScreen} className="other-settings">
            <FullScreen />
          </button>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

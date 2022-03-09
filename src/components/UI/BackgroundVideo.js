import React from "react";
import Video from "../../Media/BackgroundVideo.mp4";
import styled from "styled-components";

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <video autostart="true" autoPlay src={Video} type="video/mp4" muted />
    </VideoContainer>
  );
};

export default BackgroundVideo;

const VideoContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: black;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease 0s;
  background-size: cover;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

import React from 'react';
import { Player, ControlBar, CurrentTimeDisplay, TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import poster from '../images/poster.png';
import video from '../videos/ft.mp4';
import './video.css';


const Video = () =>
(
  <div className="jumbotron">
      <h3 className="header">
          CHECK OUT THIS MONTH'S FOOD TRUCK NEWS
      </h3>
    <Player poster={poster}>
      <source src={video} />
      <BigPlayButton position="center" />
      <ControlBar>
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <VolumeMenuButton />
      </ControlBar>
    </Player>
  </div>
)
export default Video;
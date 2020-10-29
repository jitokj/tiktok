import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';


const Video = ({url,likes,shares,description,channel,songName,messages}) => {
    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video ref={videoRef}
            onClick={handleVideoPress}
            height="550px"
            className="video_player" loop
               src={url} alt="video"></video>
         <VideoFooter channel={channel} description={description} song={songName}  />
        <VideoSideBar likes={likes} shares={shares} messages={messages} />
            
        </div>
    );
};

export default Video;
import React, { useRef, useState } from 'react';
import "./Video.css";
import vid from "./video/video.MP4";

const Video = () => {
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
            className="video_player" loop
               src={vid} alt="video"></video>
            
        </div>
    );
};

export default Video;
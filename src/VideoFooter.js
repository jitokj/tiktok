import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@jito</h3>
                <p>some description</p>
                <div className="videoFooter__ticker">
                   <MusicNoteIcon className="videoFooter__icon" />
                   <Ticker mode="smooth">
                       {({index})=>(
                           <>
                           <p>Song Content</p>
                           </>
                       )}
                       </Ticker>  
                </div>
            </div>
            <img src = "https://static.thenounproject.com/png/934821-200.png"
             className="videoFooter__record" alt="footer record"/>
        </div>
    );
};

export default VideoFooter;
import './App.css';
import Video from "./Video";

import vid from "./video/video1.mp4";
import vid1 from "./video/video2.mp4";


function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video url={vid} channel={'@jito'}
       likes={"99"} shares={"24"}
        messages={"39"} songName={"title__track"}
         description={"A Beutiful cliff"} />
      {/* <Video /> */}
      <Video url={vid1} channel={"@ssj"} 
      likes={"46"} shares={"33"} 
      messages={"43"} 
      songName={"Don't let me go"} 
      description={"An awsome nature"}/>
     
      </div>
    
    </div>
  );
}

export default App;

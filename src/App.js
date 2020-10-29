import './App.css';
import Video from "./Video";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video />
    
      <VideoFooter />
      <VideoSideBar />
      </div>
    
    </div>
  );
}

export default App;

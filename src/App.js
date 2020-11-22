import React, { useState, useRef} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './data';
import Library from './components/Library'
import Nav from './components/Nav'

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo, 
      currentTime: current, 
      duration: duration,
      animationPercentage: percentage,
    })
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
      songs={songs}
      setSongs={setSongs}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} >
      </audio>
    </div>
  );
}

export default App;

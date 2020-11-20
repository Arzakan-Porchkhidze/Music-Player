import React, { useState, useRef} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './util';
import Library from './components/Library'

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })
  //handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}/>
      <Library setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} >
      </audio>
    </div>
  );
}

export default App;

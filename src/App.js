import React,  {useState, useRef} from 'react';
import './style/app.scss';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './data';


function App() {
  const audioRef = useRef(null)
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0, animationPercentage: 0})
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const animationPercentage = Math.round((roundCurrent / roundDuration) * 100)
    console.log(animationPercentage)
    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage});
}
  return (
    <div className="App">
      <Nav setLibraryStatus = {setLibraryStatus} libraryStatus = {libraryStatus} />
      <Song currentSong = {currentSong}/>
      <Player 
        audioRef = {audioRef}
        isPlaying = {isPlaying} 
        setIsPlaying = {setIsPlaying}
        currentSong = {currentSong}
        setSongInfo = {setSongInfo}
        songInfo = {songInfo}
        songs = {songs}
        setSongs = {setSongs}
        setCurrentSong = {setCurrentSong}
      />
      <Library 
        libraryStatus = {libraryStatus}
        audioRef = {audioRef} 
        isPlaying = {isPlaying}
        setCurrentSong = {setCurrentSong} 
        songs = {songs}
        setSongs = {setSongs}
      />
      <audio 
                onTimeUpdate = {timeUpdateHandler} 
                onLoadedMetadata = {timeUpdateHandler}
                ref = {audioRef} 
                src = {currentSong.audio}
            />
    </div>
  );
}

export default App;

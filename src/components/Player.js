import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({
    audioRef, 
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    songInfo, 
    setSongInfo, 
    songs, 
    setCurrentSong,
    setSongs
}) => {

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id){
                return{
                    ...song,
                    active: true
                }
            }else{
                return{
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongs)
    }
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }        
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => (song.id === currentSong.id))

        if(direction === 'skip-forward'){
           await setCurrentSong(songs[(currentIndex + 1) % songs.length])
           activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back'){
            if(currentIndex === 0){
              await  setCurrentSong(songs[songs.length-1])
              activeLibraryHandler(songs[songs.length-1])
              if(isPlaying) audioRef.current.play();
                return                
            }
           await setCurrentSong(songs[(currentIndex - 1) % songs.length])
           activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play();
    }
    
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return(
        <div className = "player">
             <div className = "time-control">
                <p>{songInfo.duration? getTime(songInfo.currentTime) : "0:00"}</p>
                <div style = {{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className = "track">
                    <input 
                        type = "range" 
                        min = {0}
                        max = {songInfo.duration || 0}
                        value = {songInfo.currentTime} 
                        onChange = {dragHandler}
                    />
                    <div style = {trackAnim} className = "animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
             </div>
            <div className = "play-control">
                <FontAwesomeIcon 
                    className = "skip-back" 
                    onClick = {() => {skipTrackHandler('skip-back')}}
                    size = "2x"  
                    icon = {faAngleLeft} 
                />
                <FontAwesomeIcon 
                    onClick = {playSongHandler} 
                    className = "play" 
                    size = "2x"  
                    icon = {isPlaying ? faPause : faPlay} 
                />
                <FontAwesomeIcon 
                    className = "skip-forward"
                    onClick = {() => {skipTrackHandler('skip-forward')}} 
                    size = "2x"  
                    icon = {faAngleRight} 
                />
            </div>
            
        </div>
    )
}

export default Player;
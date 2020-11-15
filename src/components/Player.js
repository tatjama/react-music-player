import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';
import { playAudio } from '../util';

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

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
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
    }, [currentSong])
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }        
    }
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => (song.id === currentSong.id))

        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back'){
            if(currentIndex === 0){
                setCurrentSong(songs[songs.length-1])
                playAudio(isPlaying, audioRef)
                return                
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
        playAudio(isPlaying, audioRef)
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
    return(
        <div className = "player">
             <div className = "time-control">
                <p>{songInfo.duration? getTime(songInfo.currentTime) : "0:00"}</p>
                <div className = "track">
                    <input 
                        type = "range" 
                        min = {0}
                        max = {songInfo.duration || 0}
                        value = {songInfo.currentTime} 
                        onChange = {dragHandler}
                    />
                    <div className = "animate-track"></div>
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
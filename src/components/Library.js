import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
    songs, 
    setCurrentSong, 
    audioRef, 
    isPlaying, 
    setSongs, 
    libraryStatus
}) => {

    return(
        <div className = {`library ${libraryStatus? "active-library": ""} `}>
        <h1>Library</h1>
        <div className = "library-songs">
            {songs.map(song =>  
            <LibrarySong 
                audioRef = {audioRef}
                songs = {songs} 
                setCurrentSong = {setCurrentSong} 
                song = {song}
                setSongs = {setSongs}
                id = {song.id}
                key = {song.id}
                isPlaying = {isPlaying}
            />)}

        </div>
    </div>
    )
    
}

export default Library
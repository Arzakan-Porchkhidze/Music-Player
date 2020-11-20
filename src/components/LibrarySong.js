import React from 'react';
import {playAudio} from '../util';

function LibrarySong({ setSongs, songs, id, song, setCurrentSong,audioRef, isPlaying}) {
    const songSelectHandler = () => {
        setCurrentSong(song);
        playAudio(isPlaying,audioRef);
        //Set Active in library
        const newSongs = songs.map((song) => {
            if (song.id === id) {
              return {
                ...song,
                active: true,
              };
            } else {
              return {
                ...song,
                active: false,
              };
            }
        });
        setSongs(newSongs);
    };
    

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
           <img src={song.cover} alt='cover-img' />
           <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
           </div>
        </div>
    );
}

export default LibrarySong; 
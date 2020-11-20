import React from 'react';

function LibrarySong({song, setCurrentSong,audioRef, isPlaying}) {
    const songSelectHandler = () => {
        setCurrentSong(song);
        //check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise){
                playPromise.then( () => {
                    audioRef.current.play();
                })
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className='library-song'>
           <img src={song.cover} alt='cover-img' />
           <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
           </div>
        </div>
    );
}

export default LibrarySong; 
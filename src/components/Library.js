import React from 'react';
import LibrarySong from './LibrarySong'

function Library({songs, setSongs, setCurrentSong, audioRef, isPlaying}) {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className='library-songs'>
                {songs.map(song => 
                <LibrarySong 
                songs={songs}
                isPlaying={isPlaying}
                audioRef={audioRef}
                key={song.id}
                id={song.id}
                setCurrentSong={setCurrentSong}
                song={song}
                setSongs={setSongs}/>)}
            </div>
        </div>
    );
}

export default Library;
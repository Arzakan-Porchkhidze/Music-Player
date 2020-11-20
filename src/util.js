//check if the song is playing
export const playAudio = (isPlaying, audioRef) => {
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise){
            playPromise.then( () => {
                audioRef.current.play();
            })
        }
    }
}; 
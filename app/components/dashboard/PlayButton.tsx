import React, { useState, useCallback } from "react";

interface PlayButtonProps {
    handlePlay: () => void;
    handlePause: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
    const [ isPaused, togglePaused ] = useState<boolean>(true)

    const onPlay = useCallback(() => {
        togglePaused(false)
        props.handlePlay()
    }, [togglePaused, props.handlePlay])

    const onPause = useCallback(() => {
        togglePaused(true)
        props.handlePause()
    }, [togglePaused, props.handlePause])

    return (
        isPaused ?
            <i className="fas fa-play" onClick={onPlay}></i> :
            <i className="fas fa-pause" onClick={onPause}></i>
    );
}

export default PlayButton;

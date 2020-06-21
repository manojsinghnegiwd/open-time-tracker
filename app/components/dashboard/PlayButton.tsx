import React from "react";

interface PlayButtonProps {
    handlePlay: () => void;
    handlePause: () => void;
    isPaused: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
    return (
        props.isPaused ?
            <i className="fas fa-play" onClick={props.handlePlay}></i> :
            <i className="fas fa-pause" onClick={props.handlePause}></i>
    );
}

export default PlayButton;

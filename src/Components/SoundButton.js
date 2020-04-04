import React from 'react';
import useSound from 'use-sound';


const SoundButton = ({children, source, ...props}) => {
    const [play, { stop, isPlaying }] = useSound(source);

    const handleMouseDown = () => {
        if (isPlaying) stop();
        return play();
    }


    return (
        <button type="button" {...props} onMouseDown={handleMouseDown}>{props.children}</button>
    )
};

export default SoundButton;
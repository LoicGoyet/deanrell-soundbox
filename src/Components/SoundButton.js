import React from 'react';
import useSound from 'use-sound';
import styled from 'styled-components';


const SoundButton = ({children, source, color, ...props}) => {
    const [play, { stop, isPlaying }] = useSound(source);

    const handleMouseDown = () => {
        if (isPlaying) stop();
        return play();
    }

    const rotate = Math.floor(Math.random() * 51) - 25;


    return (
        <Wrapper type="button" {...props} isPlaying={isPlaying} onMouseDown={handleMouseDown} color={color}>
            <Label rotate={rotate}>{children}</Label>
        </Wrapper>
    )
};

export default SoundButton;

const Wrapper = styled.button`
    display: block;
    width: 100%;
    padding-top: 100%;
    border-radius: 0.5rem;
    background-color: ${props => props.isPlaying ? 'springgreen' : props.color};
    box-shadow: ${props => props.isPlaying ? 'inset 2px 2px rgba(0, 0, 0, 0.5)' : '2px 2px rgba(0, 0, 0, 0.5)'};
    border: 0;
    position: relative;
    font-family: 'comic sans ms';
    color: white;
    text-shadow: 2px 2px black;
    font-size: 1rem;

    &:focus {
        outline: 0;
    }
`;

const Label = styled.label`
    transform: rotate(${props => props.rotate}deg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
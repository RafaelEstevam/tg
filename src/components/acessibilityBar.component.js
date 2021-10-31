import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Brightness3, TextFormat, Brightness6 } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const StyledAccessibilityBar = styled('div')`
    width: 100%;
    display: flex;
    background-color: #fc0;
    justify-content: space-around;
    // position: fixed;
    // top: 0;
    // left: 0;
    // -webkit-backface-visibility: hidden;
    // @media(max-width: 767px){
    //     position: fixed;
    //     bottom: 0px;
    // }
`

export default function AccessibilityBar() {

    const accessibility = useSelector(state => state.accessibility);
    const dispatch = useDispatch();

    const [brightness, setBrightness] = useState(accessibility.brightness);
    const [contrast, setContrast] = useState(accessibility.contrast);
    const [fontSize, setFontSize] = useState(accessibility.fontSize);
    const [nightMode, setNightMode] = useState(accessibility.nightMode);

    function resetAccessibility(action, state){
        if(state < 3){
            action(state + 1);
        }else{
            action(0);
        }
    }

    const handleNightMode = () => {
        if(nightMode){
            setNightMode(false);
        }else{
            setNightMode(true);
        }
    }

    useEffect(() => {
        dispatch({ type: 'SET_BRIGHTNESS', brightness: brightness });
    }, [brightness]);

    useEffect(() => {
        dispatch({ type: 'SET_CONTRAST', contrast: contrast });
    }, [contrast]);

    useEffect(() => {
        dispatch({ type: 'SET_FONTSIZE', fontSize: fontSize });
    }, [fontSize]);

    useEffect(() => {
        dispatch({ type: 'SET_NIGHTMODE', nightMode: nightMode });
    }, [nightMode]);


    return (
        <StyledAccessibilityBar>
            <IconButton
                onClick={() => resetAccessibility(setContrast, contrast) }
            >
                <Brightness3 />
            </IconButton>
            <IconButton
                onClick={() => resetAccessibility(setBrightness, brightness) }
            >
                <Brightness6 />
            </IconButton>
            <IconButton
                onClick={() => resetAccessibility(setFontSize, fontSize) }
            >
                <TextFormat />
            </IconButton>
            <IconButton
                onClick={() => handleNightMode() }
            >
                <TextFormat />
            </IconButton>
        </StyledAccessibilityBar>
    )
}
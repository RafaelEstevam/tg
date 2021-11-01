import react from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';

const PodiumComponetn = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const StyledPodium = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 280px;
    margin-top: 10px;
`
const StyledFirstPosition = styled('div')`
    display: block;
    width: 35%;
    height: 80px;
    background: #fc0;
    border-radius: 5px;
`
const StyledSecondPosition = styled('div')`
    display: block;
    width: 28%;
    height:60px;
    background: #ccc;
    border-radius: 5px;
`
const StyledThirdPosition = styled('div')`
    display: block;
    width: 28%;
    height: 50px;
    background: #ff5423;
    border-radius: 5px;
`

export default function Podium(){
    return (
        <PodiumComponetn>
            <Typography>Pódio</Typography>
            <StyledPodium>
                <StyledSecondPosition></StyledSecondPosition>
                <StyledFirstPosition></StyledFirstPosition>
                <StyledThirdPosition></StyledThirdPosition>
            </StyledPodium>
        </PodiumComponetn>
        
    )
}
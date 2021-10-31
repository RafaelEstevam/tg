import react from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar.jpg';
import {Typography} from '@material-ui/core';

const AchievmentComponent = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`

const AchievmentsList = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 250px;
    margin-top: 10px;
`
const AchievmentsItem = styled('div')`
    display: block;
    border-radius: 100%;
    width: 20%;
    overflow: hidden;
    img{
        width: 100%;
        height: auto;
        display: block
    }
`

export default function Achievements() {
    return (
        <AchievmentComponent>
            <Typography>Conquistas</Typography>
            <AchievmentsList>
                <AchievmentsItem><img src={avatar} /></AchievmentsItem>
                <AchievmentsItem><img src={avatar} /></AchievmentsItem>
                <AchievmentsItem><img src={avatar} /></AchievmentsItem>
                <AchievmentsItem><img src={avatar} /></AchievmentsItem>
            </AchievmentsList>
        </AchievmentComponent>
    )
}
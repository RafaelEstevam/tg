
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import avatar from '../assets/avatar.jpg';

const XpComponent = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CircularDiv = styled('div')`
    display: block;
    border-radius: 100%;
    width: 70%;
    overflow: hidden;
    margin-top: -85%;
    img{
        width: 100%;
        height: auto;
        display: block
    }
`

export default function XpProgress() {
    const percentage = 66;

    return (
        <XpComponent>
            <CircularProgressbar value={percentage} />
            <CircularDiv>
                <img src={avatar} />
            </CircularDiv>
        </XpComponent>
    );
}

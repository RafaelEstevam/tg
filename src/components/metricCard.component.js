import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

const MetricTitle = styled(Typography)`
    color: #fff;
    font-weight: bold;
`;

const MetricContent = styled(Typography)`
    padding: 20px;
    border-radius: 100%;
    // border: 12px solid #00000020;
    p{
        font-size: 80px;
        line-height: 50px;
        font-weight: bold;
        color: #ffffff60;
        font-family: 'Impact';
        transform: skew(-20deg);
    }
`;

const MetricIcon = styled('div')`
    position: absolute;
    font-size: 100px;
    opacity: 0.2;
    top: 0px;
    left: 0px;
    svg{
        font-size: 120px;
        color: #fff;
    }
`

const MetricComponent = styled(Paper)`
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${props => props.height};
    background: ${props => props.background};
`;

export default function Metric({ height = '180px', background = '#fc0', icon, title, subtitle, value }) {
    return (
        <MetricComponent elevation={0} height={height} background={background}>
            <div style={{position: 'relative', zIndex: '3', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between'}}>
                <MetricTitle>{title}</MetricTitle>
                <MetricContent>
                    <Typography>{value}</Typography>
                </MetricContent>
                <MetricTitle>{subtitle}</MetricTitle>
            </div>
            {/* <MetricIcon>
                {icon}
            </MetricIcon> */}
        </MetricComponent>
    )
}
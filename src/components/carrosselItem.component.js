import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';

const CarrosselItem = styled('div')`
  height: 80%;
  display: ${props => props.currentIndex === props.index ? 'block' : 'none'};
`;

const CardWrapper = styled('div')`
  padding: 15px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default function CustomCard({title, subtitle, value, index, currentIndex }) {
    return (
        <CarrosselItem index={index} currentIndex={currentIndex}>
            <CardWrapper>
                <Typography>{title}</Typography>
                <Typography>{value}</Typography>
                <Typography>{subtitle}</Typography>
            </CardWrapper>
        </CarrosselItem>
    )
}
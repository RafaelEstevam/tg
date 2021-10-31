import {Card} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    border-radius: 20px;
    height: ${props => props.height};
`;

export default function CustomCard ({children, height}){
    return(
        <StyledCard height={height}>
            {children}
        </StyledCard>
    )
}
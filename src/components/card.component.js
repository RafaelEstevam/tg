import {Card} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    // border-radius: 20px;
    height: ${props => props.height};
`;

export default function CustomCard ({children, height, className}){
    return(
        <StyledCard height={height} className={className}>
            {children}
        </StyledCard>
    )
}
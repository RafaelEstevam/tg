import {Card} from '@material-ui/core';
import styled from 'styled-components';
import {COLORS} from '../styles/colors';

const StyledCard = styled(Card)`
    border-radius: ${COLORS.borderRadius};
    height: ${props => props.height};
`;

export default function CustomCard ({children, height, className}){
    return(
        <StyledCard height={height} className={className}>
            {children}
        </StyledCard>
    )
}
import {Card} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    border-radius: 20px;
`;

export default function CustomCard ({children}){
    return(
        <StyledCard>
            {children}
        </StyledCard>
    )
}
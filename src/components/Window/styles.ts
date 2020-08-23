import styled from 'styled-components';

export const WindowStyle = styled.div`
    
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    

    .window-light {
        width: 30px;
        height: 40px;
        background: ${props => props.theme.colors.WindowOff};
        cursor: pointer;
    }

    .window-dark {
        width: 30px;
        height: 40px;
        background: ${props => props.theme.colors.WindowOn};
        cursor: pointer;
    }

`;

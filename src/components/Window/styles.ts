import styled from 'styled-components';

export const WindowStyle = styled.div`
    
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap:  25px 30px;
    

    .window-light {
        width: 30px;
        height: 40px;
        background: #ffffff;
        display: flex;
        justify-content: center;
    }

    .window-light input {
        display: none;
    }

    .window-light input + label:before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 40px;
        background: ${props => props.theme.colors.WindowOff};
        cursor: pointer;
    }

    .check-window:checked + label:before {
        background: ${props => props.theme.colors.WindowOn};
    }
`;
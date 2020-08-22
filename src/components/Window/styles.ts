import styled from 'styled-components';

export const WindowStyle = styled.div`
    
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    

    .window {
        width: 30px;
        height: 40px;
        background: #044da8;
        /*background: #ffd700;*/
        cursor: pointer;
        border: 1px solid black;
    }
`;

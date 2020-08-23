import styled from 'styled-components';

export const SunsetStyle = styled.div`
    .circle {  
        position: relative;
        left: 180px;
        margin-bottom: 100px;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }

    #sunset {
        background:  ${props => props.theme.colors.Sun};
        box-shadow: 0 0 50px  ${props => props.theme.colors.Sun};
    }
`;
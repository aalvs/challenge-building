import styled from 'styled-components';

export const BuildingStyle = styled.div`
   
    position: relative;
    width: 145px;
    height: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.colors.Building};
    padding-top: 20px;

    &:before {
    position: absolute;
    height: 100%;
    width: 20px;
    left: -20px;
    bottom: 7px;
    background: ${props => props.theme.colors.BuildingTrid};
    content: '';
    transform: skewY(40deg);
    -webkit-transform: skewY(40deg);
    -ms-transform: skewY(40deg);
  }
  &:after {
    position: absolute;
    height: 17px;
    width: 145px;
    left: -10px;
    top: -17px;
    background: ${props => props.theme.colors.BuildingTrid};
    content: '';
    transform: skewX(50deg);
    -webkit-transform: skewX(50deg);
    -ms-transform: skewX(50deg);
  }

  #structure-building {
        position: relative;
        width: 860px;
        height: 250px;
        margin: 120px auto 20px auto;  
    }
`;




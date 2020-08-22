import styled from 'styled-components';

export const BuildingStyle = styled.div`
   
    position: absolute;
    width: 145px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5F7FE;
    padding-top: 50px;

    &:before {
    position: absolute;
    height: 100%;
    width: 20px;
    left: -20px;
    bottom: 7px;
    background-color: #50A8E3;
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
    background-color: #50A8E3;
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




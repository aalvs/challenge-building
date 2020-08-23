import React from 'react';

import { SunsetStyle } from './styles';

const Sunset: React.FC = () => {

    return (
        <SunsetStyle>
            <div className="circle" id="sunset"></div>
        </SunsetStyle>
    );
    
}
export default Sunset;
import React from 'react';

import { SunsetStyle } from './styles';

interface Props {
    toggleTheme(): void
}

const Sunset: React.FC<Props> = ({toggleTheme}) => {

    return (
        <SunsetStyle>
            <div onClick={toggleTheme} className="circle" id="sunset"></div>
        </SunsetStyle>
    );
    
}
export default Sunset;
import React from 'react';

import { WindowStyle } from './styles'


const Window: React.FC = () => {

    return (
        <WindowStyle>           
            <div className="window">
                <input id="check-window-1" type="checkbox"/>
                <label htmlFor="check-window-1"></label>
            </div>

            <div className="window">
                <input id="check-window-1" type="checkbox"/>
                <label htmlFor="check-window-1"></label>
            </div>
        </WindowStyle>    
    );
}
export default Window;
import React from 'react';

import { WindowStyle } from './styles';

const Window: React.FC = () => {
       
    return (
        <WindowStyle>   
            {/* row 1 */}
            <div className="window-light">
                <input id="check-1" type="checkbox" className="check-window"/>
                <label htmlFor="check-1"><div className="label-check"></div></label>
            </div>
            
            <div className="window-light">
                <input id="check-2" type="checkbox" className="check-window"/>
                <label htmlFor="check-2"><div className="label-check"></div></label>
            </div>    
            {/* row 2 */}
            <div className="window-light">
                <input id="check-3" type="checkbox" className="check-window"/>
                <label htmlFor="check-3"><div className="label-check"></div></label>
            </div>   

            <div className="window-light">
                <input id="check-4" type="checkbox" className="check-window"/>
                <label htmlFor="check-4"><div className="label-check"></div></label>
            </div>   
            {/* row 3 */}
            <div className="window-light">
                <input id="check-5" type="checkbox" className="check-window"/>
                <label htmlFor="check-5"><div className="label-check"></div></label>
            </div>   

            <div className="window-light">
                <input id="check-6" type="checkbox" className="check-window"/>
                <label htmlFor="check-6"><div className="label-check"></div></label>
            </div>   
            {/* row 4 */}
            <div className="window-light">
                <input id="check-7" type="checkbox" className="check-window"/>
                <label htmlFor="check-7"><div className="label-check"></div></label>
            </div>   

            <div className="window-light">
                <input id="check-8" type="checkbox" className="check-window"/>
                <label htmlFor="check-8"><div className="label-check"></div></label>
            </div>   
            {/* row 5 */}
            <div className="window-light">
                <input id="check-9" type="checkbox" className="check-window"/>
                <label htmlFor="check-9"><div className="label-check"></div></label>
            </div>

            <div className="window-light">
                <input id="check-10" type="checkbox" className="check-window"/>
                <label htmlFor="check-10"><div className="label-check"></div></label>
            </div>
            {/* row 6 */}
            <div className="window-light">
                <input id="check-11" type="checkbox" className="check-window"/>
                <label htmlFor="check-11"><div className="label-check"></div></label>
            </div>

            <div className="window-light">
                <input id="check-12" type="checkbox" className="check-window"/>
                <label htmlFor="check-12"><div className="label-check"></div></label>
            </div>      
            
        </WindowStyle>    
    );
}
export default Window;
import React from 'react';

import Window from '../Window';
import { BuildingStyle } from './styles';

function HomeBuilding() {

    return (
        <div id="structure-building" className="container">
            <BuildingStyle>
                <Window />
            </BuildingStyle> 
        </div>
    );
}
export default HomeBuilding;
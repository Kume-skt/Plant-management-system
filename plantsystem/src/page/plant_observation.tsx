import React from 'react';

import WebCamera from '../component/webCamera_view'
import Weather from '../component/Weather_view'

function Plant_observation() {
    return (
        <div>
            <WebCamera/>
            <Weather/>
        </div>
    );
}

export default Plant_observation;
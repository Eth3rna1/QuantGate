import React, { useState, useEffect } from 'react'
import Bubble from './components/bubble/bubble'


const BACKEND_ENDPOINT = "http://127.0.0.1:5000";

function App() {
    return <Bubble 
        timeFrame="5m"
        color="red"
        percentChange={0.50}
        opacityChangeRate={1}
        usePercent={false}
    />
}

export default App;

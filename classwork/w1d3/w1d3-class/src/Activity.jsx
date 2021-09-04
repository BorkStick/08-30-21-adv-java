import React, { useEffect, useState } from 'react'

const Activity = () => {

    const [state, setState] = useState({activity: "test"})


    useEffect(() => {
      handleClick()
    }, []);
    
    const handleClick = () => {
        fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(json => setState(json));
    }

    return (
        <div>
            Activity Works
            <h3>{state.activity}</h3>
            <button onClick={handleClick}>Press for nbew activity</button>
        </div>
    )
}

export default Activity;
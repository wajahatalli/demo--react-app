import React from 'react';

function Dinner (props) {
    return(
        <div>
            <h1>Today we are serving in Dinner {props.dishName} and {props.sweetName}.</h1>
        </div>
    )
}

export default Dinner;
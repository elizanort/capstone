import React from 'react';

function BreatheAnimation(props) {
    return (
        <div className="animationContainer">
            <div className={props.animationClass}></div>
            <h2 className="animationText">Breathe With The Circle</h2>
        </div>
    )
}

export default BreatheAnimation;
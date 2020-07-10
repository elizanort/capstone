import React, { Component } from 'react';
import ActivityTimer from './Timer.js';

class BreatheAnimation extends Component {

    render() {

        return (
            <div className="screenContainer">
                <div className="animationContainer">
                    <div className="circle"></div>
                    <h2 className="animationText">Breathe With The Circle</h2>
                    {/* <ActivityTimer /> */}
                </div>
            </div>
        )
    }
}

export default BreatheAnimation;
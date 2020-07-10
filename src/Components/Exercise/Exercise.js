import React, { Component } from 'react'
import BreatheAnimation from './BreatheAnimation'

export default class Exercise extends Component {
    render() {
        return (
            <div className="activity-container">
                <div className="card">
                    <BreatheAnimation />
                </div>

                <div>
                    <button>
                        {/* timer function */}
                    </button>
                </div>
                
            </div>
        )
    }
}

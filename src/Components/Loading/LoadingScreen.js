import React, { Component } from 'react';
import loadingIcon from './loadingicon.png';


export default class LoadingScreen extends Component {
    
    
    render() {
        return (
            <>
            <div className="loading-icon">
                <img src={loadingIcon} alt="mindBite" />
            </div>
            <div className="splash-text">
                <h1>
                    MINDBITE
                </h1>
                <h3>
                    Relieve. Refocus. Repeat.
                </h3>
            </div>
            </>
        )
    }
}

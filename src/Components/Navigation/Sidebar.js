import React from 'react';
import loadingIcon from './loadingicon.png';

const navigation = props => (
    <nav>
        <div className="nav-bar">
        <img className="nav-logo" src={loadingIcon} alt="mindBite" />
        </div>
        <div className="nav-links">
            <ul>
                <li>Notifications</li>
                <li>Settings</li>
                <li>About</li>
                <li>Help</li>
            </ul>
        </div>
    </nav>
);

export default navigation;
import React, { Component } from 'react';
import BreatheAnimation from './BreatheAnimation.js';
import { BrowserRouter as Link, Redirect } from "react-router-dom";

export default class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myInterval: null,
            time: 120,
            paused: false,
            animationClass: "circle"
        }
    }

    countdown = () => {
        this.setState({
            time : this.state.time - 1
        });
    }

    stopCountdown = () => {
        this.setState({
            time : this.state.time
        })
    }

    startTimer = () => {
        this.setState({
            myInterval : setInterval(this.countdown,1000)
        });
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        let minutes = Math.floor(this.state.time/60);
        let seconds = this.state.time - (minutes*60);
        {if (seconds < 10) {
            seconds = "0" + (this.state.time - (minutes*60))
        }};
        {if (this.state.time === 0) {
          return <Redirect to='./Finished/Finished.js' />
        }}
        return (
            <div className="screenContainer">
              <Link><i class="fas fa-times"></i></Link>
                <div className="activityContainer">
                    <BreatheAnimation animationClass="animatedCircle" />
            
                    <div className="timerContainer">
                        <span className="timerText">{minutes} : {seconds}</span>
                    </div>
                </div>
            </div>
        )
    }

}


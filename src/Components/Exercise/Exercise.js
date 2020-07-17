import React, { Component } from 'react';
import BreatheAnimation from './BreatheAnimation.js';
import { BrowserRouter as Link, Redirect, withRouter } from "react-router-dom";

class Exercise extends Component {
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
      setTimeout(() => {
        this.setState({
          myInterval : setInterval(this.countdown,1000)
      })
      }, 4000);
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
        if (seconds < 10) {
            seconds = "0" + (this.state.time - (minutes*60))
        };
        if (this.state.time === 0) {
          return <Redirect to='/finish' />
        }
        return (
            <div className="screenContainer">
            <div className="logo"></div>
                <Link>
                    <button className="exerciseExit" onClick={()=> this.props.history.goBack()}><i class="fas fa-times fa-lg exitButton"></i></button>
                </Link>
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

export default withRouter(Exercise);


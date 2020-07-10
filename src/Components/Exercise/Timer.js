import React, { Component } from 'react';

class ActivityTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 120
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({ count: this.state.count - 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {count} = this.state
        return (
            <div className="timerContainer">
                <button>
                </button>
                <span>{count}</span>
            </div>
        )
    }
}

export default ActivityTimer;
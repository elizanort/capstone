import React, { Component } from "react";

const screenOne = (
  <React.Fragment>
    <h1>THIS IS</h1>
  </React.Fragment>
);

const screenTwo = (
  <React.Fragment>
    <h1>AAAAA</h1>
  </React.Fragment>
);

const screenThree = (
  <React.Fragment>
    <h1>TEST</h1>
  </React.Fragment>
);

export default class Finished extends Component {
  whichScreen(activityName) {
    if (activityName === "activity1") {
      return screenOne;
    } else if (activityName === "activity2") {
      return screenTwo;
    } else {
      return screenThree;
    }
  }

  render() {
    return <>{this.whichScreen()}</>;
  }
}

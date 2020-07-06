import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends React.Component {

  state = {
    userInformation: {
      firstName: "",
    },
  };

  render() {
    return (
      <Router>
        <Route exact path="/">
          <div className="homeScreen">
            <HomeScreen userInformation={this.state.userInformation} />
            <Link style={linkStyle} to="/Exercise">
              <IconOrTextOrButtonThatLinksToExercisePage />
            </Link>{" "}
          </div>
        </Route>

        <Route path="/Exercise">
          <Exercise whichExercise={this.whichExercise} />
        </Route>
      </Router>
    );
  }
}

export default App;

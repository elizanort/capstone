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
        <div className="background">
        <Route exact path="/">
          <div className="homeScreen">
            <HomeScreen userInformation={this.state.userInformation} />
            <Link to="/Exercise">
              <div>IconOrTextOrButtonThatLinksToExercisePage</div>
            </Link>{" "}
          </div>
        </Route>

        <Route path="/Exercise">
          <div>Exercise</div>
        </Route>
        </div>
      </Router>
    );
  }
}

export default App;

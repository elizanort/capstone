import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import Exercise from "./Components/Exercise/Exercise.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InformationScreen from "./Components/Information/InformationScreen";
import Finished from "./Components/Finished/Finished";

class App extends React.Component {
  state = {
    userInformation: {
      firstName: "",
    },
    filteredExercises: [],
    energizeToggle: false,
    focusToggle: false,
    relaxToggle: false,
    activeButton: false,
    linkDestination: "",
  };

  exerciseInformation = [
    {
      image: "./image/img.jpg",
      title: "Energize 1",
      information: "This is an exercise to help you",
      type: "energize",
      id: 1,
    },

    {
      image: "./image/img.jpg",
      title: "Energize 2",
      information: "This is some information about the exercise",
      type: "energize",
      id: 2,
    },

    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information:
        "In this exercise, synchronize your breath with the moving circle to cultivate mindfulness and slow down.",
      type: "relax",
      id: 3,
    },

    {
      image: "./image/img.jpg",
      title: "Relax 2",
      information: "This is some information about the exercise",
      type: "relax",
      id: 4,
    },

    {
      image: "./image/img.jpg",
      title: "Refocus 1",
      information: "This is some information about the exercise",
      type: "refocus",
      id: 5,
    },

    {
      image: "./image/img.jpg",
      title: "Refocus 2",
      information: "This is some information about the exercise",
      type: "refocus",
      id: 6,
    },
  ];

  onFilterExercises = (id) => {
    if (id === 1 && this.state.energizeToggle === false) {
      this.setState({
        energizeToggle: true,
        focusToggle: false,
        relaxToggle: false,
        activeButton: true,
        filteredExercises: this.exerciseInformation.filter(
          (exercise) => exercise.type === "energize"
        ),
      });
    } else if (id === 2 && this.state.focusToggle === false) {
      this.setState({
        energizeToggle: false,
        focusToggle: true,
        relaxToggle: false,
        filteredExercises: this.exerciseInformation.filter(
          (exercise) => exercise.type === "refocus"
        ),
        activeButton: true,
      });
    } else if (id === 3 && this.state.relaxToggle === false) {
      this.setState({
        energizeToggle: false,
        focusToggle: false,
        relaxToggle: true,
        filteredExercises: this.exerciseInformation.filter(
          (exercise) => exercise.type === "relax"
        ),
        activeButton: true,
      });
    } else if (
      this.state.energizeToggle === false &&
      this.state.focusToggle === false &&
      this.state.relaxToggle === false
    ) {
      this.setState({
        filteredExercises: this.exerciseInformation.map(
          (exercise) => exercise.type === "energize" || "refocus" || "relax"
        ),
      });
    }
  };

  onFilterClick = () => {};

  render() {
    // return (
    //   <HomeScreen
    //     onFilterExercises={this.onFilterExercises}
    //     userInformation={this.state.userInformation}
    //     exerciseInformation={this.state.filteredExercises}
    //     activeButton={this.state.activeButton}
    //   />
    // );

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen
              onFilterExercises={this.onFilterExercises}
              userInformation={this.state.userInformation}
              exerciseInformation={this.state.filteredExercises}
              activeButton={this.state.activeButton}
            />
          </Route>
          <Route path="/information">
            <InformationScreen
              exerciseInformation={this.state.filteredExercises}
            />
          </Route>
          <Route path="/exercise">
            <Exercise whichExercise={this.whichExercise} />
          </Route>
          <Route path="/finish">
            <Finished />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import Exercise from "./Components/Exercise/Exercise.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InformationScreen from "./Components/Information/InformationScreen";
import Finished from "./Components/Finished/Finished";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInformation: {
        firstName: "",
      },
      filteredExercises: this.exerciseInformation,
      activeButton: "",
    };

  }

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



  handleFilterClick = (type) => {
    this.setState(state => {
      return { activeButton: state.activeButton === type ? "" :  type }},()=> this.filterExercises()
    )



  }

  filterExercises() {
    this.setState(state => {
      if (state.activeButton === "") {
        return { filteredExercises: this.exerciseInformation }
      } else {
        return { filteredExercises: this.exerciseInformation.filter(exercise => exercise.type === state.activeButton) }
      }

    })
  }


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
              onFilterClick={this.handleFilterClick}
              userInformation={this.state.userInformation}
              exerciseInformation={this.state.filteredExercises}
              activeButton={this.state.activeButton}
            />
          </Route>
          <Route path="/information/:exerciseId">
            <InformationScreen
              exerciseList={this.state.filteredExercises}
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

import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
import Exercise from './Components/Exercise/Exercise.js';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

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
  };

  exerciseInformation = [
    {
      image: "./image/img.jpg",
      title: "Energize 1",
      information: "This is an exercise to help you",
      type: "energize",
    },

    {
      image: "./image/img.jpg",
      title: "Energize 2",
      information: "This is some information about the exercise",
      type: "energize",
    },

    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "relax",
    },

    {
      image: "./image/img.jpg",
      title: "Relax 2",
      information: "This is some information about the exercise",
      type: "relax",
    },

    {
      image: "./image/img.jpg",
      title: "Refocus 1",
      information: "This is some information about the exercise",
      type: "refocus",
    },

    {
      image: "./image/img.jpg",
      title: "Refocus 2",
      information: "This is some information about the exercise",
      type: "refocus",
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
    } else if (this.state.energizeToggle === false
      && this.state.focusToggle === false
      && this.state.relaxToggle === false) {
        this.setState({
          filteredExercises:
          this.exerciseInformation.map(
            (exercise) => exercise.type === "energize"
            || "refocus" || "relax"
          )
        });
      }
  };

  render() {
    return (
      <HomeScreen
        onFilterExercises={this.onFilterExercises}
        userInformation={this.state.userInformation}
        exerciseInformation={this.state.filteredExercises}
        activeButton={this.state.activeButton}
      />
    );
  }

  //   return (
  //     <Router>
  //       <Route exact path="/">
  //         <div className="homeScreen">
  //           <HomeScreen userInformation={this.state.userInformation} exerciseInformation = {this.exerciseInformation}/>
  //           <Link style={linkStyle} to="/Exercise">
  //             <IconOrTextOrButtonThatLinksToExercisePage />
  //           </Link>{" "}
  //         </div>
  //       </Route>

  //       <Route path="/Exercise">
  //         <Exercise whichExercise={this.whichExercise} />
  //       </Route>
  //     </Router>
  //   )
  // }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Components/Home/HomeScreen";
import Exercise from "./Components/Exercise/Exercise.js";
import InformationScreen from "./Components/Information/InformationScreen";
import Finished from "./Components/Finished/Finished";

//images
import img1 from "./Images/exercise1.png";
import img2 from "./Images/exercise2.png";
import img3 from "./Images/exercise3.png";
import img4 from "./Images/exercise4.png";
import img5 from "./Images/exercise5.png";
import img6 from "./Images/exercise6.png";



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
      image: img1,
      title: "Wake Up, San Francisco",
      information: "In this exercise we'll be lighting up those neurons and making you feel alive",
      type: "energize",
      id: 1,
    },

    {
      image: img2,
      title: "Sun Salutation",
      information: "We will go through a series of exercises and create a flow of movement. Each pose coordinates with your breathing: Inhale to extend, and exhale to bend. ",
      type: "energize",
      id: 2,
    },

    {
      image: img3,
      title: "Breathing Exercise",
      information:
        "In this exercise, synchronize your breath with the moving circle to cultivate mindfulness and slow down.",
      type: "relax",
      id: 3,
    },

    {
      image: img4,
      title: "Lazy 8's",
      information: "In this exercise we be going through will have our breath accompany our micromovements in our finger tips.",
      type: "relax",
      id: 4,
    },

    {
      image: img5,
      title: "Check-In with Your Body",
      information: "We will practice placing our awareness to the farthest points of our bodies -  bringing our body & mind alive.",
      type: "refocus",
      id: 5,
    },

    {
      image: img6,
      title: "Shoulder Rolls",
      information: "This is a simple exercise that will guide your upper body movement and breath to cohesion.",
      type: "refocus",
      id: 6,
    }
  ]



  handleFilterClick = (type) => {
    this.setState(state => {
      return { activeButton: state.activeButton === type ? "" :  type }},()=> this.filterExercises()
    );
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
};

export default App;

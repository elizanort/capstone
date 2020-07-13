import React from "react";
// import HomeScreen from "./Components/Home/HomeScreen";
import Exercise from './Components/Exercise/Exercise.js';

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

class App extends React.Component {

  state = {
    userInformation: {
      firstName: "",
    },
  };

  exerciseInformation= {

    energize1: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is an exercise to help you",
      type: "energize",
    },

    energize2: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "energize",
    },

    relax1: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "relax",
    },

    relax2: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "relax",
    },

    refocus1: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "refocus",
    },

    refocus2: {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "refocus",
    },
    
  };
  

  render() {
    return(
    <Exercise />
    )
  };
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
  //   );
  // }
}

export default App;

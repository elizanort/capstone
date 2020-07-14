import React from "react";
import HomeScreen from "./Components/Home/HomeScreen";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

class App extends React.Component {

  state = {
    userInformation: {
      firstName: "",
    },
  };

  exerciseInformation= [
    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is an exercise to help you",
      type: "energize",
    },

    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
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
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "relax",
    },

    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "refocus",
    },

    {
      image: "./image/img.jpg",
      title: "Breathing Exercise",
      information: "This is some information about the exercise",
      type: "refocus",
    },
    
  ];
  

  render() {
    return(
    <HomeScreen userInformation={this.state.userInformation} exerciseInformation = {this.exerciseInformation}/>
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
  //   )
  // }
}

export default App;

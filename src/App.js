import React from 'react';
import HomeScreen from './Components/Home/HomeScreen';




class App extends React.Component {
  state={
    userInformation:{
      firstName: '',
    }
  }
  render() {

    
    return (
     
        <HomeScreen userInformation={this.state.userInformation} />
    
    )
  }
}


export default App;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Finished extends Component {

  render() {

    const Header = styled.p`
      font-family: "Raleway";
      margin-top: 3rem;
      font-size: 2rem;
      text-align: center;
      color: #006d77;
    `;

    const FinishButton = styled.button`
      background: #006d77;
      border-radius: 12rem;
      color: #e6f2f5;
      text-align: center;
      width: 12rem;
      margin: 2rem;
      padding: 0.6rem 0rem;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    `;

    return (
      <div className="screenContainer">
        <div className="logo"></div>
        <div className="finishContainer">
          <Header>Ah, that's better!</Header>
          <div className="finishGraphic"></div>
          <Link to='/'><button><FinishButton>FINISH</FinishButton></button></Link>
        </div>
      </div>
    );
  }
}

export default Finished;

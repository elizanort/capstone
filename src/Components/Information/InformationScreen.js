import React, { Component } from "react";
import styled from "styled-components";

import { withRouter } from "react-router-dom";
class InformationScreen extends Component {

  render() {
    const Nav = styled.button`
      padding: 1rem;
      display: flex;
      color: #006d77;
    `;
    const Header = styled.p`
      font-family: "Raleway";
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      color: #006d77;
    `;

    const FlexColumnWrap = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;

    const InfoCard = styled.div`
      height: 20rem;
      width: 17rem;
      background: #e6f2f5;
      border-radius: 3rem;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1);
      margin: 1rem;
    `;

    const CardHeader = styled.h2`
      color: #006d77;
      margin: 0rem;
      text-align: center;
    `;

    const CardText = styled.p`
      color: #006d77;
      text-align: center;
    `;

    const CtaButton = styled.button`
      background: #006d77;
      border-radius: 10px;
      color: #e6f2f5;
      text-align: center;
      width: 10rem;
      padding: 0.4rem 0rem;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    `;

    return (
      <div>
        <Nav>
          <a onClick={()=> this.props.history.goBack()}><i class="fas fa-chevron-left"></i></a>
        </Nav>
        <Header>Relax</Header>
        <FlexColumnWrap>
          <InfoCard>
            <FlexColumnWrap>
              <CardHeader>{this.state.exercise.title} </CardHeader>
              <CardText>
                {this.state.exercise.information}
              </CardText>
              <CtaButton onClick={()=>this.props.history.push('/exercise')}>BEGIN</CtaButton>

            </FlexColumnWrap>
          </InfoCard>
        </FlexColumnWrap>
      </div>
    );
  }
}

export default withRouter(InformationScreen)
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class InformationScreen extends Component {
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
          <Link path="/"><i class="fas fa-chevron-left"></i></Link>
        </Nav>
        <Header>Relax</Header>
        <FlexColumnWrap>
          <InfoCard>
            <FlexColumnWrap>
              <CardHeader>{this.props.exerciseInformation.title} </CardHeader>
              <CardText>
                {this.props.exerciseInformation.information}
              </CardText>
              <Link path="/exercise"><CtaButton>BEGIN</CtaButton></Link>
            </FlexColumnWrap>
          </InfoCard>
        </FlexColumnWrap>
      </div>
    );
  }
}

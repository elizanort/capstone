import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";


class InformationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseId: parseInt(props.match.params.exerciseId),
      exerciseMatch: ""
    }
  }

  componentDidMount() {
    let matchedExercise = this.props.exerciseList.find(exercise => exercise.id === this.state.exerciseId);
    this.setState({ exerciseMatch : matchedExercise });
  }
    
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
      height: 28rem;
      width: 18rem;
      background: #e6f2f5;
      border-radius: 3rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1);
      margin: 1rem;
    `;

    const CardImgWrap = styled.div`
      display: flex;
      justify-content: center;
      height: 50%;
      width: 90%;
      border-radius: 3rem;
      `;

    const CardHeader = styled.h2`
      color: #006d77;
      margin: 0rem;
      padding: 24px;
      text-align: center;
    `;

    const CardText = styled.p`
      color: #006d77;
      padding: 8px;
      text-align: center;
    `;

    const CtaButton = styled.button`
      background: #006d77;
      border-radius: 12rem;
      color: #e6f2f5;
      text-align: center;
      width: 12rem;
      padding: 0.4rem 0rem;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    `;

    return (
      <div className="screenContainer">
        <div className="logo"></div>
        <Nav>
          <button className="exitButton" onClick={()=> this.props.history.goBack()}><i class="fas fa-chevron-left fa-lg"></i></button>
        </Nav>
        <Header>Relax</Header>
        <FlexColumnWrap>
          <InfoCard>
            <FlexColumnWrap>
              <CardImgWrap><img src={this.state.exerciseMatch.image} alt='exercise graphic'/> </CardImgWrap>
              <CardHeader>{this.state.exerciseMatch.title}</CardHeader>
              <CardText>
                {this.state.exerciseMatch.information}
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
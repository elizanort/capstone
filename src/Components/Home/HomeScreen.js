import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseInformation: props.exerciseInformation,
    };
  }

  render() {
    const NavWrap = styled.div`
      padding: 1rem;
      display: flex;
    `;
    const Greeting = styled.p`
      font-family: "Raleway";
      margin: 1rem;
      font-size: 2rem;
      text-align: center;
      color: #edf6f9;
    `;

    const FlexCenterWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const FilterButton = styled.button`
      color: black;
      margin: 0.5rem 1rem;
      padding: 0.45rem 1rem;
      background: linear-gradient(180deg, #EDF6F9 0%, #E6F2F5 76.04%, #8CBEC4 100%);
      border-radius: 40px;
      color: #006D77;
        &:hover{
          background: #E29578;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        }
        &:active{
          linear-gradient(180deg, #EDF6F9 0%, #EDF6F9 56.25%, #EADCD6 84.37%, #E29578 100%);
        }

        ${(props) =>
          props.active === props.name ?
          `
            background: #E29578;
        ` : `background: linear-gradient(180deg, #EDF6F9 0%, #E6F2F5 76.04%, #8CBEC4 100%)`}
      
    `;

    const CardWrap = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: scroll;
      margin: 1.5rem;
    `;

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 19rem;
      width: 19rem;
      background: #e6f2f5;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2), 4px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 3rem;
      margin: 1rem;

      &:active{
        box-shadow: none;
      }
    `;

    const CardImgWrap = styled.div`
      display: flex;
      justify-content: center;
      height: 50%;
      width: 90%;
      border-radius: 3rem;

      
    `;
    const CardTitle = styled.h3`
      text-align: center;
      font-weight: 600;
      color: #006d77;
      padding: 1rem 0rem;
    `;

    return (
      <div className="home_wrapper">
      <div className="logo"></div>
        <NavWrap></NavWrap>

          <Greeting>Welcome!</Greeting>

        <FlexCenterWrap>
          <FilterButton

            active={this.props.activeButton}
            onClick={() => this.props.onFilterClick("energize")}
            name='energize'
          >
            Energize
          </FilterButton>
          <FilterButton

            active={this.props.activeButton}
            onClick={() => this.props.onFilterClick("refocus")}
            name='refocus'

          >
            Refocus
          </FilterButton>
          <FilterButton

            active={this.props.activeButton}
            onClick={() => this.props.onFilterClick("relax")}
            name='relax'

          >
            Relax
          </FilterButton>
        </FlexCenterWrap>

        <CardWrap>
          <ul>
            {this.props.exerciseInformation.map((exercise) => {
              return (
                <li>
                  <Link to={`/information/${exercise.id}`} className="link">
                    <Card>
                      <CardImgWrap><img src={exercise.image} alt="the icon for the exercise" className="imgCard"></img></CardImgWrap>
                      <CardTitle>{exercise.title}</CardTitle>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardWrap>
      </div>
    );
  }
}

export default HomeScreen;

import React from "react";
import styled from "styled-components";

var filter = "";

class HomeScreen extends React.Component {
  handleFilterClick = (id) => {
    if (id === 1) {
      filter = "relax";
    } else if (id === 2) {
      filter = "refocus";
    } else if (id === 3) {
      filter = "energize";
    } else {
      filter = "";
    }
  };

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
          box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
        }
        &:active{
          linear-gradient(180deg, #EDF6F9 0%, #EDF6F9 56.25%, #EADCD6 84.37%, #E29578 100%);
        }
      
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
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 3rem;
      margin: 1rem;
    `;

    const CardImgWrap = styled.div`
      display: flex;
      justify-content: center;
      height: 50%;
      width: 90%;
      border-radius: 3rem;

      // remove this background when image is added
      background: rgba(0, 109, 119, 0.76);
    `;
    const CardTitle = styled.h3`
      text-align: center;
      font-weight: 600;
      color: #006d77;
      padding: 1rem 0rem;
    `;

    return (
      <div className="home_wrapper">
        <NavWrap>
          <button className="button">
            <i class="fas fa-bars"></i>
          </button>
        </NavWrap>

        <div>
          <Greeting>Hello, Garrett!</Greeting>
        </div>

        <FlexCenterWrap>
          <FilterButton onClick={() => this.handleFilterClick(3)}>
            Energize
          </FilterButton>
          <FilterButton onClick={() => this.handleFilterClick(2)}>
            Refocus
          </FilterButton>
          <FilterButton onClick={() => this.handleFilterClick(1)}>
            Relax
          </FilterButton>
        </FlexCenterWrap>

        <CardWrap>
          <ul>
            {this.props.exerciseInformation.map((exercise) => {
              if (filter === "energize") {
                {
                  this.filter((exercise) => {
                    if (exercise.type === "energize") {
                      return (
                        <li>
                          <Card>
                            <CardImgWrap>{exercise.image}</CardImgWrap>
                            <CardTitle>{exercise.title}</CardTitle>
                          </Card>
                        </li>
                      );
                    }
                  });
                }
              } else if (filter === "refocus") {
                {
                  this.filter((exercise) => {
                    if (exercise.type === "refocus") {
                      return (
                        <li>
                          <Card>
                            <CardImgWrap>{exercise.image}</CardImgWrap>
                            <CardTitle>{exercise.title}</CardTitle>
                          </Card>
                        </li>
                      );
                    }
                  });
                }
              } else if (filter === "relax") {
                {
                  this.filter((exercise) => {
                    if (exercise.type === "relax") {
                      return (
                        <li>
                          <Card>
                            <CardImgWrap>{exercise.image}</CardImgWrap>
                            <CardTitle>{exercise.title}</CardTitle>
                          </Card>
                        </li>
                      );
                    }
                  });
                }
              } else {
                return (
                  <li>
                    <Card>
                      <CardImgWrap>{exercise.image}</CardImgWrap>
                      <CardTitle>{exercise.title}</CardTitle>
                    </Card>
                  </li>
                );
              }
            })}
          </ul>
        </CardWrap>
        <div></div>
      </div>
    );
  }
}

export default HomeScreen;

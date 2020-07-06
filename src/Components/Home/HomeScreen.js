import React from "react";
import styled from "styled-components";

class HomeScreen extends React.Component {
  render() {
    const NavWrap = styled.div`
      padding: 2rem;
      display: flex;
    `;
    const Greeting = styled.p`
      font-family: "Krona One";
      padding: 1rem;
    `;

    const FlexCenterWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const FilterButton = styled.button`
      border: 1px solid black;
      color: black;
      margin: 0.5rem 1rem;
      padding: 0.5rem 1rem;
      background: transparent;
      border-radius: 40px;
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
      height: 19rem;
      width: 19rem;
      border: 1px solid black;
      border-radius: 3rem;
      margin: 1rem;
    `;

    return (
      <div className="home_wrapper">
        <NavWrap>
          <button className="button">
            <i class="fas fa-bars"></i>
          </button>
        </NavWrap>

        <div>
          <Greeting>Hello, Garrett</Greeting>
        </div>

        <FlexCenterWrap>
          <FilterButton>Energize</FilterButton>
          <FilterButton>Refocus</FilterButton>
          <FilterButton>Relax</FilterButton>
        </FlexCenterWrap>

        <CardWrap>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </CardWrap>
        <div></div>
      </div>
    );
  }
}

export default HomeScreen;

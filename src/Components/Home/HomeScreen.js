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
    `
    const FilterButton = styled.button`
      border: 1px solid black;
      color: black;
      margin: 0.5rem 1rem;
      padding: 0.5rem 1rem;
      background: transparent;
      border-radius: 40px;
    `;

    return (
      <div className="home_wrapper">
        <NavWrap>
          <i class="fas fa-bars"></i>
        </NavWrap>

        <div>
          <Greeting>Hello, Garrett</Greeting>
        </div>
        <div>
          <FlexCenterWrap>
            <FilterButton>Energize</FilterButton>
            <FilterButton>Refocus</FilterButton>
            <FilterButton>Relax</FilterButton>
          </FlexCenterWrap>
        </div>
      </div>
    );
  }
}

export default HomeScreen;

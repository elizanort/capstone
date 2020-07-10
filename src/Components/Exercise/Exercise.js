import React, { Component } from "react";

export default class Exercise extends Component {
  render() {
    const NavWrap = styled.div`
      padding: 1rem;
      display: flex;
    `;
    return (
      <div className="activity-container">
          <NavWrap>
            <i class="fas fa-times"></i>
          </NavWrap>
        <div className="card">{/* Activity logic */}</div>

        <div>
          <button>{/* timer function */}</button>
        </div>
      </div>
    );
  }
}

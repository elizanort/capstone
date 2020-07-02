import React, { Component } from 'react'

export default class FilterCarosel extends Component {
    render() {

        const FilterButton = styled.button `
        border: 1px solid black;
        color: black;
        margin: .5rem 1rem;
        background: transparent;
        border-radius: 5px;
        
        `
        return (
            <div>
                <span>
                    <FilterButton></FilterButton>
                    <FilterButton></FilterButton>
                    <FilterButton></FilterButton>
                </span>
            </div>
        )
    }
}

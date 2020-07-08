import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';


class InformationScreen extends Component {
    constructor(props) {
        super(props);

    }

    static get CARD_STYLE() {

        return {
        height: '24rem',
        width: '16rem',
        backgroundColor: 'green',
        border: '1px solid #006D77',
        borderRadius: '3rem',
        margin: '1rem'
        }

    }

    render() {

        const Card = styled.div`
        height: 30rem;
        width: 19rem;
        border: 1px solid #006D77;
        border-radius: 3rem;
        margin: 1rem;
        `;

        return (
            <div className="flex-col">
                <div className="flex-row">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <h1>Refocus</h1>
                <Carousel itemsToShow={1}>
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                </Carousel>
            </div>
        )
    }
}

export default InformationScreen;

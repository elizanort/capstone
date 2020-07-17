import React from "react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel(props) {
  const settings = {
    dots: true,
    className: "center",
    focusOnSelect: true,
    variableWidth: true,

    arrowRight: <div style={{ boxShadow: "20px 20px 20px black" }} />,
    centerMode: true,
    slidesToShow: 1,
    dotsClass: "dots",
    customPaging: (i) => <div className="dots_item">{cards[i].title}</div>,
  };
  render() {
    
    return (
      <div>
        <Slider {...settings}>
          {this.props.exerciseInformation.map((exercises) => (
            <Card card={card} key={i}>
              <CardImgWrap>
                <img src={exercise.image} alt="the icon for the exercise"></img>
              </CardImgWrap>
              <CardTitle>{exercise.title}</CardTitle>
            </Card>
          ))}
        </Slider>
      </div>
    );
  }
}

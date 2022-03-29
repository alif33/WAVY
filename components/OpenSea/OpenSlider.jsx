import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import profile1 from "../../public/img/profile1.jpg";
import profile2 from "../../public/img/profile2.jpg";
import profile3 from "../../public/img/profile3.jpg";
import profile4 from "../../public/img/profile4.jpg";
import CardList from "./CardList";

const sliderData = [
  {
    id: 1,
    status: "Coming Soon",
    price: "150 ETH",
    condition: "New Bid",
    position: "Height bid A LOT OF ETH",
    img: profile1,
  },
  {
    id: 2,
    status: "Coming Soon",
    price: "150 ETH",
    condition: "New Bid",
    position: "Height bid A LOT OF ETH",
    img: profile2,
  },
  {
    id: 3,
    status: "Coming Soon",
    price: "150 ETH",
    condition: "New Bid",
    position: "Height bid A LOT OF ETH",
    img: profile3,
  },
  {
    id: 4,
    status: "Coming Soon",
    price: "150 ETH",
    condition: "New Bid",
    position: "Height bid A LOT OF ETH",
    img: profile4,
  },
];
const OpenSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {sliderData.map((item, i) => (
          <CardList key={i} cardList={item} />
        ))}
      </Slider>
    </>
  );
};

export default OpenSlider;

import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import awesomeArrowRight from "../../public/img/icon/Icon awesome-arrow-left (1).svg";
import awesomeArrowLeft from "../../public/img/icon/Icon awesome-arrow-left.svg";
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
  {
    id: 4,
    status: "Coming Soon",
    price: "150 ETH",
    condition: "New Bid",
    position: "Height bid A LOT OF ETH",
    img: profile4,
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const sliderRef = useRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((item, i) => (
          <CardList key={i} cardList={item} />
        ))}
      </Slider>

      <div>
        <div className="arrow-div space-x-20 text-center mt-10">
          <button
            onClick={() => goToPrev()}
            className="bg-[#12c805] p-3 rounded-lg"
          >
            <Image className="w-9/12" src={awesomeArrowLeft} alt="" />
          </button>
          <button
            onClick={() => goToNext()}
            className="bg-[#12c805] p-3 rounded-lg"
          >
            <Image className="w-9/12" src={awesomeArrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenSlider;

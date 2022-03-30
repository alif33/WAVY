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
import profile5 from "../../public/img/profile5.png";
import SliderItems from "./SliderItems";

const sliderData = [
  {
    id: 1,
    img: profile1,
  },
  {
    id: 2,
    img: profile2,
  },
  {
    id: 3,
    img: profile3,
  },
  {
    id: 4,
    img: profile4,
  },
  {
    id: 5,
    img: profile5,
  },
];

const MeetSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = useRef();

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <section className="meet-section">
        <div className=" mx-auto">
          <div className="lg:grid  lg:grid-cols-5 gap-8 justify-center items-center py-24">
            <div className="lg:ml-60  col-span-2">
              <div className="section-title pl-12 ">
                <h2 className="text-white text-[3.438rem] font-[GROBOLD] leading-[4.563rem] tracking-[2.2px]">
                  MEET THE WAVY SHARKS
                </h2>
                <p className="text-white text-base py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  vel, iste doloremque, accusantium, hic veniam perspiciatis
                  libero eaque dolores blanditiis voluptatum iure reprehenderit
                  nihil in. Aliquid nesciunt repellat reprehenderit accusantium.
                </p>
                <div className="arrow-div space-x-3">
                  <button
                    onClick={() => goToPrev()}
                    className="bg-lime-500 p-3 rounded-lg"
                  >
                    <Image className="w-9/12" src={awesomeArrowLeft} alt="" />
                  </button>
                  <button
                    onClick={() => goToNext()}
                    className="bg-lime-500 p-3 rounded-lg"
                  >
                    <Image className="w-9/12" src={awesomeArrowRight} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-3 px-8 lg:px-0 mt-8 sm:mt-0">
              <div className=" justify-center items-center ">
                <Slider ref={sliderRef} {...settings}>
                  {sliderData.map((item, i) => (
                    <SliderItems key={i} item={item} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetSection;

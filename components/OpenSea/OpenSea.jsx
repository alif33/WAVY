import Image from "next/image";
import React, { useRef } from "react";
import awesomeArrowRight from "../../public/img/icon/Icon awesome-arrow-left (1).svg";
import awesomeArrowLeft from "../../public/img/icon/Icon awesome-arrow-left.svg";
import OpenSlider from "./OpenSlider";

const OpenSea = () => {
  let sliderRef = useRef();
  return (
    <>
      <section className="top-section py-24">
        <div className="section-title w-9/12 mx-auto flex justify-between ">
          <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-3 shadow-lg mt-8">
            View On Opensea
          </button>
          <h2 className="text-right text-4xl font-bold text-white">
            <span className="text-lime-500">TOP</span>
            <br />
            WAVY SHARKS
          </h2>
        </div>

        {/* <!-- =============SLIDER IMG =============== --> */}
        <div className=" mt-20">
          <OpenSlider ref={sliderRef} />
        </div>
        <div>
          <div className="arrow-div space-x-20 text-center mt-10">
            <button
              onClick={() => slickPrev()}
              className="bg-[#12c805] p-3 rounded-lg"
            >
              <Image className="w-9/12" src={awesomeArrowLeft} alt="" />
            </button>
            <button
              onClick={() => slickNext()}
              className="bg-[#12c805] p-3 rounded-lg"
            >
              <Image className="w-9/12" src={awesomeArrowRight} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenSea;
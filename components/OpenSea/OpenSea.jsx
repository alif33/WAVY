import Image from "next/image";
import React from "react";
import dolphin from "../../public/img/flow-shark.png";
import OpenSlider from "./OpenSlider";
const OpenSea = () => {
  return (
    <>
      <section className="top-section py-24 relative">
        <div className="absolute lg:-top-[9rem] lg:left-[20rem] -top-[8rem] ">
          <Image width={350} height={350} src={dolphin} alt="" />
        </div>
        <div className="section-title w-9/12 mx-auto md:flex space-y-4 justify-between items-center ">
          <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-3 shadow-lg mt-8">
            View On Opensea
          </button>
          <h2 className="text-right text-[3.438rem] font-[GROBOLD] leading-[4.563rem] tracking-[2.2px] font-bold text-white">
            <span className="text-lime-500">TOP</span>
            <br />
            WAVY SHARKS
          </h2>
        </div>

        {/* <!-- =============SLIDER IMG =============== --> */}
        <div className=" mt-20">
          <OpenSlider />
        </div>
      </section>
    </>
  );
};

export default OpenSea;

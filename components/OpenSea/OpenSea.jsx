import React from "react";
import OpenSlider from "./OpenSlider";

const OpenSea = () => {
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
          <OpenSlider />
        </div>
      </section>
    </>
  );
};

export default OpenSea;

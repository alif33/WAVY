import Image from "next/image";
import React from "react";
import dolpin from "../../public/img/join-shark.png";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <section className="">
      <div className="bg-[#1c056a] pt-12 sm:pt-0">
        <div className="lg:ml-60 ">
          <div className="lg:grid lg:grid-cols-12 overflow-hidden">
            <div className="flex items-center col-span-4 px-12 lg:px-0">
              <div>
                <h1 className="font-[GROBOLD] tracking-[0.3rem]  text-5xl uppercase font-bold text-[#12c605]">
                  Join Our
                </h1>
                <br />
                <span className="font-[GROBOLD] tracking-[0.3rem]  text-5xl uppercase font-bold text-white">
                  Community
                </span>
                <p className="text-white text-base pt-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum tempore maxime ut veritatis temporibus animi quos
                  provident. Atque, vero nam nisi cumque quaerat ullam quam
                  expedita magnam ipsum? Dolorem eum dolores hic ab velit
                  voluptates expedita vitae cumque est consequuntur.
                </p>
                <button className="bg-[#12c605] text-white px-20 py-5 text-lg mt-16 rounded-md">
                  Join Discord
                </button>
              </div>
            </div>
            <div className="col-span-8 relative  lg:px-0">
              <div className="pt-6 lg:-mb-[7rem] -mb-12">
                <Image
                  height={800}
                  className="absolute -bottom-28"
                  src={dolpin}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomFooter />
    </section>
  );
};

export default Footer;

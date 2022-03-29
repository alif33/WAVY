import Image from "next/image";
import React from "react";
import dolpin from "../../public/img/join-shark.png";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <section className="">
      <div className="bg-[#1c056a]">
        <div className="ml-60">
          <div className="grid grid-cols-12 overflow-hidden">
            <div className="flex items-center col-span-4">
              <div>
                <h1 className=" text-4xl uppercase font-bold text-[#12c605]">
                  Join Our
                </h1>
                <h2 className="text-4xl uppercase font-bold text-white">
                  Community
                </h2>
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
            <div className="col-span-8 relative">
              <div className="pt-6 -mb-[7rem]">
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

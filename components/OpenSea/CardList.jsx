import Image from "next/image";
import React from "react";
import awesomeFire from "../../public/img/icon/Icon awesome-fire.svg";
const CardList = ({ cardList }) => {
  return (
    <div className="w-full p-4">
      <div className="slider-img p-3">
        <div className="">
          <Image
            className="rounded-lg"
            width={600}
            height={650}
            src={cardList.img}
            alt=""
          />
        </div>
        <div className="mt-2 slider-title">
          <div className="flex justify-between border-b border-black pb-2">
            <h3 className="text-white  text-xl font-black slider-title">
              COMING SOON{" "}
            </h3>
            <p className="text-white text-sm bg-[#12c805] py-1 px-2 rounded-lg ">
              150 ETC
            </p>
          </div>
          <div className="flex justify-between py-1 items-center">
            <p className="text-gray-500 text-sm flex gap-4">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="#6b7280"
                className="bi bi-sliders2-vertical"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"
                />
              </svg>{" "}
              Highest bid A LOT OF ETH
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              New Bid
              <Image className="relative" src={awesomeFire} alt="awesomeFire" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;

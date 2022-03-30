import Image from "next/image";
import React from "react";
import unique from "../../public/img/unique.png";
const DetailSection = () => {
  return (
    <>
      <section className="detail-section ">
        <div className="w-9/12 mx-auto py-24">
          <div className="lg:grid lg:grid-cols-2 gap-8 justify-center items-center">
            <div className="mx-auto">
              <Image className="" src={unique} alt="unique image" />
            </div>
            <div className="">
              <div className="section-title">
                <h2 className="text-5xl text-white font-black ">
                  <span className="text-lime-500">8,888</span>
                  UNIQUE
                  <br />
                  SHARKS
                </h2>
                <p className="text-white text-base pt-5 pb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been th industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-white text-base pb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis repellendus nostrum consectetur unde temporibus beatae
                  reprehenderit repudiandae nemo natus, ab deleniti, dolorum
                  possimus saepe animi molestias dolorem iste obcaecati tenetur?
                </p>
                <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-2 shadow-lg mt-8">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSection;

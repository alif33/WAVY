import Image from "next/image";
import Link from "next/link";
import React from "react";
import dolpin from "../../public/img/join-shark.png";

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

      <div className="bg-[#12053d] p-6">
        <div className="w-9/12 mx-auto">
          <div className="flex justify-between">
            <p className="text-white uppercase text-xs">
              © 2021 Wavy Sharks Scoiety
            </p>
            <div className="flex gap-3">
              <Link href="/">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.066"
                    height="16.851"
                    viewBox="0 0 18.066 16.851"
                  >
                    <path
                      id="Icon_awesome-instagram"
                      data-name="Icon awesome-instagram"
                      d="M9.03,6.343A4.477,4.477,0,0,0,4.4,10.663a4.477,4.477,0,0,0,4.631,4.32,4.477,4.477,0,0,0,4.631-4.32A4.477,4.477,0,0,0,9.03,6.343Zm0,7.129a2.92,2.92,0,0,1-3.011-2.809A2.918,2.918,0,0,1,9.03,7.855a2.918,2.918,0,0,1,3.011,2.809A2.92,2.92,0,0,1,9.03,13.472Zm5.9-7.306a1.083,1.083,0,0,1-2.16,0,1.083,1.083,0,0,1,2.16,0ZM18,7.189a4.807,4.807,0,0,0-1.459-3.531A5.6,5.6,0,0,0,12.754,2.3c-1.491-.079-5.961-.079-7.452,0A5.594,5.594,0,0,0,1.517,3.654,4.822,4.822,0,0,0,.058,7.185c-.085,1.391-.085,5.561,0,6.953a4.807,4.807,0,0,0,1.459,3.531A5.608,5.608,0,0,0,5.3,19.03c1.491.079,5.961.079,7.452,0a5.564,5.564,0,0,0,3.784-1.361A4.838,4.838,0,0,0,18,14.138c.085-1.391.085-5.558,0-6.949Zm-1.926,8.442a2.954,2.954,0,0,1-1.717,1.6c-1.189.44-4.01.338-5.324.338s-4.139.1-5.324-.338a2.954,2.954,0,0,1-1.717-1.6c-.472-1.109-.363-3.741-.363-4.967S1.521,6.8,1.989,5.7a2.953,2.953,0,0,1,1.717-1.6c1.189-.44,4.01-.338,5.324-.338s4.139-.1,5.324.338a2.954,2.954,0,0,1,1.717,1.6c.472,1.109.363,3.741.363,4.967S16.542,14.525,16.071,15.631Z"
                      transform="translate(0.005 -2.238)"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.66"
                    height="16.851"
                    viewBox="0 0 20.66 16.851"
                  >
                    <path
                      id="Icon_feather-twitter"
                      data-name="Icon feather-twitter"
                      d="M22.16,4.494a10.236,10.236,0,0,1-2.949,1.437A4.207,4.207,0,0,0,11.83,8.748v.939A10.01,10.01,0,0,1,3.378,5.433s-3.756,8.452,4.7,12.208A10.931,10.931,0,0,1,1.5,19.519c8.452,4.7,18.781,0,18.781-10.8a4.226,4.226,0,0,0-.075-.779A7.25,7.25,0,0,0,22.16,4.494Z"
                      transform="translate(-1.5 -4.484)"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="white"
                    className="bi bi-discord"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

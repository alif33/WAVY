import Image from "next/image";
import img from "../../public/img/roadmap.png";
import List from "./List";
const dataList = [
  {
    id: 1,
    title: "Insula Unus",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 2,
    title: "Insula Unus",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 3,
    title: "Insula Duo",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 4,
    title: "Insula Tres",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 5,
    title: "Insula Quattuor",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 6,
    title: "Insula Quinque",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 7,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 8,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 9,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 9,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 9,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 9,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
];
const Roadmap = () => {
  return (
    <section className="top-section">
      <div className="mx-auto px-4 lg:px-0">
        <h1 className="text-[3.438rem] font-[GROBOLD] leading-[4.563rem] tracking-[2.2px] uppercase text-center  font-bold text-lime-500">
          Wavy Sharks
        </h1>
        <h1 className="text-[3.438rem] font-[GROBOLD] leading-[4.563rem] tracking-[2.2px] mt-6 uppercase text-center  font-semibold text-white">
          Socity Roadmap
        </h1>
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:pl-60 roadmap-block pt-16 pb-16 lg:pb-64">
            <Image
              className="pl-10"
              width={700}
              height={700}
              src={img}
              alt=""
            />
          </div>
          <div className="pr-0 lg:p-10 lg:mt-20 lg:mr-60">
            <div className="bg-[#14044d]  rounded-md ">
              <h1 className="font-[GROBOLD] uppercase text-[35px] tracking-[1.4px] bg-[#14044d] py-6 text-white text-center sticky top-0">
                Wavy Shark Society
              </h1>
              <div className="p-6 ">
                <ul className="text-white  h-[32rem] before:relative scrollbar-thin scrollbar-thumb-lime-500 scrollbar-track-gray-900 overflow-y-scroll  scrollbar-track-rounded-full">
                  {dataList.map((item, i) => (
                    <List list={item} key={i} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

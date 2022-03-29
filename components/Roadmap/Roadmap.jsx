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
    id: 7,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
  {
    id: 7,
    title: "Insula Septem",
    text: "Welcome to the society we will become the most exlusive underwate organization in the  metavers. wavy sharks public mint is coming soon the presale datewill be announceda as soon as we complete all the back-end work for the project.",
  },
];
const Roadmap = () => {
  return (
    <section className="top-section">
      <div className="w-9/12 mx-auto">
        <h1 className="uppercase text-center text-4xl font-bold text-lime-500">
          Wavy Sharks
        </h1>
        <h1 className="uppercase text-center text-4xl font-bold text-white">
          Socity Roadmap
        </h1>
        <div className="grid grid-cols-2 gap-6 py-28">
          <div className="pl-0 p-10">
            <Image width={700} height={700} src={img} alt="" />
          </div>
          <div className="pr-0 p-10">
            <div className="bg-[#14044d]  rounded-md h-4/5 before:relative overflow-y-scroll overscroll-y-contain">
              <h1 className="uppercase text-3xl bg-[#14044d] py-6 text-white text-center sticky top-0">
                Wavy Shark Society
              </h1>
              <div className="p-6">
                <ul className="text-white mt-6">
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

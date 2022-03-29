import Image from "next/image";
import profile1 from "/public/img/profile1.jpg";
import profile2 from "/public/img/profile2.jpg";
import profile3 from "/public/img/profile3.jpg";
import profile4 from "/public/img/profile4.jpg";

const data = [
  {
    id: 1,
    img: profile1,
    name: "@wavyshark",
    base: "cco",
  },
  {
    id: 2,
    img: profile2,
    name: "@wavyshark",
    base: "cmo",
  },
  {
    id: 3,
    img: profile3,
    name: "@wavyshark",
    base: "cto",
  },
  {
    id: 4,
    img: profile4,
    name: "@wavyshark",
    base: "ceo",
  },
];

const AnotherSection = () => {
  return (
    <section className="meet-section">
      <div className="w-9/12 mx-auto">
        <div className="grid grid-cols-4 gap-10 py-28">
          {data.map((item, i) => (
            <div key={i}>
              <Image className="rounded-md" src={item.img} alt="" />
              <div className="flex gap-1 justify-between pt-3">
                <h3 className="text-white text-2xl">{item.name}</h3>
                <button className="uppercase bg-[#12c805] brightness-100 px-3 py-1 rounded-md text-white">
                  {item.base}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnotherSection;

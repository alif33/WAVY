import Image from "next/image";

const SliderItems = ({ item }) => {
  return (
    <div className="px-3">
      <Image
        className="rounded-md"
        width={600}
        height={650}
        src={item.img}
        alt=""
      />
    </div>
  );
};

export default SliderItems;

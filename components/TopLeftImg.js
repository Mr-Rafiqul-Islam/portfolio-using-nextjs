import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute z-0 top-0 left-0 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
    <Image src={"/top-left-img.png"} width={400} height={400} alt="top-left"/>
  </div>;
};

export default TopLeftImg;

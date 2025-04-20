import Image from "next/image";

const Avatar = ({src}) => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={src} width={737} height={678} alt="avatar" className="w-full h-full translate-z-0"/>
  </div>;
};

export default Avatar;

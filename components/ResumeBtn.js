// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

const ResumeBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link
        href={"/Mr. Rafiqul's CV.pdf"}
        className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[185px] xl:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10"
      >
        <Image
          src={"/rounded-text2.png"}
          width={170}
          height={170}
          alt="projects"
          className="animate-spin-slow w-full h-full max-w-[170px] max-h-[170px]"
        />

        <HiArrowRight className="absolute text-3xl md:text-4xl md:group-hover:translate-x-2 trasition-all duration-300" />
      </Link>
    </div>
  );
};

export default ResumeBtn;

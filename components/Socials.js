// links
import Link from "next/link";
// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.linkedin.com/in/mr-rafiqul-islam/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://github.com/Mr-Rafiqul-Islam"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.facebook.com/mr.rafiqulthedev"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://www.instagram.com/mr.rafiqulthedev"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
    </div>
  );
};

export default Socials;

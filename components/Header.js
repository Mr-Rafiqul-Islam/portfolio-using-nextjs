// next image
import Image from "next/image";

// next link
import Link from "next/link";

// compoenents
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 py-8 lg:flex-row justify-between items-center">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src="/logo.png"
              width={220}
              height={48}
              alt="logo"
              property="true"
            />
          </Link>
          {/* socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;

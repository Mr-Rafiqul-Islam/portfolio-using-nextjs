// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className="fixed bottom-0 xl:right-[2%] z-50 w-full h-max xl:h-screen xl:max-w-md xl:w-16 flex flex-col items-center xl:justify-center">
      {/* inner */}
      <div className="flex xl:flex-col xl:gap-y-10 justify-between items-center xl:justify-center h-[80px] xl:h-max w-full px-10 md:px-40 xl:px-0 xl:py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((item) => (
          <Link href={item.path}
            key={item.name}
            className={`${
              item.path === pathname && "text-accent"
            } group hover:text-accent transition-all duration-300`}
          >
            {/* tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:block">
              <div className="bg-white p-[6px] text-primary rounded-[3px] flex items-center relative">
                <div className="text-[12px] leading-none font-semibold capitalize">{item.name}</div>
                  {/* triangle */}
                  <div className="w-0 h-0 border-solid border-l-8 border-l-white border-r-0 border-y-transparent border-y-[6px] absolute -right-2">

                  </div>
              </div>
            </div>
            {/* icon */}
            <div>{item.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

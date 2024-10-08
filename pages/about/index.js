import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";
import ResumeBtn from "../../components/ResumeBtn";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={2}/>,
          <FaJs key={3}/>,
          <FaReact key={4}/>,
          <SiNextdotjs key={5}/>,
          <SiFramer key={6}/>,
          <FaWordpress key={7}/>,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key={8}/>, <SiAdobexd key={9}/>, <SiAdobephotoshop key={10}/>],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Top Contributing Ambassador Awards",
        stage: "2024",
      },
      {
        title: "Most Energetic Ambassador Awards ",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior Web Developer - Byte Care LTD",
        stage: "2024 - Present",
      },
      {
        title: "Operation Leader - Creative Cultural Club",
        stage: "2023-2024",
      },
      {
        title: "Campus Ambassador - Creative IT Institute",
        stage: "2022-2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Front-End Development With REACT- Creative IT Institute",
        stage: "2024",
      },
      {
        title: "BSc In Mathematics - Dhaka College, Dhaka, BD",
        stage: "2022-2025",
      },
      {
        title: "Hsc - Kabi Nazrul Govt. College, Dhaka, BD",
        stage: "2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  //  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      {/* about page content */}
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/* text & column-1*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-12 lg:mt-0"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago, I began freelancing as a developer. Since then, I&apos;ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info & column-2*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:bg-accent  hover:text-accent transition-all duration-300 hover:after:transition-all hover:after:duration-300 ${
                  index === itemIndex &&
                  "after:w-[100%] text-accent after:bg-accent after:transition-all after:duration-300"
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2  gap-y-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light">{item.title}</div>
                {/* stage */}
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div className="text-2xl text-white hover:text-accent transition-all duration-300" key={iconIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto xl:mx-0 mt-2">
            <ResumeBtn/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

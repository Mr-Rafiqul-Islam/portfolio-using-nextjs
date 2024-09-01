// components
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-32 ">
      <Circles />
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text*/}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Lets <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border flex items-center justify-center max-w-[170px] px-8 transition-all duration-300 overflow-hidden border-white/50 hover:border-accent group">
              <span className="group-hover:opacity-0 group-hover:-translate-y-[120%] transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-300 -translate-y-[120%] opacity-0 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;

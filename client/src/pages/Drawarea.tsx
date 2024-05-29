import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Hero from "../assets/images/hero.webp";
import Realtime from "../assets/images/realtime.svg";
import women from "../assets/icons/humansitting.svg";
import manwoment from "../assets/icons/manhuman.svg";
import { useRef } from "react";

export function DrawArea() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }} // Add transition properties here
    >
      <motion.div className="w-full flex justify-center mt-10 flex-col items-center gap-6">
        <motion.h1
          className="font-main text-4xl md:text-5xl text-center text-white font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Add transition properties here
        >
          Planning & Discussion made easy
        </motion.h1>
        <motion.h2
          className="font-main text-gray-400 font-[600] text-[16px] md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} // Add transition properties here
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} // Add transition properties here
            className=""
          >
            L
          </motion.span>
          aunch
          <motion.span className=""> a</motion.span>
          nd
          <motion.span className=""> g</motion.span>
          row
          <motion.span className=""> y</motion.span>
          our
          <motion.span className="font-semibold"> d</motion.span>
          ream
          <motion.span className="font-semibold"> b</motion.span>
          usiness
        </motion.h2>
      </motion.div>
      <motion.div className="w-full justify-center mt-5 flex">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} // Add transition properties here
          className="flex gap-2"
        >
          <input
            type="text"
            className="font-main outline-none border-none h-12 md:h-14 rounded-md px-4 items-center w-64 lg:w-96 text-gray-700"
            placeholder="Enter your email"
          />
          <button className="h-12 md:h-14 px-3  md:min-w-36 bg-[#3f59f6] md:px-6 rounded-md text-white flex gap-2 items-center justify-center font-semibold">
            Get started <ChevronRight className="w-5" />
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }} // Add transition properties here
        className="w-full h-full flex justify-center mt-5 "
      >
        <img src={Hero} className="lg:w-[65%] w-[95%]" alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }} // Add transition properties here
        className="w-full bg-white flex justify-center py-4"
      >
        <motion.div
          ref={ref}
          className="rounded-md border mx-auto w-[90%] lg:w-[80%] shadow-md relative"
        >
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="hidden lg:flex absolute -left-36 -bottom-9 h-full w-56 justify-start z-20 items-end"
          >
            <img src={women} className="min-w-96" alt="" />
          </motion.div>
          <img src={Realtime} className="w-full" alt="" />
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            className="hidden lg:flex absolute -right-24 top-0 h-full w-56 justify-start z-20 items-end"
          >
            <img src={manwoment} className="w-48" alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
     
    </motion.div>
  );
}

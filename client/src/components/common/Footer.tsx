import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.main
      className="w-full h-56 flex justify-center py-2 items-center flex-col gap-7"
      style={{ background: `rgb(28, 28, 30)` }}
    >
      <motion.h1 className="text-white text-3xl md:text-4xl text-center">
        Let's get start our discussion today onward
      </motion.h1>
      <motion.button className="h-10 rounded-md px-4 min-w-24 bg-[#3f59f6] font-semibold text-white">
        Start discussion
      </motion.button>
    </motion.main>
  );
}

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const modalVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

interface ChildProp {
  Trigger: ReactNode;
  children: ReactNode;
  title?: string;
}
export function CustomModal({ Trigger, title, children }: ChildProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <div>
      <div onClick={openModal} className="cursor-pointer">{Trigger}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={modalVariants}
            // transition={{duration: 0.1, ease: "easeOut", delay: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-10"
          >
            <motion.div className="bg-white p-6 rounded-md w-[90%] sm:w-[75%] md:w-[66%] lg:w-[43%] xl:w-[35%]">
              <motion.div className="w-full flex justify-between text-black">
                <h2 className="text-2xl mb-4">{title}</h2>
                <X className="w-5 cursor-pointer" onClick={closeModal} />
              </motion.div>
              <motion.div>{children}</motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion} from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const items = [{name:"Items1"},{name:"Items2"},{name:"Items3"},{name:"Items4"}]

const listVariant = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  }
  

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
    className="mt-2"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="bg-white px-4 py-2 rounded-sm text-black flex justify-between items-center w-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
      className="bg-white text-black w-60 mt-2 p-2"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        
       

        <motion.li variants={itemVariants}  whileHover={{ scale:0.95 }}  className="bg-black my-2">Item 1 </motion.li>
        <motion.li variants={itemVariants}  whileHover={{ scale:0.95 }}  className="bg-black my-2">Item 2 </motion.li>
        <motion.li variants={itemVariants}  whileHover={{ scale:0.95 }}  className="bg-black my-2">Item 3 </motion.li>
        <motion.li variants={itemVariants}  whileHover={{ scale:0.95 }}  className="bg-black my-2">Item 4 </motion.li>
        <motion.li variants={itemVariants}  whileHover={{ scale:0.95 }}  className="bg-black my-2">Item 5 </motion.li>
    
      </motion.ul>
    </motion.nav>
  );
}

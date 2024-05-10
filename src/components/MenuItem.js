import * as React from "react";
import { motion } from "framer-motion";
import '../app/styles.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({menus}) => {

const List = menus.map(object => (
  <motion.li key={object.id} className="menu-list-li text-black"  
     variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
      <div className="text-placeholder px-2 py-2" style={{border: `2px solid ${colors[object.id]}`}}>
{object.label}
 </div>
  </motion.li>
));

return (
  <>
    {List}
  </>
);


};

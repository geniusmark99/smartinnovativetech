import React from 'react'
import {motion,AnimatePresence } from 'framer-motion';

export default function ServiceWidget({content,onClose}) {
  return (
    <AnimatePresence>

    <motion.div initial={{ scale:0 }} animate={{ scale:1 }} exit={{ scale:0 }} className='fixed h-full z-[1000] bg-white/20 w-full' 
    
    >
<button onClick={onClose} className='rounded-full size-10 bg-white absolute right-2 top-2 text-black flex justify-center items-center text-xl'>
    &times;
</button>
        {content}
    </motion.div>
    </AnimatePresence>

  )
}

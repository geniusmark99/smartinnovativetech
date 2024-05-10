"use client";
import { delay, motion, useCycle,Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Nav } from "../Nav";
import Link from "next/link";
import {useRouter, usePathname, useSearchParams } from 'next/navigation'
import { MenuItem } from "../MenuItem";
import Image from "next/image";
import localFont from 'next/font/local'
import ModalWidget from "../ModalWidget";

const DelaGothic = localFont({
  src: '../../fonts/DelaGothicOne.ttf',
  display: 'swap',
})

const poppins = localFont({
  src: '../../fonts/Poppins/Poppins-Medium.ttf',
  display: 'swap',
})

function useDimensions(ref) 
{
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};


const Path = props => (
    <motion.path
      fill="white"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

const sidebar = {
    open: (height = 500) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      backgroundColor:"white",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 0px 0px)",
      backgroundColor:"white",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemIds = [
    {
    id:1,
    label:"About me"
  },
  {
    id:2,
    label:"My blog"
  },

  {
    id:3,
    label:"Services"
  },
  {
    id:4,
    label:"Training"
  },

]


const itemVariants = {
  open: i => ({
    x:-15,
    opacity: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.25, }
  }),
  closed: i=>  ({ opacity: 1, x: 0, transition: { duration: 0.2, delay: i * 0.2 }})
};

export default function HeaderWidget(){

const router = useRouter();

    const [isOpen, toggleOpen] = useCycle(false, true);
    const [isModalOpen,setModalOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

const openModalWidget = ()=> {
  setModalOpen(true);
}

const closeModalWidget= () => {
setModalOpen(false);
}

const [isSearcHBarOpen, setIsSearchBarOpen] = useState(false);


return(
    <>
<motion.header 
  initial={false}
  animate={isSearcHBarOpen ? "open" : "closed"}
className={ `${isOpen ? "bg-white border-neutral-800/20 lg:bg-black lg:border-neutral-800 " : "bg-black border-neutral-800 "} bg-gradient-to-b from-inherit fixed px-4 z-[1000] 
justify-between  items-center left-0 top-0 flex w-full 
border-b  pb-2 pt-4 backdrop-blur-2xl lg:w-full  ${DelaGothic.className}`}>
<div className="relative z-[1000]">
<svg  className={ `${isOpen ? "fill-black transition-all lg:fill-white" : "fill-white size-10"} `}  width="46" height="28" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.23227 22.154C6.10294 22.154 5.09094 21.9707 4.19627 21.604C3.30161 21.2373 2.58294 20.6947 2.04027 19.976C1.51227 19.2573 1.23361 18.392 1.20427 17.38H5.20827C5.26694 17.952 5.46494 18.392 5.80227 18.7C6.13961 18.9933 6.57961 19.14 7.12227 19.14C7.67961 19.14 8.11961 19.0153 8.44227 18.766C8.76494 18.502 8.92627 18.1427 8.92627 17.688C8.92627 17.3067 8.79427 16.9913 8.53027 16.742C8.28094 16.4927 7.96561 16.2873 7.58427 16.126C7.21761 15.9647 6.68961 15.7813 6.00027 15.576C5.00294 15.268 4.18894 14.96 3.55827 14.652C2.92761 14.344 2.38494 13.8893 1.93027 13.288C1.47561 12.6867 1.24827 11.902 1.24827 10.934C1.24827 9.49667 1.76894 8.37467 2.81027 7.568C3.85161 6.74667 5.20827 6.336 6.88027 6.336C8.58161 6.336 9.95294 6.74667 10.9943 7.568C12.0356 8.37467 12.5929 9.504 12.6663 10.956H8.59627C8.56694 10.4573 8.38361 10.0687 8.04627 9.79C7.70894 9.49667 7.27627 9.35 6.74827 9.35C6.29361 9.35 5.92694 9.47467 5.64827 9.724C5.36961 9.95867 5.23027 10.3033 5.23027 10.758C5.23027 11.2567 5.46494 11.6453 5.93427 11.924C6.40361 12.2027 7.13694 12.5033 8.13427 12.826C9.13161 13.1633 9.93827 13.486 10.5543 13.794C11.1849 14.102 11.7276 14.5493 12.1823 15.136C12.6369 15.7227 12.8643 16.478 12.8643 17.402C12.8643 18.282 12.6369 19.0813 12.1823 19.8C11.7423 20.5187 11.0969 21.0907 10.2463 21.516C9.39561 21.9413 8.39094 22.154 7.23227 22.154ZM16.9394 22.176C16.2794 22.176 15.7368 21.9853 15.3114 21.604C14.9008 21.208 14.6954 20.724 14.6954 20.152C14.6954 19.5653 14.9008 19.074 15.3114 18.678C15.7368 18.282 16.2794 18.084 16.9394 18.084C17.5848 18.084 18.1128 18.282 18.5234 18.678C18.9488 19.074 19.1614 19.5653 19.1614 20.152C19.1614 20.724 18.9488 21.208 18.5234 21.604C18.1128 21.9853 17.5848 22.176 16.9394 22.176ZM25.1504 6.556V22H21.3884V6.556H25.1504ZM29.6367 22.176C28.9767 22.176 28.434 21.9853 28.0087 21.604C27.598 21.208 27.3927 20.724 27.3927 20.152C27.3927 19.5653 27.598 19.074 28.0087 18.678C28.434 18.282 28.9767 18.084 29.6367 18.084C30.282 18.084 30.81 18.282 31.2207 18.678C31.646 19.074 31.8587 19.5653 31.8587 20.152C31.8587 20.724 31.646 21.208 31.2207 21.604C30.81 21.9853 30.282 22.176 29.6367 22.176ZM45.1957 6.556V9.57H41.1037V22H37.3417V9.57H33.2497V6.556H45.1957Z"/>
<path d="M2 25H17V28H2V25Z" />
<path d="M30 0H45V3H30V0Z" />
</svg>

</div>

<ul className="hidden lg:flex justify-between lg:w-[600px]">
  <motion.li variants={itemVariants} custom={1}>
<Link href="/" className={`desktop-link ${usePathname() === '/' ? 'active' : ''}`}>
Home
</Link>
</motion.li>

<motion.li variants={itemVariants} custom={1.5}>
<Link href="/product"  className={`desktop-link ${usePathname() === '/product' ? 'active' : ''}`}>
Products
</Link>
</motion.li>

<motion.li variants={itemVariants} custom={2}>
<Link  href="/services" className={`desktop-link ${usePathname() === '/services' ? 'active' : 
''}`}>
Services
</Link>
</motion.li>

<motion.li variants={itemVariants} custom={2.5}>
<Link href="our-team" className={`desktop-link ${usePathname() === '/our-team' ? 'active' : 
''}`}>
Our Team
</Link>
</motion.li>

<motion.li variants={itemVariants} custom={3}>
<Link href="/project" className={`desktop-link ${usePathname() === '/project' ? 'active' : 
''}`}>
Projects
</Link>
</motion.li>

</ul>


<div className="flex gap-x-5 absolute z-[1000] right-4">
{/* HERE */}

<button onClick={()=> toggleOpen()} 
className={`${isOpen ? "bg-black" : "bg-white"} relative z-[1000] p-0 m-0 rounded-md flex justify-between gap-x-1 items-center w-auto px-2 h-6  lg:hidden transition-all`}
>

   <div className=" h-[6px] rounded-md flex flex-col gap-y-[2px] justify-center items-center">
         <div className={`${isOpen ? "bg-white translate-y-1 rotate-[30deg]" :"bg-black"} transition-all h-[1.5px] w-3`}></div>
         <div className={`${isOpen ? "bg-white -rotate-[30deg] w-3" :"bg-black"} transition-all h-[1.5px] w-2`}></div>
   </div>
  
  <span className={`${isOpen ? 'text-white' : 'text-black'}`}>menu</span>

  </button>
  
</div>

<motion.button 
onClick={() => setIsSearchBarOpen(!isSearcHBarOpen)}

whileHover={{ 
  scale:1.2,
 }} className="hidden lg:flex border-none focus:border-none relative">

  <svg className="size-5 fill-white">
  <g id="lupe">
			<path d="M20,8c0-4.4-3.6-8-8-8C7.6,0,4,3.6,4,8c0,1.9,0.6,3.6,1.7,4.9L0,18.6L1.4,20l7.1-7.1l-0.2-0.2 C6.9,11.6,6,9.9,6,8c0-3.3,2.7-6,6-6c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6c-0.7,0-1.3-0.1-1.9-0.3L10,13.7l-1.5,1.5l0.4,0.2 c1,0.4,2.1,0.7,3.2,0.7C16.4,16,20,12.4,20,8z"/>
		</g>
  </svg>
</motion.button>

<motion.ul
      className=" mt-2 z-[1000] bg-black p-1 top-[-0] left-[-0.2px] mx-3 absolute flex justify-between items-center w-full backdrop-blur-2xl lg:w-full
      "
        variants={{
          open: {
            opacity:1,
            x:-15,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              delay:0.99,
              // delayChildren: 0.3,
              // staggerChildren: 0.05
            }
          },
          closed: {
            opacity:0,
            x:0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isSearcHBarOpen ? "auto" : "none" }}
      >

<div className="relative z-[1000]">
<svg  className={ `${isOpen ? "fill-black transition-all lg:fill-white" : "fill-white size-10"} `}  width="46" height="28" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.23227 22.154C6.10294 22.154 5.09094 21.9707 4.19627 21.604C3.30161 21.2373 2.58294 20.6947 2.04027 19.976C1.51227 19.2573 1.23361 18.392 1.20427 17.38H5.20827C5.26694 17.952 5.46494 18.392 5.80227 18.7C6.13961 18.9933 6.57961 19.14 7.12227 19.14C7.67961 19.14 8.11961 19.0153 8.44227 18.766C8.76494 18.502 8.92627 18.1427 8.92627 17.688C8.92627 17.3067 8.79427 16.9913 8.53027 16.742C8.28094 16.4927 7.96561 16.2873 7.58427 16.126C7.21761 15.9647 6.68961 15.7813 6.00027 15.576C5.00294 15.268 4.18894 14.96 3.55827 14.652C2.92761 14.344 2.38494 13.8893 1.93027 13.288C1.47561 12.6867 1.24827 11.902 1.24827 10.934C1.24827 9.49667 1.76894 8.37467 2.81027 7.568C3.85161 6.74667 5.20827 6.336 6.88027 6.336C8.58161 6.336 9.95294 6.74667 10.9943 7.568C12.0356 8.37467 12.5929 9.504 12.6663 10.956H8.59627C8.56694 10.4573 8.38361 10.0687 8.04627 9.79C7.70894 9.49667 7.27627 9.35 6.74827 9.35C6.29361 9.35 5.92694 9.47467 5.64827 9.724C5.36961 9.95867 5.23027 10.3033 5.23027 10.758C5.23027 11.2567 5.46494 11.6453 5.93427 11.924C6.40361 12.2027 7.13694 12.5033 8.13427 12.826C9.13161 13.1633 9.93827 13.486 10.5543 13.794C11.1849 14.102 11.7276 14.5493 12.1823 15.136C12.6369 15.7227 12.8643 16.478 12.8643 17.402C12.8643 18.282 12.6369 19.0813 12.1823 19.8C11.7423 20.5187 11.0969 21.0907 10.2463 21.516C9.39561 21.9413 8.39094 22.154 7.23227 22.154ZM16.9394 22.176C16.2794 22.176 15.7368 21.9853 15.3114 21.604C14.9008 21.208 14.6954 20.724 14.6954 20.152C14.6954 19.5653 14.9008 19.074 15.3114 18.678C15.7368 18.282 16.2794 18.084 16.9394 18.084C17.5848 18.084 18.1128 18.282 18.5234 18.678C18.9488 19.074 19.1614 19.5653 19.1614 20.152C19.1614 20.724 18.9488 21.208 18.5234 21.604C18.1128 21.9853 17.5848 22.176 16.9394 22.176ZM25.1504 6.556V22H21.3884V6.556H25.1504ZM29.6367 22.176C28.9767 22.176 28.434 21.9853 28.0087 21.604C27.598 21.208 27.3927 20.724 27.3927 20.152C27.3927 19.5653 27.598 19.074 28.0087 18.678C28.434 18.282 28.9767 18.084 29.6367 18.084C30.282 18.084 30.81 18.282 31.2207 18.678C31.646 19.074 31.8587 19.5653 31.8587 20.152C31.8587 20.724 31.646 21.208 31.2207 21.604C30.81 21.9853 30.282 22.176 29.6367 22.176ZM45.1957 6.556V9.57H41.1037V22H37.3417V9.57H33.2497V6.556H45.1957Z"/>
<path d="M2 25H17V28H2V25Z" />
<path d="M30 0H45V3H30V0Z" />
</svg>

</div>

        <input className="bg-[#101010] focus:border-none focus:outline-none text-white border border-transparent  w-[400px] py-3 px-3 rounded-md" type="text"/>
        
        <motion.button 
        whileHover={{ scale:0.95 }}
        whileTap={{ scale:0.5 }}
        className={`${poppins.className} bg-[#101010] rounded-md p-2`}
onClick={() => setIsSearchBarOpen(false)}
        
        >Esc</motion.button>
        </motion.ul>

</motion.header>

<motion.nav
initial={false}
animate={isOpen ? "open" : "closed"}
custom={height}
ref={containerRef}
className="lg:hidden mobile-nav-sidebar"
>
<motion.div className="background" variants={sidebar} />
<motion.ul variants={variants} 
className="menu-list-ul"
>
{
<MenuItem menus={itemIds}/>
}
</motion.ul>
</motion.nav>

    </>
);


} 
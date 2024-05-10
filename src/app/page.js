"use client";
import HeaderWidget from "@/components/general/HeaderWidget";
import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";
import MacqueeWidget from "@/components/MacqueeWidget";
import { motion, useScroll } from "framer-motion"
import { useRef, useState} from "react";

const DelaGothic = localFont({
  src: '../fonts/DelaGothicOne.ttf',
  display: 'swap',
})


const Poppins = localFont({
  src: '../fonts/Poppins/Poppins-Medium.ttf',
  display: 'swap',
})



export default function Home() {
  const scrollRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [isGetStartedOpen, setisGetStartedOpen] = useState(false);

  

  return (
    <motion.main
    ref={scrollRef}
     className="flex min-h-screen flex-col items-center justify-between bg-black">
    {/* max-w-5xl  */}
      <div className="z-10 w-full items-center justify-between text-sm lg:flex flex-col">
      <HeaderWidget/>
      <section className="flex justify-center w-full h-screen flex-col" 
       style={{ 
        backgroundImage:`url('/banner-bg.svg')`,
        backgroundRepeat:'no-repeat',
       backgroundSize: 'contain', backgroundPosition: 'center', 
        }}
       >

 <div className="px-4 flex justify-center items-center flex-col">

      <h1 className={`${DelaGothic.className} mt-10 tracking-wide leading-10 text-center font-black 
      text-3xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 via-blue-500 to-emerald-500`}>
        DREAM IT, <br/>
        WE BUILT IT
      </h1>
      <p className={`${Poppins.className  } max-w-3xl font-medium mt-10 text-center text-base leading-7`}>
Unlock the Power of Innovation with Smart Innovative Tech
Ready to soar above the competition? Say hello to seamless digital transformation with our cutting-edge tech solution! Whether you're dreaming of a sleek mobile app, a stunning website, or a game-changing brand marketing strategy, we've got you covered
      </p>

<motion.div className="flex justify-center w-full py-4 mt-7" 
  animate={isGetStartedOpen ? "open" : "closed"}

>

      <motion.button 
      whileTap={{ scale: 0.97 }} 
      whileHover={{ scale:0.97}}
         onClick={() => setisGetStartedOpen(!isGetStartedOpen)}
           
       className="bg-gradient-to-br hover:from-teal-500 hover:via-sky-500 hover:to-emerald-500 from-cyan-800 shadow-md shadow-cyan-600/20 hover:shadow-lg scale-95 hover:bg-opacity-95 hover:scale-100 via-blue-500 to-emerald-500 transition-all text-white px-4 py-3 rounded-md text-base lg:text-lg">
       Get Started
      </motion.button>

      <motion.div 
         variants={{
          open: {
            opacity:1,
            x:1,
            scale:1,
            transition: {
              type: "spring",
              bounce: 0.3,
              duration: 0.3,
              delay:0.2,
              // delayChildren: 0.3,
              // staggerChildren: 0.05
            }
          },
          closed: {
            opacity:0,
            x:0,
            scale:0,
            transition: {
              type: "spring",
              bounce: 0.1,
              duration: 0.3,
            }
          }
        }}
      
      className="absolute top-[74px] z-10  max-w-xl min-w-[90%] lg:max-w-5xl lg:min-w-[500px] bg-[#101010] mx-10   p-3 rounded-md" >
 
 <button 
  onClick={() => setisGetStartedOpen(!isGetStartedOpen)}
 
 className="bg-neutral-700 text-xl flex justify-center items-center rounded-full size-10 p-3 border-none focus:border-none outline-none absolute right-1 top-0 ">
  &times;
 </button>
 <div className="rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
  <div className="p-4 sm:p-7">
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Don't have an account yet?
        <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
          Sign up here
        </a>
      </p>
    </div>

    <div className="mt-5">
      <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
          <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
          <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
          <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
          <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
        </svg>
        Sign in with Google
      </button>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

      <form>
        <div className="grid gap-y-4">
          <div>
            <label for="email" className="block text-sm mb-2 dark:text-white">Email address</label>
            <div className="relative">
              <input type="email" id="email" name="email" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="email-error"/>
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
              <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
            </div>
            <div className="relative">
              <input type="password" id="password" name="password" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="password-error"/>
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>

          <div className="flex items-center">
            <div className="flex">
              <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
            </div>
            <div className="ms-3">
              <label for="remember-me" className="text-sm dark:text-white">Remember me</label>
            </div>
          </div>

          <button type="submit" 
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm 
          font-semibold rounded-lg border border-transparent bg-gradient-to-tl to-blue-500 from-cyan-400
            text-white 
          hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>
 
      </motion.div>
</motion.div>

 </div>
      
 <MacqueeWidget/>
      </section>


      <section className="relative h-screen w-full bg-white text-black">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}

        className="left-2 top-2 absolute rounded-full size-[100px] lg:size-[200px] bg-gradient-to-tr from-cyan-600 via-sky-600 to-emerald-600">
        </motion.div>

        <div className="right-2 bottom-2 absolute rounded-full size-[100px] bg-gradient-to-tr from-orange-600 to-emerald-600">
        </div>

        

        <div className={`flex justify-center items-center h-[50%] lg:mt-20`}>
          
 <h1 className={`${DelaGothic.className}  
 leading-12 text-center font-black text-2xl lg:text-6xl text-transparent bg-clip-text 
 bg-gradient-to-l from-cyan-500 via-blue-500 to-emerald-500 mx-10`}>
  WE ARE GOOD FOR YOUR BUSINESS,WE STICK WITH YOU ALL THE WAY
 </h1>
        </div>
      </section>

      </div>
    </motion.main>
  );
}

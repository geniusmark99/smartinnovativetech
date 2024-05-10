import Image from "next/image"
import gradientImg from "/public/images/bg-gradient.png";
export default function SectionWidget() {
    return <>
    
<div className="relative overflow-hidden mt-20">
  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
  </div>

  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          My Journey as a successful Trader
        </p>


        <div className="mt-5 max-w-3xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            My Intuitive Tough Journey on Trading
          </h1>

          <div className="mt-10 relative flex">
            <div className="relativex justify-center mt-10 items-center flex before:absolute before:content-[''] before:h-full px-3 before:bg-gradient-to-tr before:from-cyan-500 before:to-transparent  before:w-[1px]  before:left-1 before:top-0 lg:before:top-1 lg:before:left-0"></div>
           
            {/* <div className="flex flex-col justify-between h-[400px] relative w-8 lg:w-full">
             <div className="size-2 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full relative before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px]"></div>
             <div className="size-2 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full relative before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px]"></div>
             <div className="size-2 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full relative before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px] "></div>
            </div> */}

            <div className="flex justify-between flex-col mt-5 lg:mt-10 gap-y-10">
            <article className="text-left ml-2 lg:ml-0">
              <div className="flex justify-between mb-5 relative">
             <div className="size-2  absolute top-2 -left-8 lg:-left-7 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px]"></div>

              <time className="font-bold">Nov 27, 2019</time>
              <h1 className="text-base md:text-xl font-semibold">The Year I began</h1>
              </div>

              <div className="flex flex-col gap-y-5 shadow-md shadow-gray-950/5">               
              
               <div className="bg-gradient-to-b from-gray-400/40 to-transparent p-[1px] rounded-[1.5rem] mb-4">
                  <Image  src={gradientImg} alt="Gradient Image" className="rounded-[inherit]"/>
                </div>

                <div className="text-left text-base lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                </div>

              </div>
            </article>

            <article className="text-left ml-2 lg:ml-0">
              <div className="flex justify-between mb-5 relative">
             <div className="size-2  absolute top-2 -left-8 lg:-left-7 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px]"></div>
                
              <time className="font-bold">Nov 27, 2019</time>
              <h1 className="text-base md:text-xl font-semibold">The Year I began</h1>
              </div>

              <div className="flex flex-col gap-y-5 shadow-md shadow-gray-950/5">               
              
               <div className="bg-gradient-to-b from-gray-400/40 to-transparent p-[1px] rounded-[1.5rem] mb-4">
                  {/* <img src="../images/bg-gradient.png" alt="" className="rounded-[inherit]"/> */}
                  <Image  src={gradientImg} alt="Gradient Image" className="rounded-[inherit]"/>

                </div>

                <div className="text-left text-base lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                </div>

              </div>
            </article>


              <article className="text-left ml-2 lg:ml-0">
              <div className="flex justify-between mb-5 relative">
             <div className="size-2  absolute top-2 -left-8 lg:-left-7 bg-gradient-to-br from-teal-500 to-blue-600 flex justify-center items-center rounded-full before:size-4 before:content-[''] before:bg-red-200/20 before:absolute  before:rounded-full before:left-[-4px] before:top-[-4px]"></div>

              <time className="font-bold">Nov 27, 2019</time>
              <h1 className="text-base md:text-xl font-semibold">The Year I began</h1>
              </div>

              <div className="flex flex-col gap-y-5 shadow-md shadow-gray-950/5">               
              
               <div className="bg-gradient-to-b from-gray-400/40 to-transparent p-[1px] rounded-[1.5rem] mb-4">
                  <Image  src={gradientImg} alt="Gradient Image" className="rounded-[inherit]"/>

                </div>

                <div className="text-left text-base lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                </div>

              </div>
            </article>
            </div>

          </div>

        </div>


       
      </div>
    </div>
  </div>
</div>
    </>
}
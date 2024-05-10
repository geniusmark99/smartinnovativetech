"use client";
import Image from "next/image";
import localFont from 'next/font/local'
import SliderWidget from "./SliderWidget";
import sabiGalImg from "/public/images/sabii_gal3.png"



const Futura = localFont({
    src:'../app/fonts/futura/futura-pt-heavy.otf',
  });

  const SabiiImages = [
 './images/sabii_gal.png',
 './images/sabii_gal3.png',
 './images/sabii_gal2.png',
  ];

export default function HeaderMeWidget(){
return <>
<div className="flex flex-col gap-0 lg:mt-40 mt-20 justify-center items-center h-[70%] lg:h-[60%]  z-[-2]">

<div className="container mx-auto mb-40">
    <div className="w-full h-full lg:h-[500px] flex flex-col lg:flex-row">
        {/* <SliderWidget images={SabiiImages}/> */}
    <Image
    alt="Sabi Gal Second Image"
           src={sabiGalImg}
           priority
            className="w-auto md:w-[350px] lg:w-[500px] h-full object-cover rounded-lg"
          />

          <div className="w-full lg:w-8/12">
          <div className=" max-w-[848px] w-full mx-auto mt-[40px] flex flex-col justify-center items-center mb-10">
    <a href="#testimonials" className="transition-all hover:scale-95 hover:shadow-md hover:shadow-blue-600/10 mb-2 lg:mb-10 flex flex-nowrap bg-white/10 items-center gap-x-4 px-4 py-1 rounded-full border border-1 border-white/20" 

 >
        <div className="flex justify-between">
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c15b1339ff60443249_Man.webp 1000w" alt="" className="size-10 rounded-full" />
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c06315ff339fdf340a_Woman-3.webp 1000w" alt="" className="size-10 rounded-full -mx-4" />
           <Image width={100} height={100}   src="https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 24px, 32px" srcSet="https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8-p-500.webp 500w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8-p-800.webp 800w, https://assets-global.website-files.com/65675497339de7489174ba89/656766c0ccd23842c8a1090f_Man-8.webp 1000w" alt="" className="size-10 rounded-full -mx-2" />
        </div>
        <div className="w-auto flex gap-x-3 items-center">
            <div className="">What Others Say About Me</div>
           <Image width={100} height={100} className="size-4"   src="https://assets-global.website-files.com/65675497339de7489174ba89/65676a663ec7c67855c2f433_Arrow%20Right.svg" loading="lazy" alt="" />
        </div> 
    </a>

    <h1 id="scroll-in-h1" className={`${Futura.className} mb-8 text-center text-white tracking-[-1.2px] uppercase mt-0 font-semibold text-3xl  lg:leading-[92%]`}>
        <span className="hero-h1 text-blue-600">
            <span className="tricksword">
                <span className="letter">G</span>
                <span className="letter">r</span>
                <span className="letter">o</span>
                <span className="letter">w</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">P</span>
                <span className="letter">R</span>
                <span className="letter">O</span>
                <span className="letter">F</span>
                <span className="letter">I</span>
                <span className="letter">T</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">W</span>
                <span className="letter">i</span>
                <span className="letter">t</span>
                <span className="letter">h</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">M</span>
                <span className="letter">Y</span>
            </span>
        </span>

        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">t</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">d</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">g</span>
            </span>
        </span>
        <span className="hero-h1">
            <span className="tricksword">
                <span className="letter">S</span>
                <span className="letter">t</span>
                <span className="letter">r</span>
                <span className="letter">a</span>
                <span className="letter">t</span>
                <span className="letter">e</span>
                <span className="letter">g</span>
                <span className="letter">y</span>
            </span>
        </span>
      
    </h1>

    <p  className="text-[18px] text-center max-w-[320px] lg:max-w-[500px] mx-auto mb-10 hidden lg:block">My sales and marketing solutions are strategically assigned each month to adapt quickly and hit your goals.</p> 

    <a href="https://api.whatsapp.com/send?phone=2347086309488" className="relative inline-block min-w-60  p-px rounded-lg sm:w-auto group h-11 bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100">
    <p className="relative flex justify-center h-full text-sm md:text-base font-medium items-center text-white tracking-wide bg-gray-950 px-[calc(1.5rem-1px)] rounded-[calc(0.5rem-1px)] group-hover:bg-gray-900 transition duration-300"> 
    Book a Consultation
    </p>
</a>

</div> 
          </div>
        </div>

    </div>

</div>


</>
}
"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import localFont from 'next/font/local';
import { horizontalLoop } from './helper/horizontalLoop';
import Image from 'next/image';
import ServiceWidget from './ServiceWidget';


const DelaGothic = localFont({
    src: '../fonts/DelaGothicOne.ttf',
    display: 'swap',
  })

export default function MacqueeWidget() {

    const boxesContainer = useRef();
    const [showModal, setShowModal] = useState(false);

   
    useGSAP(
        () => {
          const boxes = gsap.utils.toArray('.box');
        
          const loop = horizontalLoop(boxes, { repeat: -1 });
        },
        {
          scope: boxesContainer,
        }
      );

  return (
    <>
    {(showModal ? <ServiceWidget content="Brandinf" onClose={()=>setShowModal(false)}/> : "")}
    <div className={`${DelaGothic.className} h-[80px] flex justify-between 
    lg:pr-10
    items-center 
    gap-x-10
    absolute bottom-0
    mt-20
    bg-[#101010]
    leading-10 overflow-hidden w-full z-10 border-t-[0.5px] border-b-[0.5px]  border-neutral-800`}
 ref={boxesContainer}>
    <div 
    onClick={()=>{
setShowModal(!showModal)
    }}
    className="box hover:after:from-teal-500 hover:after:to-green-500 hover:before:from-green-500 hover:before:to-teal-500">
        <div className=''>
            <Image width={20} height={20}   src="/icons/branding.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
        <span className='box-text from-teal-500 to-green-500'>
        Branding
        </span>
      </div>

      <div 
    className="box hover:after:from-teal-500 hover:after:to-cyan-500 hover:before:from-emerald-500 hover:before:to-cyan-500"
    
    >
       <div className=''>
            <Image width={20} height={20} src="/icons/website.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
        <span className='box-text from-cyan-500 to-emerald-500'>
        Website 
        </span>
      </div>


      <div 
    className="box hover:after:from-indigo-500 hover:after:to-blue-500 hover:before:from-blue-500 hover:before:to-indigo-500"
    
    >
              <div className=''>
            <Image width={20} height={20} src="/icons/mobile.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
        <span className='box-text from-indigo-500 to-blue-500'>
        Mobile app
        </span>
      </div>


    

      <div 
    className="box hover:after:from-green-500 hover:after:to-emerald-500 hover:before:from-green-500 hover:before:to-indigo-500"

    
    >
           <div className=''>
            <Image width={20} height={20} src="/icons/android.svg" alt="Brandinf Icon" className='size-8'/>
        </div>

     <span className='box-text from-green-500 to-emerald-400'>
     Android apps
        </span>
      </div>

      <div 
    className="box hover:after:from-blue-500 hover:after:to-indigo-500 hover:before:from-blue-500 hover:before:to-indigo-500"
    
    >
       <div className=''>
            <Image width={20} height={20} src="/icons/ios.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
        <span className='box-text from-blue-600 to-indigo-600'>
     iOS apps
        </span>
      </div>


      <div 
    className="box hover:after:from-blue-500 hover:after:to-indigo-500 hover:before:from-blue-500 hover:before:to-indigo-500"

    
    >
       <div className=''>
            <Image width={20} height={20} src="/icons/graphics.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
      <span className='box-text from-fuchsia-500 to-sky-500'>
     Graphics
        </span>
      </div>

      <div 
    className="box hover:after:from-blue-500 hover:after:to-indigo-500 hover:before:from-blue-500 hover:before:to-indigo-500"
    
    >
       <div className=''>
            <Image width={20} height={20} src="/icons/design.svg" alt="Brandinf Icon" className='size-8'/>
        </div>

        <span className='box-text from-fuchsia-500 to-orange-500'>
     Design
        </span>
      </div>

      <div 
    className="box hover:after:from-lime-500 hover:after:to-teal-500 hover:before:from-teal-500 hover:before:to-lime-500"


    >
       <div className=''>
            <Image width={20} height={20} src="/icons/marketing.svg" alt="Brandinf Icon" className='size-8'/>
        </div>
        <span className='box-text from-lime-500 to-green-500'>
     Marketting
        </span>
      </div>

      <div 
    className="box hover:after:from-indigo-500 hover:after:to-sky-500 hover:before:from-indigo-500 hover:before:to-sky-500"

  >
       <div className=''>
            <Image width={20} height={20} src="/icons/seo.svg" alt="Brandinf Icon" className='size-8'/>
        </div>

        <span className='box-text from-indigo-500 to-sky-500'>
     SEO
        </span>
      </div>


      <div 
    className="box hover:after:from-pink-500 hover:after:to-fuchsia-500 hover:before:from-fuchsia-500 hover:before:to-pink-500"
    
    >
          <div className=''>
            <Image width={20} height={20} src="/icons/ads.svg" alt="Brandinf Icon" className='size-8'/>
        </div>

        <span className='box-text from-pink-500 to-fuchsia-600'>
     Advertising

        </span>
      </div>


  </div>

    </>

  )
}

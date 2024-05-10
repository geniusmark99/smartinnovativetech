import localFont from 'next/font/local'
import Image from 'next/image';
import sabiGalImg2 from "/public/images/sabii_gal2.png"


const Futura = localFont({
  src:'../app/fonts/futura/futura-pt-heavy.otf',
});



export default function AboutWidget(){
return <>

<section className=" bg-cover lg:mt-20">

<div className="">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col-reverse lg:flex-row">
    <div className="w-full">
    <div className="flex flex-col justify-center">
    <div className="max-w-3xl text-center mx-auto flex justify-center items-center">
      <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:my-20 my-5">
        Now it&apos;s easier than ever to master Trading with <span className="font-bold  text-blue-600">Sabii Gal</span>
      </h1>
    </div>

    {/* <div className="max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-400">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
    </div> */}
    </div>
          </div>

    <Image
           src={sabiGalImg2}
           alt='Sabi Gal Image'
       
            className="w-auto md:w-[350px] lg:w-[500px] h-full object-cover rounded-lg"
          />

   
  </div>
</div>
</section>
</>
}
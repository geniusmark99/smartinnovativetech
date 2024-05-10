import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SliderWidget= ({ images, autoScrollInterval = 5000}) => {


  const box = useRef(null);
  const autoScrollTimeline = useRef(null);

  useGSAP(()=>{
  // gsap.to(box.current,{x:360});
  gsap.to(box.current, {
    xPercent: -100 * (images.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: box.current,
      pin: true,
      scrub: 1,
      snap: 1 / (images.length - 1),
    },
  });

  autoScrollTimeline.current = gsap.timeline({ repeat: -1 });
  autoScrollTimeline.current.to(box.current, {
    xPercent: -100 * (images.length - 1),
    duration: images.length * 2, // Adjust duration based on the number of slides
    ease: 'linear',
  });

  });
  

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-128">
      <div
        className="w-full h-full absolute flex overflow-hidden" ref={box}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full  object-cover rounded-lg"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderWidget;

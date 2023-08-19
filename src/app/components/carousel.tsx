// components/Carousel.tsx
'use client'
import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';

type EmblaCarousel = {
  scrollPrev: () => void;
  scrollNext: () => void;
  // You can add other methods and properties of the EmblaCarousel instance if needed
};

const Carousel: React.FC = () => {
  const embla = useRef<EmblaCarousel | null>(null);
  const emblaRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (emblaRef.current) {
      embla.current = EmblaCarousel(emblaRef.current, { loop: true });
    }
  }, []);

  const scrollPrev = () => {
    if (embla.current) {
      embla.current.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (embla.current) {
      embla.current.scrollNext();
    }
  };

  return (
    <div className="relative bg-white">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex flex-nowrap will-change-transform mx-4">
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/kaki-z-gitara.jpg" alt="Image 1" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/kaki-mikolajki.jpg" alt="Image 2" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC1980.jpg" alt="Image 3" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC0498-kopia.jpg" alt="Image 4" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC929.jpg" alt="Image 5" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC0366-tosia-las.jpg" alt="Image 6" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC0387-Poprawione-NR.jpg" alt="Image 7" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC2497.jpg" alt="Image 8" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/_DSC9351-kopia.jpg" alt="Image 9" /></div>
          <div className="flex-none w-[20rem] mr-4 embla__slide"><img className="object-cover w-full h-full object-top rounded" src="karuzela/054-(1).jpg" alt="Image 10" /></div>
        </div>
      </div>
      <button onClick={scrollPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 ml-10 text-white bg-black rounded-full opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
        </svg>


      </button>
      <button onClick={scrollNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 mr-10 text-white bg-black rounded-full opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
        </svg>


      </button>
    </div>
  );
};

export default Carousel;

import { useState, useEffect } from "react";

const BentoGrid = ({ images }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  console.log("isMobile:", isMobile);
}, [isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerHeight < 500);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px] md:auto-rows-[310px]">
      {images.slice(0, 21).map((img, index) => {
        // Pattern repeats every 6 images
        const patternIndex = index % 6;
        
        let gridClasses = "col-span-1 row-span-1"; // Default: Small Square
        
        if (patternIndex === 0) {
          gridClasses = "col-span-2 row-span-2"; // Large Feature
        } else if (patternIndex === 1) {
          gridClasses = "col-span-2 row-span-1"; // Wide Rectangle
        }

        return (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg group bg-[#1a1a1a] ${gridClasses}`}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{
  objectPosition:
    (isMobile && img.mobileObjectPosition) || img.objectPosition || undefined,
}}
              loading="lazy" 
            />
            {/* Elegant Minimalist Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
               <p className="text-[#D4AF35] text-[10px] tracking-[0.3em] uppercase mb-1">
                 {img.category || "Lemus & Son"}
               </p>
               <p className="text-white font-['Noto_Serif'] text-lg italic translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 {img.title}
               </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
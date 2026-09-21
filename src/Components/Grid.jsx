import IMG_1 from '../assets/IMGG_1.webp'
import IMG_2 from '../assets/IMGG_2.webp'
import IMG_3 from '../assets/IMGG_3.webp'
import IMG_4 from '../assets/IMGG_4.webp'
import IMG_5 from '../assets/IMGG_7.webp'
import IMG_6 from '../assets/IMGG_6.webp'

const Grid = () => {
  return (
    <section className="w-full pb-20 bg-[#090808] [content-visibility:auto] [contain-intrinsic-size:2200px] md:[contain-intrinsic-size:900px]">
      <div className="mx-auto max-w-[90%] md:max-w-[85%]">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[900px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 md:grid md:grid-rows-[repeat(10,minmax(0,1fr))] md:h-full">
            {/* Top Vertical */}
            <div className="h-[480px] md:h-auto md:row-span-7 rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group [will-change:transform]">
              <img
                src={IMG_1}
                alt="G1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Bottom Horizontal */}
            <div className="h-80 md:h-auto md:row-span-3 rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group">
              <img
                src={IMG_2}
                alt="G2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 md:grid md:grid-rows-[repeat(10,minmax(0,1fr))] md:h-full">
            {/* Top Pair */}
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:row-span-4">
              <div className="h-80 md:h-auto rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group">
                <img
                  src={IMG_3}
                  alt="G3"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="h-80 md:h-auto rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group">
                <img
                  src={IMG_4}
                  alt="G4"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Middle */}
            <div className="h-80 md:h-auto md:row-span-3 rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group">
              <img
                src={IMG_5}
                alt="G5"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ objectPosition: 'center 10%' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Bottom */}
            <div className="h-80 md:h-auto md:row-span-3 rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0B] relative group">
              <img
                src={IMG_6}
                alt="G6"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid
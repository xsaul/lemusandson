import { Link } from 'react-router-dom';

const Galeria = () => {
  return (
    <section className="w-full pt-20 bg-[#090808]">
      <div className="mx-auto max-w-[90%] md:max-w-[85%]">
        
        {/* Header Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8">
          
          {/* Left Side: Title & Phrase */}
          <div className="flex flex-col gap-2">
            <h2 className="font-['Noto_Serif'] text-4xl md:text-5xl font-bold text-white tracking-tight">
              Galería
            </h2>
            <p className="font-['Noto_Serif'] uppercase text-md md:text-lg font-normal text-[#D4AF35]">
              Una Vistazo a nuestra visión artística
            </p>
          </div>

          {/* Right Side: Action Link */}
          <div className="md:pb-1">
            <Link to="/galeria"
              className="font-['Noto_Serif'] font-bold text-[#D4AF35] uppercase hover:text-[#B3922B] transition-colors flex items-center gap-2 group"
            >
              ver más de nuestro trabajo
              <span className="text-2xl md:text-3xl leading-none transition-transform duration-300 group-hover:translate-x-2 inline-block">
                 →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galeria
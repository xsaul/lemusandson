import { Link } from 'react-router-dom';
import Foto_Hero from '../assets/PORTADA-PAGINA.webp'

const Hero = () => {
  return (
    <section className="w-full font-['Noto_Serif'] mt-6 mb-12">
      <div className="mx-auto max-w-[90%] md:max-w-[85%] relative h-[600px] rounded-md overflow-hidden shadow-2xl">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Foto_Hero})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          
          {/* H1: Staggered Layout */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl">
            <span className="block">Capturando</span> 
            momentos eternos
          </h1>
          
          {/* H2: Switched to Noto Sans */}
          <h2 className="italic text-lg md:text-xl font-normal text-gray-200 mb-10 max-w-xl leading-relaxed drop-shadow-md" style={{ fontFamily: "'Noto Sans', sans-serif !important" }}>
            Narración cinematográfica para bodas, quinceaños y las celebraciones más importantes.
          </h2>

          <Link to="/galeria" className="bg-[#D4AF35] hover:bg-[#B3922B] text-lg cursor-pointer text-white px-6 py-2.5 rounded-md font-semibold transition-all active:scale-95 shadow-md">
          Ver Galería
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

import BentoGrid from '../Components/BentoGrid';
import IMG_1 from '../assets/BODA_1.webp'
import IMG_2 from '../assets/BODA_2.webp'
import IMG_3 from '../assets/BODA_3.webp'
import IMG_4 from '../assets/BODA_4.webp'
import IMG_5 from '../assets/BODA_5.webp'
import IMG_6 from '../assets/BODA_6.webp'
import IMG_7 from '../assets/BODA_7.webp'
import IMG_8 from '../assets/BODA_8.webp'
import IMG_9 from '../assets/BODA_9.webp'
import IMG_10 from '../assets/BODA_10.webp'
import IMG_11 from '../assets/BODA_11.webp'
import IMG_12 from '../assets/BODA_12.webp'
import XV_1 from '../assets/XV_1.webp'
import XV_2 from '../assets/XV_2.webp'
import XV_3 from '../assets/XV_3.webp'
import XV_4 from '../assets/XV_4.webp'
import XV_5 from '../assets/XV_5.webp'
import XV_6 from '../assets/XV_6.webp'
import XV_7 from '../assets/XV_7.webp'
import XV_8 from '../assets/XV_8.webp'
import XV_9 from '../assets/XV_9.webp'
import XV_10 from '../assets/XV_10.webp'
import XV_11 from '../assets/XV_11.webp'
import XV_12 from '../assets/XV_12.webp'
import Sesion_1 from '../assets/Sesion_1.webp'
import Sesion_2 from '../assets/Sesion_2.webp'
import Sesion_3 from '../assets/Sesion_3.webp'
import Sesion_4 from '../assets/Sesion_4.webp'
import Sesion_5 from '../assets/Sesion_5.webp'
import Sesion_6 from '../assets/Sesion_6.webp'
import Sesion_7 from '../assets/Sesion_7.webp'
import Sesion_8 from '../assets/Sesion_8.webp'
import Sesion_9 from '../assets/Sesion_9.webp'
import Sesion_10 from '../assets/Sesion_10.webp'
import Sesion_11 from '../assets/Sesion_11.webp'
import Sesion_12 from '../assets/Sesion_12.webp'
import Sesion_13 from '../assets/Sesion_13.webp'
import Sesion_14 from '../assets/Sesion_14.webp'
import Sesion_15 from '../assets/Sesion_15.webp'
import Sesion_16 from '../assets/Sesion_16.webp'
import Sesion_17 from '../assets/Sesion_17.webp'
import Sesion_18 from '../assets/Sesion_18.webp'
import Sesion_19 from '../assets/Sesion_19.webp'
import Sesion_20 from '../assets/Sesion_20.webp'
import VARIOS_1 from '../assets/VARIOS_1.webp'
import VARIOS_2 from '../assets/VARIOS_2.webp'
import VARIOS_3 from '../assets/VARIOS_3.webp'
import VARIOS_4 from '../assets/VARIOS_4.webp'
import VARIOS_5 from '../assets/VARIOS_5.webp'
import VARIOS_6 from '../assets/VARIOS_6.webp'
import VARIOS_7 from '../assets/VARIOS_7.webp'
import VARIOS_8 from '../assets/VARIOS_8.webp'
import VARIOS_9 from '../assets/VARIOS_9.webp'
import VARIOS_10 from '../assets/VARIOS_10.webp'
import VARIOS_11 from '../assets/VARIOS_11.webp'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




const bodaFotos = [
  { url: IMG_1, alt: 'Boda 1', title: 'El gran día', category: 'Boda' },
  { url: IMG_2, alt: 'Boda 2', title: 'El novio', category: 'Boda', objectPosition: 'center 20%' },
  { url: IMG_3, alt: 'Boda 3', title: 'La novia', category: 'Boda' },
  { url: IMG_5, alt: 'Boda 4', title: 'Disfrutando con amigos', category: 'Boda' },
  { url: IMG_4, alt: 'Boda 5', title: 'En la iglesia', category: 'Boda' },
  { url: IMG_9, alt: 'Boda 6', title: 'En la iglesia', category: 'Boda' },
  { url: IMG_12, alt: 'Boda 7', title: 'En la iglesia', category: 'Boda' },
  { url: IMG_8, alt: 'Boda 8', title: 'En la iglesia', category: 'Boda' },
  { url: IMG_6, alt: 'Boda 9', title: 'El gran día', category: 'Boda' },
  { url: IMG_7, alt: 'Boda 10', title: 'El gran día', category: 'Boda' },
  { url: IMG_11, alt: 'Boda 11', title: 'En la iglesia', category: 'Boda' },
  { url: IMG_10, alt: 'Boda 12', title: 'En la iglesia', category: 'Boda' },
];

const xvsFotos = [
  { url: XV_1, alt: 'XV años 1', title: 'Recuerdo en la iglesia', category: 'XV años' },
  { url: XV_2, alt: 'XV años 2', title: 'Recuerdo en la iglesia', category: 'XV años' },
  { url: XV_3, alt: 'XV años 3', title: 'Recuerdo en la iglesia', category: 'XV años' },
  { url: XV_4, alt: 'XV años 4', title: 'Recuerdo en el salón', category: 'XV años', objectPosition: '80% center', mobileObjectPosition: '90% center' },
  { url: XV_5, alt: 'XV años 5', title: 'Recuerdo en el salón', category: 'XV años', objectPosition: '43% center' },
  { url: XV_6, alt: 'XV años 6', title: 'Recuerdo en la iglesia', category: 'XV años' },
  { url: XV_7, alt: 'XV años 7', title: 'Recuerdo en el salón', category: 'XV años' },
  { url: XV_8, alt: 'XV años 8', title: 'Recuerdo en el salón', category: 'XV años' },
  { url: XV_9, alt: 'XV años 9', title: 'Recuerdo en el salón', category: 'XV años' },
  { url: XV_10, alt: 'XV años 10', title: 'Recuerdo en el salón', category: 'XV años' },
  { url: XV_11, alt: 'XV años 11', title: 'Recuerdo en la iglesia', category: 'XV años' },
  { url: XV_12, alt: 'XV años 12', title: 'Recuerdo en el salón', category: 'XV años' },
];

const sesionesFotos = [
  { url: Sesion_1, alt: 'Sesiones 1', title: 'Sesión Día de Muertos', category: 'Sesiones' },
  { url: Sesion_2, alt: 'Sesiones 2', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_3, alt: 'Sesiones 3', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_4, alt: 'Sesiones 4', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_5, alt: 'Sesiones 5', title: 'Sesión Día de Muertos', category: 'Sesiones' },
  { url: Sesion_6, alt: 'Sesiones 6', title: 'Sesión Día de Muertos', category: 'Sesiones' },
  { url: Sesion_7, alt: 'Sesiones 7', title: 'Sesión Mascota', category: 'Sesiones' },
  { url: Sesion_8, alt: 'Sesiones 8', title: 'Sesión Día de Muertos', category: 'Sesiones' },
  { url: Sesion_9, alt: 'Sesiones 9', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_10, alt: 'Sesiones 10', title: 'Sesión XV años', category: 'Sesiones', objectPosition: 'center 15%' },
  { url: Sesion_11, alt: 'Sesiones 11', title: 'Sesión Mascotas', category: 'Sesiones', mobileObjectPosition: "40% center", },
  { url: Sesion_12, alt: 'Sesiones 12', title: 'Sesión Mascotas', category: 'Sesiones', objectPosition: '45% center', mobileObjectPosition: "30% center", },
  { url: Sesion_13, alt: 'Sesiones 13', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_14, alt: 'Sesiones 14', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_15, alt: 'Sesiones 15', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_16, alt: 'Sesiones 16', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_17, alt: 'Sesiones 17', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_18, alt: 'Sesiones 18', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_19, alt: 'Sesiones 19', title: 'Sesión XV años', category: 'Sesiones' },
  { url: Sesion_20, alt: 'Sesiones 20', title: 'Sesión XV años', category: 'Sesiones' },
];

const variosFotos = [
  { url: VARIOS_1, alt: 'Varios 1', title: 'Festival Globos Aeroestáticos', category: 'Eventos Varios' },
  { url: VARIOS_2, alt: 'Varios 2', title: 'Festival Globos Aeroestáticos', category: 'Eventos Varios' },
  { url: VARIOS_3, alt: 'Varios 3', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_4, alt: 'Varios 4', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_5, alt: 'Varios 5', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_6, alt: 'Varios 6', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_7, alt: 'Varios 7', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_8, alt: 'Varios 8', title: 'Concurso Pastelería Esperanza', category: 'Eventos Varios' },
  { url: VARIOS_9, alt: 'Varios 9', title: 'Cena de la Amistad 2025', category: 'Eventos Varios' },
  { url: VARIOS_10, alt: 'Varios 10', title: 'Cena de la Amistad 2025', category: 'Eventos Varios' },
  { url: VARIOS_11, alt: 'Varios 11', title: 'Cena de la Amistad 2025', category: 'Eventos Varios' },
];

const Galeria = () => {

const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Quitamos el símbolo '#' para buscar el ID exacto (ej. "#bodas" -> "bodas")
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);


  return (
    <div className="bg-[#090808] min-h-screen pb-20">

<header className="relative w-full h-[80vh] [@media(max-height:500px)]:h-auto [@media(max-height:500px)]:min-h-[550px] [@media(max-height:500px)]:py-20 flex items-center justify-center overflow-hidden mb-20">
  
  {/* 1. Background Layer */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[#090808]" />
    <div className="absolute inset-0 opacity-40" 
         style={{ 
           background: 'radial-gradient(circle at center, #D4AF35 0%, transparent 70%)',
           filter: 'blur(120px)' 
         }} 
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* 2. Content Layer (Text only) */}
  <div className="relative z-10 max-w-[90%] md:max-w-3xl text-center px-4">
    <div className="flex justify-center items-center gap-4 mb-6">
      <div className="h-[1px] w-8 md:w-12 bg-[#D4AF35]"></div>
      <span className="text-[#D4AF35] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">
        Nuestro trabajo
      </span>
      <div className="h-[1px] w-8 md:w-12 bg-[#D4AF35]"></div>
    </div>

    <h1 className="font-['Noto_Serif'] text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">
      Portafolio <span className="text-[#D4AF35]">Completo</span>
    </h1>

    <div className="flex justify-center">
      <p className="text-gray-300 text-lg md:text-xl font-['Noto_Serif'] italic leading-relaxed max-w-2xl">
        Un recorrido detallado por los momentos más significativos que hemos capturado. 
        Dividido por categorías para que encuentres la inspiración que buscas.
      </p>
    </div>
  </div>

  {/* 3. Scroll Indicator (MOVE TO HERE) */}
  {/* Now it targets the bottom of the <header> because it's a direct child */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF35] to-[#D4AF35]/50"></div>
      <div className="w-3 h-3 border-r border-b border-[#D4AF35] rotate-45 -mt-1.5"></div>
    </div>
  </div>

</header>

      {/* Section: Bodas */}
      <section id="bodas" className="scroll-mt-24 mx-auto max-w-[85%] mb-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-['Noto_Serif'] text-2xl text-[#D4AF35] uppercase tracking-[0.3em]">Bodas</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>
        <BentoGrid images={bodaFotos} />
      </section>

      {/* Section: xvs */}
      <section id="xvs" className="scroll-mt-24 mx-auto max-w-[85%] mb-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-['Noto_Serif'] text-2xl text-[#D4AF35] uppercase tracking-[0.3em]">XVs</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>
        <BentoGrid images={xvsFotos} />
      </section>

      {/* Section: sesiones */}
      <section id="sesiones" className="scroll-mt-24 mx-auto max-w-[85%] mb-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-['Noto_Serif'] text-2xl text-[#D4AF35] uppercase tracking-[0.3em]">Sesiones Fotográficas</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>
        <BentoGrid images={sesionesFotos} />
      </section>

      {/* Section: Varios */}
      <section id="varios" className="scroll-mt-24 mx-auto max-w-[85%] mb-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-['Noto_Serif'] text-2xl text-[#D4AF35] uppercase tracking-[0.3em]">Eventos Varios</h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>
        <BentoGrid images={variosFotos} />
      </section>

    </div>
  );
};

export default Galeria;
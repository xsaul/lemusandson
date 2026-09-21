import { Link } from 'react-router-dom';
import ig_logo from '../assets/ig_logo.svg'
import wa_logo from '../assets/wa_logo.svg'

const Footer = () => {
  const WHATSAPP_NUMBER = "525591854811";
  const MENSAJE = "Hola, quiero más información sobre sus servicios de fotografía y video para eventos.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE)}`;
  return (
    <footer className="w-full bg-[#090808] text-white pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-[90%] md:max-w-[85%] flex justify-center">
        
        {/* Main Footer Content: 3 Columns */}
        <div className="flex flex-col md:flex-row justify-between w-full md:max-w-4xl gap-12 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4 md:max-w-xs">
            <h2 className="font-['Noto_Serif'] text-2xl font-bold tracking-tight">
              Lemus & Son
            </h2>
            <p className="font-['Noto_Serif'] text-sm text-gray-400 leading-relaxed max-w-xs">
              Fotografía para los momentos más importantes de la vida. Con sede en la Ciudad de México, con presencia en todo el país.
            </p>
            {/* Social Icons Container */}
            <div className="flex gap-6 mt-2">
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <img src={wa_logo} alt="WhatsApp" className="w-6 h-6 object-contain" style={{ 
                filter: 'invert(72%) sepia(79%) saturate(355%) hue-rotate(352deg) brightness(91%) contrast(83%)' 
                }} />
              </a>
              <a href="https://www.instagram.com/lemusandson/" className="hover:opacity-70 transition-opacity">
                <img src={ig_logo} alt="Instagram" className="w-6 h-6 object-contain" style={{ 
                filter: 'invert(72%) sepia(79%) saturate(355%) hue-rotate(352deg) brightness(91%) contrast(83%)' 
                }} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-['Noto_Serif'] text-lg font-bold text-[#D4AF35] uppercase tracking-widest">
              Links
            </h3>
            <ul className="font-['Noto_Serif'] flex flex-col gap-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-white transition-colors">Galería</Link>
              </li>
              <li>
  <Link to="/paquetes" className="hover:text-white transition-colors">Paquetes</Link>
</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-['Noto_Serif'] text-lg font-bold text-[#D4AF35] uppercase tracking-widest">
              Servicios
            </h3>
            <ul className="font-['Noto_Serif'] flex flex-col gap-3 text-sm text-gray-300">
              <li>Sesión fotográfica</li>
              <li>Video de seguimiento</li>
              <li>Edición de video</li>
            </ul>
          </div>
        </div>
      </div>
       {/* Bottom Copyright Section */}
        <div className="text-center font-['Noto_Serif'] text-xs text-gray-500 tracking-widest uppercase">
          © 2026 Lemus & Son. Todos los derechos reservados.
        </div>
        <div className="text-center font-['Noto_Serif'] text-xs text-gray-500 tracking-widest mt-4">
          Sitio desarrollado por <a href="https://xsaul.github.io/Portfolio/" className="hover:text-orange-400 transition-colors">Saul González</a>
        </div>
    </footer>
  );
};

export default Footer
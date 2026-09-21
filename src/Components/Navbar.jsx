import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import wa_logo from '../assets/wa_logo.svg'

const linkClass = ({ isActive }) =>
  `pb-1 border-b-2 transition-all duration-300 ${
    isActive
      ? 'border-[#D4AF35] text-[#D4AF35]'
      : 'border-transparent hover:border-[#D4AF35]'
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const WHATSAPP_NUMBER = "525591854811";
  const MENSAJE = "Hola, quiero más información sobre sus servicios de fotografía y video para eventos.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE)}`;

  return (
    <nav className="sticky top-0 z-50 w-full font-['Noto_Serif'] py-4 bg-[#090808]/85 backdrop-blur-md border-b border-[#201D12]">
      <div className="mx-auto max-w-[90%] md:max-w-[85%] flex items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <p className="text-xl font-bold text-white tracking-tight uppercase">
            Lemus & Son
          </p>
        </div>

        {/* Navigation & Action Container */}
        <div className="flex items-center gap-10">
          {/* Nav Links (desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium text-sm tracking-wide">
            <li>
              <NavLink to="/" end className={linkClass}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/galeria" className={linkClass}>Galería</NavLink>
            </li>
            <li>
              <NavLink to="/paquetes" className={linkClass}>Paquetes</NavLink>
            </li>
          </ul>

          {/* CTA Button (desktop) */}
          <a href={url} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#D4AF35] hover:bg-[#B3922B] cursor-pointer text-white px-4 py-2.5 rounded-md font-semibold transition-all active:scale-95 shadow-md text-sm">
            Contáctanos
            <img src={wa_logo} alt="WhatsApp" className="w-6 h-6 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="md:hidden text-white p-2 cursor-pointer"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#090808] border-b border-[#201D12]">
          <ul className="flex flex-col items-center gap-6 pt-8 pb-6 text-white font-medium tracking-wide">
            <li>
              <NavLink to="/" end onClick={closeMenu} className={linkClass}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/galeria" onClick={closeMenu} className={linkClass}>Galería</NavLink>
            </li>
            <li>
              <NavLink to="/paquetes" onClick={closeMenu} className={linkClass}>Paquetes</NavLink>
            </li>
          </ul>
          <div className="flex justify-center pb-8">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D4AF35] hover:bg-[#B3922B] cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition-all active:scale-95 shadow-md text-sm">
              Contáctanos
              <img src={wa_logo} alt="WhatsApp" className="w-6 h-6 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
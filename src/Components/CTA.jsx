import wa_logo from '../assets/wa_logo.svg'
const CTA = () => {

  const WHATSAPP_NUMBER = "525591854811";
  const MENSAJE = "Hola, quiero más información sobre sus servicios de fotografía y video para eventos.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE)}`;
  return (
    <section className="w-full py-16 bg-[#090808] flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-[#D4AF35]/10 border border-[#D4AF35]/20 rounded-xl p-8 md:p-12 flex flex-col items-center text-center backdrop-blur-sm">
        <h1 className="font-['Noto_Serif'] text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
          ¿List@ para contar tu nueva historia?
        </h1>
        <p 
          className="text-gray-300 text-sm md:text-base max-w-md mb-8 leading-relaxed italic"
          style={{ fontFamily: "'Noto Sans Display', sans-serif" }}
        >
          Conservemos tus recuerdos más preciados con un toque artístico.
          Reserva con anticipación esa fecha especial.
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="group px-6 py-3 border border-[#D4AF35] text-[#D4AF35] font-['Noto_Serif'] font-bold text-sm uppercase tracking-widest rounded-md hover:bg-[#D4AF35] hover:text-[#090808] cursor-pointer transition-all duration-300 flex items-center gap-2">
          Contáctanos
         <img src={wa_logo} 
          className="w-6 h-6 gold-to-black-icon transition-all duration-300"
          style={{ filter: 'invert(72%) sepia(79%) saturate(355%) hue-rotate(352deg) brightness(91%) contrast(83%)' }}/>
          </a>
      </div>
    </section>
  );
};

export default CTA
import Paquete_1 from '../assets/PAQ_1.webp'
import Paquete_2 from '../assets/PAQ_2.webp'
import Paquete_3 from '../assets/PAQ_3.webp'
import Paquete_4 from '../assets/PAQ_4.webp'
import Paquete_5 from '../assets/PAQ_5.webp'
import Paquete_6 from '../assets/PAQ_6.webp'
import Paquete_7 from '../assets/PAQ_7.webp'
import Paquete_8 from '../assets/PAQ_8.webp'

const paquetes = [
  {
    titulo: 'Paquete Video Digital',
    incluye: [
      'Grabación a una sola cámara profesional',
      'Cobertura continua de 6 horas, desde la ceremonia hasta la fiesta',
      'Video editado con duración de 40 a 60 minutos',
      'Caja de madera y USB personalizadas con los archivos del evento',
    ],
    precio: '$6,000.00',
    fotos: [Paquete_1, Paquete_2], // ej. [Paquete_1, Paquete_2]
  },
  {
    titulo: 'Paquete Fotografía Digital',
    incluye: [
      'Cobertura fotográfica con un solo fotógrafo',
      'Cobertura continua de 6 horas, desde la ceremonia hasta la fiesta',
      'De 70 a 100 fotos impresas retocadas digitalmente',
      'Caja de madera y USB personalizadas con los archivos del evento',
    ],
    precio: '$6,500.00',
    fotos: [Paquete_3, Paquete_4],
  },
  {
    titulo: 'Paquete Foto y Video Esencial',
    incluye: [
      'Cobertura de video con cámara principal profesional y cámara portátil de apoyo',
      'Cobertura continua de 6 horas, desde la ceremonia hasta la fiesta',
      'Video editado con duración de 60 minutos',
      'Cobertura fotográfica con un solo fotógrafo',
      '100 fotos impresas 4X retocadas, 5 fotos impresas 8X10 retocadas, 5 fotos impresas 5X7 retocadas',
      'Caja de madera y USB personalizadas con los archivos del evento',
    ],
    precio: '$14,000.00',
    fotos: [Paquete_5, Paquete_6],
  },
  {
    titulo: 'Paquete Fotografía, Video y Más',
    incluye: [
      'Cobertura de video con dos cámaras profesionales y cámara portátil de apoyo',
      'Cobertura continua de 8 horas, desde los preparativos de los protagonistas hasta la fiesta',
      'Video editado con duración de 60 minutos',
      'Cobertura fotográfica con un solo fotógrafo',
      '120 fotos impresas 4X retocadas, 5 fotos impresas 8X10 retocadas, 5 fotos impresas 5X7 retocadas',
      'Caja de madera y USB personalizadas con los archivos del evento',
      'Vuelo de dron incluido de forma esporádica durante momentos clave',
      'Videoclip musicalizado de momentos esenciales',
      'Book digital de 10" o 12" (de 70 a 100 fotografías)',
      'Estudio fotográfico en locación externa, agendado 15 días antes de la celebración. Incluye cuadro fotográfico (aplica términos y condiciones)',
    ],
    precio: '$25,000.00',
    fotos: [Paquete_7, Paquete_8],
  },
]

const Foto = ({ src, alt, className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0C0C0B] aspect-[3/4] ${className}`}>
    {src ? (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs uppercase tracking-[0.3em]">
        Foto
      </div>
    )}
  </div>
)

const Paquetes = () => {
  return (
    <div className="bg-[#090808] min-h-screen pb-20">
      <header className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden mb-20">

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

  {/* 2. Content Layer */}
  <div className="relative z-10 max-w-[90%] md:max-w-4xl text-center px-4">
    <div className="flex justify-center items-center gap-4 mb-6">
      <div className="h-[1px] w-8 md:w-12 bg-[#D4AF35]"></div>
      <span className="text-[#D4AF35] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">
        Nuestros servicios
      </span>
      <div className="h-[1px] w-8 md:w-12 bg-[#D4AF35]"></div>
    </div>

    <h1 className="font-['Noto_Serif'] text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">
      Paquetes
    </h1>

    <div className="flex justify-center">
      <p className="text-gray-300 text-lg md:text-xl font-['Noto_Serif'] italic leading-relaxed max-w-4xl">
        A continuación presentamos nuestra selección de paquetes diseñados para adaptarse a las necesidades de su evento. Asimismo, ofrecemos servicios personalizados; le invitamos a ponerse en contacto con nosotros para estructurar una propuesta a su medida.
      </p>
    </div>
  </div>

  {/* 3. Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF35] to-[#D4AF35]/50"></div>
      <div className="w-3 h-3 border-r border-b border-[#D4AF35] rotate-45 -mt-1.5"></div>
    </div>
  </div>

</header>

      <div className="mx-auto max-w-[90%] md:max-w-[85%] flex flex-col gap-24 md:gap-32">
        {paquetes.map((paquete, i) => {
          const espejo = i % 2 === 1 // paquetes 2 y 4: texto a la izquierda, fotos a la derecha

          return (
            <section key={paquete.titulo} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Fotos */}
              <div className={`grid grid-cols-2 gap-4 ${espejo ? 'md:order-2' : ''}`}>
                <Foto src={paquete.fotos[0]} alt={`${paquete.titulo} - foto 1`} />
                <Foto src={paquete.fotos[1]} alt={`${paquete.titulo} - foto 2`} className="mt-8 md:mt-12" />
              </div>

              {/* Texto */}
              <div className="font-['Noto_Serif']">
                <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF35] leading-tight mb-6">
                  {paquete.titulo}
                </h2>

                <h3 className="text-xl md:text-2xl text-white mb-4">Incluye:</h3>

                <ul className="flex flex-col gap-3">
                  {paquete.incluye.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D4AF35] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Línea divisoria con diamante */}
                <div className="flex items-center gap-3 my-8">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#D4AF35]/70" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF35]" />
                  <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#D4AF35]/70" />
                </div>

                <p className="text-4xl md:text-5xl text-[#D4AF35] text-center">
                  {paquete.precio}
                </p>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Paquetes
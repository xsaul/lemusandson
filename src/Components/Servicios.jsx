import camera from "../assets/camera.png";
import crown from "../assets/crown.png";
import dog from "../assets/dog.png";
import drone from "../assets/drone.png";
import frame from "../assets/frame.png";
import rings from "../assets/rings.png";
import { Link } from 'react-router-dom';

const Servicios = () => {

    const serviceData = [
    { title: "Sesión fotográfica", desc: "Un tiempo dedicado para plasmar nuevas ideas en una sesión mostrándo tu estilo único.", img: camera, link: "sesiones" },
    { title: "XV Años", desc: "Sesiones de quinceañera inspiradas en la alta costura que celebran esta gran transición con estilo y elegancia.", img: crown, link: "xvs" },
    { title: "Bodas", desc: "Cobertura de boda emotiva y sofisticada que documenta cada detalle de su singular historia de amor.", img: rings, link: "bodas" },
    { title: "Sesión para mascotas", desc: "Esos pequeños seres que comparten momentos inolvidables también merecen ser fotografiados.", img: dog, link: "sesiones" },
    { title: "Video con drone", desc: "Capturas de ángulos únicos y dinámicos para resaltar la magia de tu evento.", img: drone, link: "varios" },
    { title: "Cuadros", desc: "Cuadros personalizados para decorar tu hogar y recordar momentos especiales.", img: frame, link: "varios" },
  ];
  return (
   <section className="w-full py-16 bg-[#090808]">
      <div className="mx-auto max-w-[90%] md:max-w-[85%]">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-black to-[#D4AF35]"></div>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.05em] whitespace-nowrap">
            Servicios
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-black to-[#D4AF35]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <Link 
      key={index} 
      to={`/galeria#${service.link}`}
      className="group p-8 rounded-md border-2 border-[#D4AF35] bg-[#0C0C0B]/50 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#D4AF35]/5 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 h-16 w-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img 
          src={service.img} 
          alt={service.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="font-['Noto_Serif'] font-bold text-2xl text-white mb-4">
        {service.title}
      </h3>
      <p className="font-['Noto_Sans_Display'] italic text-sm text-white leading-relaxed">
        {service.desc}
      </p>
    </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
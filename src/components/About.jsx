import React, { useState } from "react";
import { motion } from "framer-motion";
import fotonat from "../assets/fotonat.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-3 py-2 lg:py-10 bg-white"> 
      <section
        id="Contato"
        initial="hidden"
        animate="visible"
        className="w-full lg:w-full mx-auto flex flex-col lg:flex-row items-center gap-x-4"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          },
        }}
      >
        
        <motion.div
          initial="left"
          animate="right"
          className="lg:order-1 lg:w-3/4 mb-8 lg:mb-0 mx-[20px]"
          variants={{
            left: {
              transform: "translateX(-100%)",
            },
            right: {
              transform: "translateX(0)",
            },
          }}
        >
          <img
            src={fotonat}
            alt="Imagem de perfil"
            className="w-auto h-[300px] object-cover rounded-[42px] bg-white shadow-xl" 
          />
        </motion.div>
       
        <motion.div
          initial="right"
          animate="left"
          className="lg:text-left lg:order-2 w-full lg:w-auto text-center"
          variants={{
            right: {
              transform: "translateX(100%)",
            },
            left: {
              transform: "translateX(0)",
            },
          }}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-[#ad6a51] font-mukta-mahee mb-2">Natasha
            Manni Krunitzki</h1>
          <h2 className="font-bold text-[#ad6a51] font-mukta-mahee mb-2">CRP 07/38016</h2>
          <p className="text-lg lg:text-xl text-[#ad6a51] font-mukta-mahee">
            Sou a Natasha. Sempre fui apaixonada por música, arte, escrita. Também,
            adoro conhecer pessoas e diferentes histórias de vida.
            Formada em Psicologia pelo Centro Universitário Ritter dos Reis.
            Psicóloga clínica, com experiência em atendimentos a adolescentes e adultos
            e estudos baseados na orientação psicanalítica.
          </p>

        
          <div className="flex mt-4 justify-center lg:justify-start">
            <a href="https://wa.me/5551995404199" target="_blank" rel="noopener noreferrer" className="mr-4 text-[#ad6a51]">
              <FaWhatsapp size="2rem" />
            </a>
            <a href="https://www.instagram.com/manninatasha?igsh=MXNlZzUwZ3lwMDFyYg==" target="_blank" rel="noopener noreferrer" className="mr-4 text-[#ad6a51]">
              <FaInstagram size="2rem" />
            </a>
            <a href="https://www.google.com/maps/place/Av.+Assis+Brasil,+4500+-+Passo+d'Areia,+Porto+Alegre+-+RS,+91110-000/@-30.007435,-51.1419144,16.5z/data=!4m6!3m5!1s0x95197701391e4d41:0xa6a3796179133992!8m2!3d-30.00746!4d-51.1419322!16s%2Fg%2F11fgh_kzlq?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-[#ad6a51]">
              <LuMapPin size="2rem" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

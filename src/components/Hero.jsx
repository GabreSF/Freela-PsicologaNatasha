import React from 'react';
import { motion } from 'framer-motion';
import HeroNat from '../assets/HeroNat.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div className="px-3 py-5 bg-[#ede1ad] lg:py-10 overflow-hidden"> 
      <motion.div
        className="grid lg:grid-cols-2 items-center justify-items-center gap-2 lg:w-full w-full" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants} className="flex flex-col justify-center items-center lg:text-center lg:mx-auto">
          <h1 className="text-4xl lg:text-4xl font-bold font-mukta-mahee text-center text-[#ad6a51] md:text-center">
            Natasha <br className="lg:hidden" /> Manni <br className="lg:hidden" /> Krunitzki
          </h1>
          <p className="text-lg lg:text-xl mt-4 font-mukta-mahee text-center text-[#ad6a51] md:text-center">
            Psicoterapia Online e Presencial<br />
            Orientação Psicanalítica<br />
          </p>
        </motion.div>

        <motion.div variants={imageVariants} className="mt-16 w-64 h-64">
          <img
            src={HeroNat}
            alt="Imagem de fundo"
            className="object-cover rounded-[80px]"
            width="100%"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

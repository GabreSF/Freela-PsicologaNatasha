import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { IoPeopleOutline } from 'react-icons/io5';

function Services() {
  const controls = useAnimation();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const startAnimation = async () => {
    await controls.start('visible');
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="services section mt-14 mb-8 mx-auto">
      <div className="container w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center space-x-4">
            <IoChatbubblesOutline size="52px" className="text-[#ad6a51]" />
            <div className="text-xl font-semibold xl:mb-2 text-[#ad6a51] font-mukta-mahee text-center md:text-left">
              Psicoterapia Online
            </div>
            <p className="text-center md:text-left text-[#ad6a51] font-mukta-mahee">
              No conforto e praticidade de onde você estiver!
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center space-x-4">
            <IoPeopleOutline size="52px" className="text-[#ad6a51]" />
            <div className="text-xl font-semibold text-[#ad6a51] xl:mb-2 font-mukta-mahee text-center md:text-left">
              Psicoterapia Presencial
            </div>
            <p className="text-center md:text-left text-[#ad6a51] font-mukta-mahee">
              Um espaço seguro e acolhedor para te receber!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

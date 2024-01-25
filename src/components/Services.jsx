import React from 'react';
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

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="services section mt-14 mb-8">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12" 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center space-x-4"> 
            <IoChatbubblesOutline size="52px" className='text-[#ad6a51]' />
            <div className="text-xl font-semibold xl:mb-2 text-[#ad6a51] font-mukta-mahee">
              Psicoterapia Online
            </div>
            <p className="text-center md:text-left  text-[#ad6a51] font-mukta-mahee">
              No conforto e na praticidade de onde você estiver!
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center space-x-4"> 
            <IoPeopleOutline size="52px" className='text-[#ad6a51]' />
            <div className="text-xl font-semibold text-[#ad6a51] xl:mb-2 font-mukta-mahee">
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

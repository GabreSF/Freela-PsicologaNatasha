import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logmann from '../assets/logmann.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = (target) => {
    const targetElement = document.getElementById(target);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }

    setNav(false);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const closeNavOnScroll = () => {
      if (nav) {
        setNav(false);
      }
    };

    window.addEventListener('scroll', closeNavOnScroll);

    return () => {
      window.removeEventListener('scroll', closeNavOnScroll);
    };
  }, [nav]);


  const navItems = [
    { id: 1, text: 'Home', target: 'Home' },
    { id: 2, text: 'Contato', target: 'Contato' },
    { id: 3, text: 'Demandas', target: 'Demandas' },
  ];

  return (
    <section id="Home">
      <div className='bg-[#ad6a51] flex justify-between items-center h-20 px-4 font-semibold text-[#EFD770] relative shadow-xl'>
       
        <div className="flex items-center mt-8">
          <img src={logmann} alt="Logo-header" className="w-52 h-52 object-contain" />
        </div>

        
        <ul
          className={
            nav
              ? 'flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#ad6a51] to-[#d4b3a7] text-[#EFD770] font-semibold ease-in-out duration-500'
              : 'hidden'
          }
        >
          {navItems.map(item => (
            <li
              key={item.id}
              className='duration-300 cursor-pointer border-gray-600 my-2 md:my-0'
            >
              <span
                className={`p-2 hover:text-[#00df9a] ${nav ? 'text-4xl ' : 'text-base'}`}
                onClick={() => handleNav(item.target)}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>

      
        <div
          onClick={toggleNav}
          className='cursor-pointer pr-4 z-10 text-[#EFD770] md:hidden'
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

       
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-2 rounded m-1 cursor-pointer duration-300 text-xl'
            >
              <span
                className='hover:text-[#a3e37d]'
                onClick={() => handleNav(item.target)}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

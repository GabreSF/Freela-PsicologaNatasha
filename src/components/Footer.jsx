import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import logmann2 from '../assets/logmann2.png';

const Footer = () => {
  return (
    <footer className="bg-[#ad6a51] text-[#EFD770] p-8">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
       
        <div className="mb-4 md:mb-0">
          <img
            src={logmann2}
            alt="Logo do Footer"
            className="w-56 h-56 object-contain"
          />
        </div>

      
        <div className="text-center md:text-left md:w-1/3 flex flex-col">
          <h2 className="text-lg font-bold mb-2">Entre em Contato</h2>
          <p>
            <FaMapMarkerAlt className="inline mr-2" />
            Endereço: Av. Assis Brasil, 4500, Porto Alegre/RS
          </p>
          <p>
            <FaPhone className="inline mr-2" />
            Telefone: (51) 995404199
          </p>
          <p>
            <FaEnvelope className="inline mr-2" />
            Email: manniknatasha@gmail.com
          </p>
        
          <a
            href="https://www.linkedin.com/in/natasha-manni-krunitzki/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EFD770] hover:text-[#00df9a] transition duration-300"
          >
            <FaLinkedin className="inline mr-2" />
            LinkedIn
          </a>
         
          <a
            href="http://t.me/NatashaManni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EFD770] hover:text-[#00df9a] transition duration-300"
          >
            <FaTelegramPlane className="inline mr-2" />
            Telegram
          </a>
        </div>

        
        <div className="w-full md:w-1/3 h-40 md:h-64">
         
          <iframe
            title="Google Maps"
            className="w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.392340260644!2d-51.15377168489099!3d-30.002313635764833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a9b5b1ab11f47%3A0x3440c63edf0a9e2c!2sAv.%20Assis%20Brasil%2C%204500%20-%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Porto%20Alegre%20-%20RS%2C%2091020-006!5e0!3m2!1sen!2sbr!4v1644458147867!5m2!1sen!2sbr"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

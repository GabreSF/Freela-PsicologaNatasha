import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const FrasesCarousel = () => {
  const frasesComAutores = [
    {
      frase:
        "Penso que no curso de nossa existência precisamos aprender essa desacreditada coisa chamada 'ser feliz' Cada um em seu caminho e com suas singularidades.",
      autor: "Lya Luft",
    },
    { frase: "A ciência moderna ainda não produziu um medicamento tranquilizador tão eficaz como o são umas poucas palavras boas.", autor: "Sigmund freud" },
    { frase: "Revolucionário é todo aquele que quer mudar o mundo e tem a coragem de começar por si mesmo.", autor: "Sérgio Vaz" },
   
  ];

  return (
    <div className="max-w-screen mx-auto mt-8">
      <div className="carousel-container-wrapper mx-4"> 
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          dynamicHeight={true}
          showStatus={false}
          stopOnHover={true}
          className="flex items-center justify-center" 
        >
          {frasesComAutores.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-96 bg-[#ede1ad] rounded-md p-4"> 
              <p className="text-lg text-center text-[#ad6a51] mb-4 max-w-2xl font-mukta-mahee">"{item.frase}"</p>
              <p className="text-sm font-semibold text-[#ad6a51] font-mukta-mahee">{item.autor}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FrasesCarousel;

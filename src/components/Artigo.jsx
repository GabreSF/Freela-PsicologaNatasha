import React, { useState } from 'react';
import DemandOne from '../assets/DemandOne.jpg';
import DemandTwo from '../assets/DemandTwo.jpg';
import DemandTree from '../assets/DemandTree.jpg';

const Card = ({ id, title, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full md:w-64 mx-auto mb-8 px-2"> 
      <div className="bg-white p-4 rounded-md shadow-md">
        <img
          src={image}
          alt={`Imagem do Card ${id}`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-mukta-mahee text-[#ad6a51] font-bold mb-2 text-center">
          {title.split('  ').map((word, index) => (
            <React.Fragment key={index}>
              {word}
              {index !== title.split(' ').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
      </div>
    </div>
  );
};

const Artigo = () => {
  const cards = [
    {
      id: 1,
      title: 'Ansiedade  Autoestima  Medo',
      image: DemandOne,
    },
    {
      id: 2,
      title: 'Humor deprimido  Conflitos interpessoais  Culpa',
      image: DemandTwo,
    },
    {
      id: 3,
      title: 'Procrastinação  Concentração/Foco  Autoconhecimento',
      image: DemandTree,
    },
  ];

  return (
    <section id="Demandas">
      <h1 className="text-3xl font-bold text-center mb-8 font-mukta-mahee text-[#ad6a51] mt-16">Algumas Demandas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mt-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Artigo;

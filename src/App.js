import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FrasesCarousel from './components/Carousel';
import Artigo from './components/Artigo';
import SectionWithText from './components/SectionWithText';
import SectionWithOne from './components/SectionWithOne';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <SectionWithOne>
        <h1 className="text-3xl font-bold text-[#ad6a51] font-mukta-mahee"><br /> Olá!</h1>
        <p className="items-center justify-center mx-4 text-[#ad6a51] font-mukta-mahee text-lg lg:text-xl" style={{ lineHeight: '32px' }}><br />Seja bem-vindo(a) a este espaço!<br /><br />
        Vamos falar um pouco sobre a psicoterapia?<br /> A partir da relação terapêutica, neutra e livre de julgamentos, você pode ter um espaço seguro, acolhedor e sigiloso para falar abertamente sobre suas angústias e explorar sua história de vida.<br /><br />
        Acredito que, com a psicoterapia, você pode trilhar um caminho que te ajuda a entender e lidar com suas dores emocionais, com o objetivo de te auxiliar a alcançar uma vida mais leve, saudável e produtiva. Que você possa, cada vez mais, se encontrar consigo e com suas potências!<br /> <br /></p>
      </SectionWithOne>
      <About />
      <FrasesCarousel />
      <SectionWithText>
        <h1 className="text-3xl font-bold mb-4 text-[#ad6a51] font-mukta-mahee">O Encontro</h1>
        <p className="items-center justify-center mx-4 text-[#ad6a51] font-mukta-mahee text-lg lg:text-xl">A psicoterapia é um espaço seguro, onde você pode expressar o que sente, explorar sua história e cuidar das suas angústias. Para isso, a importância de um ambiente com privacidade e tranquilidade,
          seja na sessão online ou presencial.<br/>A cada encontro, temos a possibilidade de reler uma página de sua história e dar um novo sentido a ela.<br/>Através da fala, podemos abrir espaço para sentimentos e dar um novo destino a eles.<br/>
          Quando você dá vazão às angústias, um espaço dentro de você pode se abrir para você se acomodar dentro de si.</p>
      </SectionWithText>
      <Artigo />
      <Footer />
    </div>
  );
};

export default App;

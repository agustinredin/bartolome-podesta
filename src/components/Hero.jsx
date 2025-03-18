import React from "react";
import Container from './ui/Container.jsx'
import { BiChat } from "react-icons/bi";
import Button from "./ui/Button.jsx";

const Hero = () => {

  const ctaClick = () => {
    document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <Container className="flex flex-col lg:flex-row justify-around">
      <div className="lg:w-1/3">
        <h1 className="text-blue text-3xl sm:text-5xl lg:text-7xl pt-2 pl-2 pr-4">Bartolomé <br/> Podestá</h1>
        <p className="pl-3 py-4 text-lg sm:text-xl lg:text-2xl "> Conseguí <b>todos</b> tus insumos médicos en un sólo lugar.</p>
        <div className=""></div>
        <Button onClick={ctaClick} className="group">
          <BiChat className="inline-block size-6"/><span className="pl-1">Hablanos</span>
        </Button>
      </div>
      <div className="lg:w-1/3 mx-auto flex justify-center lg:mx-0">
        <img src='/hero_proto_1.png' className="max-h-64 lg:max-h-96 object-contain -z-10 opacity-50 lg:opacity-100"></img>
      </div>
    </Container>
  );
};

export default Hero;

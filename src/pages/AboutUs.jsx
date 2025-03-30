import React from "react";
import Container from "../components/ui/Container";
import { Hospital, BriefcaseMedical } from "lucide-react";

const AboutUs = () => {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-y-10 w-full">
        <div className="flex flex-col justify-center xs:max-lg:text-center max-w-[600px] mx-auto">
          <h1 className="text-2xl font-bold lg:text-4xl pb-5">
            Sobre nosotros
          </h1>
          <p className="text-blue/80 text-sm lg:text-md">
            Nos dedicamos a ofrecer insumos de salud de la más alta calidad para
            profesionales y centros médicos. Nuestro compromiso es garantizar
            productos confiables, seguros y accesibles, ayudando a optimizar la
            atención y el bienestar de los pacientes.
          </p>
          <div className="flex items-center justify-center xs:max-lg:py-8">
            <div className="flex flex-col justify-evenly max-w-[600px]">
              <div className="flex pb-4">
                <Hospital
                  size={75}
                  absoluteStrokeWidth={false}
                  className="stroke-1 mr-4 hidden lg:block"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold lg:text-2xl">
                    Calidad Garantizada
                  </h2>
                  <p className="text-blue/80  text-sm lg:text-md">
                    Trabajamos con proveedores certificados y cumplimos con los
                    estándares más exigentes del sector.
                  </p>
                </div>
              </div>
              <div className="flex">
                <BriefcaseMedical
                  size={75}
                  absoluteStrokeWidth={false}
                  className="stroke-1 mr-4 hidden lg:block"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold lg:text-2xl">
                    Amplia Variedad
                  </h2>
                  <p className="text-blue/80  text-sm lg:text-md">
                    Ofrecemos un catálogo extenso de productos esenciales para
                    clínicas, hospitales y profesionales de la salud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/about_1_proto.png" alt="About us image" />
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;

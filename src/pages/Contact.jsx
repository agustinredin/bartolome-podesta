import React from "react";
import Container from "../components/ui/Container";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";
import Map from "../components/ui/Map";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  // contacto:
  // mail, tel, dir izq
  // form: nombre y apellido, correo, telefono, mensaje
  return (
    <div className="min-w-full flex flex-col lg:flex-row justify-between" id="contact">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl">Contactanos</h1>
          <p className="text-blue/80">Respuesta a la brevedad.</p>
        </div>
        <div className="flex xs:max-lg:flex-col flex-row">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
};



const ContactInfo = () => {
  return (
    <div className="xs:max-md:w-full lg:w-1/2 lg:px-8 py-12">
      <h3 className="custom-outer-border-tl text-4xl rounded-xl rounded-br-none w-fit">
        Nuestra información
      </h3>
      {/* <div className="flex flex-col gap-3 my-8">
        <div className="flex gap-3 items-center">
          <IoMailOutline size={32} />
          <span className="text-md">+12345678</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoCallOutline size={32} />
          <span className="text-md">atencion@bartolomepodesta.com.ar</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoMapSharp size={32} />
          <span className="text-md">Av. Gaona 3157  -  C.A.B.A</span>
        </div>
      </div> */}
      <span className="text-md text-gray-600 mb-4">Estamos acá para ayudarte. Contactá directo con nosotros. <b>Horarios de atención: Lu a Vi 9 a 18</b></span>
      <div className="py-10 lg:py-6 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-wrap">
            <BiMailSend className="text-primary" />
            <span className="overflow-wrap">atencion@bartolomepodesta.com.ar</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiPhone className="text-primary" />
            <span className="overflow-wrap">+54 11 4583-8441</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiMapPin className="text-primary" />
            <span className="overflow-wrap">Av. Gaona 3157 - C.A.B.A.</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end flex-1 min-w-64 xs:max-lg:min-h-[40vmax] h-80">
            {Map[0].googleMap}
          </div>
    </div>
  );
};

export default Contact;

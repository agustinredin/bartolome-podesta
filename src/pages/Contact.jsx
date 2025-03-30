import React, { useRef, useState } from "react";
import Container from "../components/ui/Container";
import MailService from "../lib/MailService";
import {
  IoCallOutline,
  IoMail,
  IoMailOutline,
  IoMapSharp,
  IoPhonePortraitOutline,
  IoPinOutline,
  IoPinSharp,
} from "react-icons/io5";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";
import Map from "../components/ui/Map";
import { CheckCircle } from "lucide-react";

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

const ContactForm = () => {
  const formRef = useRef();
  const tooltipRef = useRef();

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [pending, setPending] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true)
    let _response = await new MailService().send(formState)

    console.log("Formulario enviado:", formState);
    tooltipRef.current.style.display = 'block'
    setTimeout(() => {
      tooltipRef.current.style.display = 'none'
    }, 3000)
    setPending(false)
  };

  return (
    <div className="bg-blue/60 text-white px-8 py-6 rounded-tr-[3rem] rounded-sm xs:max-lg:w-full lg:w-1/2 my-10">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col h-full space-y-4"
      >
        <div className="fixed top-5 left-5 p-4 text-md bg-green rounded-lg hidden transition" ref={tooltipRef}>
          <div className="flex gap-4">
            <CheckCircle/>
            <p>Mensaje enviado con éxito</p>
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Nombre y Apellido</label>
          <input
            type="text"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Mail</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          />
        </div>
        <div className="flex flex-col grow">
          <label className="block font-medium mb-1">Mensaje</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full grow p-2 transition border-[2px] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="cursor-pointer xs:w-full self-end md:w-fit px-8 py-2 bg-blue text-white font-semibold hover:bg-slate-600 transition block rounded-tr-xl rounded-sm"
        >
          {pending ? "Enviando..." : "Enviar"}
        </button>
      </form>
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
      <div className="py-6 shadow-lg flex flex-col justify-center">
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

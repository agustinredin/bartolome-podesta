import React, { useRef, useState } from "react";
import Container from "../components/ui/Container";
import { useFormStatus } from "react-dom";
import MailService from "../lib/MailService";
import { IoMail, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  // contacto:
  // mail, tel, dir izq
  // form: nombre y apellido, correo, telefono, mensaje
  return (
    <div className="min-w-full flex flex-col lg:flex-row justify-between">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl">Contactanos</h1>
          <p className="text-blue/80">Respuesta a la brevedad.</p>
        </div>
        <div className="flex">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { pending } = useFormStatus();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let _response = await new MailService().send(formState)

    console.log("Formulario enviado:", formState);
    showTooltip("Mensaje enviado con éxito");
  };

  const showTooltip = (msg) => {
    console.log(msg);
  };

  return (
    <div className="bg-blue/60 text-white px-8 py-6 rounded-tr-[3rem] rounded-sm xs:max-lg:w-full lg:w-1/2 my-10">
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="flex flex-col space-y-4"
      >
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
        <div>
          <label className="block font-medium mb-1">Mensaje</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="xs:w-full self-end md:w-fit px-8 py-2 bg-blue text-white font-semibold hover:bg-slate-600 transition block rounded-tr-xl rounded-sm"
        >
          {pending ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="w-1/2 px-16 py-12">
      <div className="relative  text-white">
        <h3 className="custom-outer-border-tl text-4xl p-2  rounded-xl rounded-br-none bg-lblue w-fit">
          Nuestra
        </h3>
      </div>
      <div className="relative  text-white">
        <h3 className="custom-outer-border-br ml-8 p-2 text-4xl rounded-xl rounded-tl-none bg-lblue w-fit">
          información
        </h3>
      </div>
      <div className="flex flex-col gap-8 my-8">
        <div className="flex gap-4 items-center text-lg">
          <IoMailOutline size={36}/><span>+12345678</span>
        </div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default Contact;

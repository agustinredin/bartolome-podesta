import React, { useRef, useState } from "react";
import Container from "../components/ui/Container";
import MailService from "../lib/MailService";
import { CheckCircle } from "lucide-react";

const ContactForm = ({aside}) => {
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
      <div className={`bg-blue/80 text-white px-8 py-6 rounded-tr-[3rem] rounded-sm xs:max-lg:w-full ${!aside ? `lg:w-1/2 my-10` : ``} `}>
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
              className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#e9e9e9] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
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
              className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#e9e9e9] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
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
              className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#e9e9e9] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
              required
            />
          </div>
          <div className="flex flex-col grow">
            <label className="block font-medium mb-1">Mensaje</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#e9e9e9] grow border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={pending}
            className="cursor-pointer xs:w-full self-end md:w-fit px-8 py-2 text-black bg-white font-semibold hover:bg-lblue/50 hover:text-white transition block rounded-tr-xl rounded-sm"
          >
            {pending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    );
  };

  export default ContactForm
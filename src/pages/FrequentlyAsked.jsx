import React from "react";
import Container from "../components/ui/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";

const FrequentlyAsked = () => {
  const faqs = [
    {
      question: "¿Qué tipo de productos médicos ofrecen?",
      answer: "Ofrecemos una amplia variedad de insumos médicos, equipos de diagnóstico, material descartable y equipamiento hospitalario.",
    },
    {
      question: "¿Puedo comprar productos sin ser profesional de la salud?",
      answer: "Sí, algunos productos están disponibles para el público en general, pero ciertos insumos y equipos requieren documentación profesional.",
    },
    {
      question: "¿Realizan envíos a todo el país?",
      answer: "Sí, realizamos envíos a todo el territorio nacional a través de servicios de logística seguros y confiables.",
    },
    {
      question: "¿Puedo realizar una devolución si el producto no es el correcto?",
      answer: "Sí, aceptamos devoluciones en caso de errores en el pedido o productos defectuosos, siempre que se notifiquen dentro de los primeros 7 días hábiles.",
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Aceptamos transferencias bancarias y pagos a través de plataformas electrónicas.",
    },
    {
      question: "¿Los productos tienen garantía?",
      answer: "Sí, todos nuestros productos cuentan con garantía oficial del fabricante. La duración depende del tipo de producto.",
    },
  ];
  

  return (
    <div className="min-w-full flex flex-col lg:flex-row justify-between">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl">Preguntas frecuentes</h1>
          <p className="text-blue/80">Respuesta a la brevedad.</p>
        </div>
        <div className="flex xs:max-lg:flex-col flex-row justify-center items-center mx-auto max-w-screen-sm">
          <Accordion type="single" collapsible className="w-full my-8">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="my-4"
              >
                <AccordionTrigger className="text-left text-lg cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="text-muted text-md mr-6 lg:m-0 lg:mx-6"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

// export default function Page() {
//   return (
//     <div className="bg-white rounded-t-[3rem] h-content relative my-24">
//       <section className="py-12">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col">
//           <h2 className="text-5xl font-bold text-gray-900 text-center mt-10">
//             Preguntas Frecuentes
//           </h2>

//         <h4 className="my-8 text-muted">
//           ¿Tienes alguna pregunta que no se encuentra aquí?{" "}
//           <Link
//             href="/contacto"
//             className="text-blue-500 hover:text-blue-700"
//           >
//             Escríbenos
//           </Link>
//           .
//         </h4>
//     </div>
//         </section >
//       </div >
//     )
// }

export default FrequentlyAsked;

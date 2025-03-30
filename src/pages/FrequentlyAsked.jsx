import React from 'react'
import Container from '../components/ui/Container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion";

const FrequentlyAsked = () => {

  const faqs = [
    {
      question: "¿Qué es M2Go?",
      answer:
        "Es una plataforma para la compra y entrega de comida. Nunca ha sido más fácil y rápido tener tu plato favorito.",
    },
    {
      question: "¿Dónde está disponible M2Go?",
      answer:
        "Revisa la aplicación y encontrarás los restaurantes cercanos a tu localidad. También puedes visualizar en el mapa toda la cobertura de M2Go.",
    },
    {
      question: "¿Cómo utilizo M2Go?",
      answer:
        '<ol class="list-decimal"><li>Accede la aplicación e indica la dirección de entrega.</li><li>Elige, de la lista, el restaurante de tu preferencia Revisa el menú.</li> <li>Haz tu pedido y paga en línea.</li> <li>Realiza el seguimiento de tu orden.</li> <li>Veras cuando el restaurante acepta y empieza a preparar tu comida.</li> <li>Además, podrás ver la información del repartidor, una vez sea asignado.</li></ol>',
    },
    {
      question: "¿Cuánto cuesta M2Go?",
      answer:
        "Registrarte como cliente de M2Go es gratis. El costo por comida varía según los restaurantes participantes.",
    },
    {
      question: "¿Dónde entrega el repartidor?",
      answer:
        "Entregará el pedido en la puerta, a la dirección que hayas ingresado en la plataforma.",
    },
  ];


  return (
    <div className="min-w-full flex flex-col lg:flex-row justify-between">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl">Preguntas frecuentes</h1>
          <p className="text-blue/80">Respuesta a la brevedad.</p>
        </div>
        <div className="flex xs:max-lg:flex-col flex-row">
        <Accordion type="single" collapsible className="w-full my-8">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="my-4"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-muted text-lg mx-6"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </Container>
    </div>
  )
}


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

export default FrequentlyAsked
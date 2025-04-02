const Products = [
    {
      id: 1,
      title: "Esponja hemostática TenaTac",
      description: "Esponja hemostática de gelatina utilizada para controlar hemorragias durante procedimientos quirúrgicos.",
      image: "https://tienda.euroswiss.com.ar/images/shop/upload/thumbnails/250x250fsO/esponja_hemostatica_curaspon_cubo_1.jpg"
    },
    {
      id: 2,
      title: "Crema base (Sanadrog)",
      description: "Crema base hidrosoluble de 1 kg, de alto grado de absorción, neutra e hipoalergénica. No deja residuos y es apta para mezclar con extractos o aceites sin perder sus propiedades.",
      image: "https://tienda.euroswiss.com.ar/catalogo/varios/crema-base/crema-base/producto/crema-base-sanadrog"
    },
    {
      id: 3,
      title: "Crema base (Coloplast)",
      description: "Crema barrera ideal para el tratamiento de la piel seca o irritada, provocada por exudados de heridas. Suaviza la piel y contiene una solución amortiguadora del pH que restablece el valor correcto del pH de la piel.",
      image: "https://tienda.euroswiss.com.ar/catalogo/varios/crema-base/crema-base/producto/crema-base-coloplast"
    },
    {
      id: 4,
      title: "Máscara de Oxígeno (HG)",
      description: "Máscara flexible y translúcida que se adapta perfectamente a la cara del paciente. Disponible en diferentes tamaños para neonatales, niños y adultos.",
      image: "https://tienda.euroswiss.com.ar/catalogo/producto/m%C3%A1scara-de-ox%C3%ADgeno-hg"
    },
    {
      id: 5,
      title: "Vital 1 y 2 de 1000 grs (Nutricia Bagó)",
      description: "Fórmula de lactancia que ayuda a la alimentación de los más pequeños del hogar. Su combinación de vitaminas y ácidos grasos esenciales permite absorber los nutrientes necesarios para un crecimiento sano y fuerte.",
      image: "https://tienda.euroswiss.com.ar/catalogo/varios/nutricion/nutricion-2/producto/vital-1-y-2-de-1000-grs-nutricia-bag%C3%B3"
    },
    {
      id: 6,
      title: "Tela Micropore (3M)",
      description: "Cinta adhesiva microporosa de la marca 3M, ideal para fijación de apósitos y dispositivos médicos. Buena adaptabilidad a sitios anatómicos complejos y excelente apariencia que mimetiza el color de la piel.",
      image: "https://tienda.euroswiss.com.ar/catalogo/enfermeria/telas-adhesivas/tela-microporosa/producto/tela-micropore-3m"
    },
    {
      id: 7,
      title: "Clorhexidina (IQB)",
      description: "Solución antiséptica utilizada para la reducción de la carga bacteriana cutánea en la preparación preoperatoria del paciente y del profesional. También se emplea en el tratamiento de infecciones superficiales de la piel.",
      image: "https://tienda.euroswiss.com.ar/catalogo/varios/antisepticos/clorhexidina/producto/clorhexidina-iqb"
    },
    {
      id: 8,
      title: "Clorhexidina (Sertex)",
      description: "Solución de clorhexidina al 4% con dosificador, utilizada como antiséptico en procedimientos médicos. Disponible en presentaciones de 250 ml, 500 ml, 1 litro y 5 litros.",
      image: "https://tienda.euroswiss.com.ar/catalogo/varios/antisepticos/clorhexidina/producto/clorhexidina-sertex"
    }
  ].map(item => ({...item, image: `https://placehold.co/${item.id * 100}`}))

export default Products
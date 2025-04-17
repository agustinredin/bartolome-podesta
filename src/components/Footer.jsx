import "../App.css";
import Map from "./ui/Map";
import Container from "./ui/Container";

const Footer = () => {

  return (
    <footer className="flex justify-center bg-blue/80 rounded-t-2xl mt-32">
      <Container className="lg:max-w-[70vw] !my-0 pt-8 xs:max-lg:my-2 text-white flex flex-col justify-center">
        <div className="flex justify-between xs:max-lg:justify-center xs:max-lg:flex-col lg:pb-8">
          <div className="flex xs:max-lg:flex-col xs:max-lg:text-center">
            <div className="flex flex-col pl-1 lg:pr-8">
              <div className="xs:max-lg:py-4 lg:h-40 rounded-2xl lg:p-2">
                <h3 className="lg:mb-[1.3rem] py-1 px-2 lg:bg-blue rounded-2xl lg:w-fit">Dirección</h3>
                <p className="text-sm">Av.Gaona 3157 - C.A.B.A</p>
                <p className="text-sm">C1416DSG - Rep.Argentina</p>
              </div>
              <div className="xs:max-lg:py-4 lg:h-40 p-2">
                <h3 className="lg:mb-[1.3rem] lg:my-[1.3rem] py-1 px-2 lg:bg-blue rounded-2xl lg:w-fit">Contacto</h3>
                <p className="text-sm">Mail: ventas@bartolomepodesta.com.ar</p>
                <p className="text-sm">Teléfono: +54 11 4583-8441</p>
                <p className="text-sm">4581-2849 4582-4086</p>
              </div>
            </div>
            <div className="flex flex-col pl-1 lg:pr-8">
              <div className="xs:max-lg:py-4 lg:h-40 bg-blue rounded-tr-[3rem] rounded-sm p-2">
                <h3 className="lg:mb-[1.3rem] py-1  lg:bg-blue rounded-2xl lg:w-fit">Links</h3>
                <a className="text-sm block transition hover:text-lblue hover:translate-x-1" href="/about">
                  Nosotros
                </a>
                <a className="text-sm block transition hover:text-lblue hover:translate-x-1" href="/products">
                  Productos
                </a>
                <a className="text-sm block transition hover:text-lblue hover:translate-x-1" href="/faq">
                  Preguntas frecuentes
                </a>
              </div>
              <div className="xs:max-lg:py-4 lg:h-36 rounded-2xl p-2">
                <h3 className="lg:mb-[1.3rem] lg:my-[1.3rem] py-1 px-2 lg:bg-blue rounded-2xl lg:w-fit">Empresa</h3>
                <p className="text-sm">Bartolomé Podestá</p>
                <p className="text-sm">Productos medicos</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end flex-1 min-w-64 xs:max-lg:min-h-[40vmax] h-80">
            {Map[0].googleMap}
          </div>
        </div>
        <div className="lg:pl-1 py-2 flex justify-center items-center rounded-t-2xl rounded-b-sm">
          <p className="flex flex-col lg:w-full pt-2 xs:max-lg:text-center text-sm">
            © Copyright 2025 Bartolomé Podesta - All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

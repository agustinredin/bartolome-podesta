import "../App.css";
import Map from "./ui/Map";
import Container from "./ui/Container";


const Footer = () => {
    return (
        <footer className="flex justify-center bg-black pt-4 pb-4">
            <Container className="w-[60vw] h-[65vh] text-white flex flex-col justify-center">
                <div className="h-[90%] flex">
                    <div className="w-6/12 flex">
                        <div className="w-1/2 flex flex-col pt-[3rem] pl-1">
                            <h3 className="pb-[1.3rem]">Dirección</h3>
                            <p className="text-sm pt-3 pb-[4rem]">{`Av.Gaona 3157 - C.A.B.A\nC1416DSG - Rep.Argentina`}</p>
                            <h3 className="pb-[1.3rem]">Contacto</h3>
                            <p className="text-sm">Mail: ba_podesta@arnet.com.ar</p>
                            <p className="text-sm">Teléfono: +54 114583-8441</p>
                            <p className="text-sm">4581-2849  4582-4086</p>

                        </div>

                        <div className="w-1/2 flex flex-col pt-[3rem] pl-1">
                            <h3 className="pb-[1.3rem]">Links</h3>
                            <a className="text-sm" href="/about">Nosotros</a>
                            <a className="text-sm" href="/products">Productos</a>
                            <a className="text-sm pb-[4rem]" href="/faq">Preguntas frecuentes</a>
                            <h3 className="pb-[1.3rem]">Empresa</h3>
                            <p className="text-sm pt-4">Bartolomé Podesta</p>
                            <p className="text-sm">Productos medicinales</p>
                        </div>
                    </div>
                    <div className="w-7/12 flex flex-col justify-center items-center">
                        {Map[0].googleMap}
                    </div>
                </div>
                <div className="h-[10%] flex items-center pl-1 border-t-1 border-t-white/15 bg-black-700">
                    <p className="flex flex-col w-1/2 text-sm">© Copyright 2020 Bartolomé Podesta - All Rights Reserved</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;

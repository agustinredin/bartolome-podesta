import "../App.css";
import Map from "./ui/Map";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    // moví un par de archivos y configuré mejor la estructura del proyecto. fijate bien esto

    // └───src
    // │   App.css
    // │   App.jsx
    // │   main.jsx
    // │
    // ├───components
    // │   │   Cards.jsx
    // │   │   Footer.jsx
    // │   │   Hero.jsx
    // │   │   NavBar.jsx
    // │   │
    // │   └───ui
    // │           Container.jsx
    // │           Map.jsx
    // │
    // ├───lib
    // │       ProductList.js
    // │       utils.js
    // │
    // └───pages
    //         AboutUs.jsx
    //         Contact.jsx
    //         FrequentlyAsked.jsx
    //         Products.jsx

    // /components/ui son elementos concretos, por ejemplo un mapa, o componentes reutilizables sin contenido, ej container
    // /components son las secciones
    // /pages son las paginas como si fuera /pages en un proyecto html nativo. el index es App.jsx
    // /lib son archivos js que sirven (por ejemplo origen de datos en forma de array)
    // configuré el app router y el .env
    // vos preguntá



    // que tenes que hacer aca en footer:
    // 1 hacer que el area de la section sea toda, es decir, que no haya espacios en blanco a los costados
    // 2 mapa un 15/20% mas chico (tanto w como h) y usando solo tailwind automaticamente responsive:
    // // (si hay un bug visual no lo arregles con 95% 95%, fijate de reordenar las clases de css)
    // // (y tambien no uses un array con 2 iframe, hace uno solo y de ultima yo arreglo el cambio de desktop a mobile)
    // 3 la parte de abajo del footer con el mismo color que arriba y con una linea de separación, exactamente como en la referencia
    // 4 reemplazarle la información lorem por la información real según la de la referencia 
    // 5 sacarle los iconos de redes, segun entendí no tienen ninguna, aunque esten en la referencia
    // 6 minimizar la cantidad de clases custom (-[valor]) asi despues es mas facil hacerlo responsive 
    // 7 hacer dinamica la api key de map.jsx: que cargue del .env el valor MAPS_API_KEY

    return (
        <footer className="flex justify-center">
            <section className="w-[50vw] h-[65vh] bg-black text-white flex flex-col">
                <div className="h-[90%] flex">
                    <div className="w-6/12 flex">
                        <div className="w-1/2 flex flex-col pt-[3rem] pl-1">
                            <h3 className="pb-[1.3rem]">lorem ipsum</h3>
                            <p className="pt-4 pb-[4rem]">{`Av.Random 3142 - C.A.B.A\nCp1000 - BSAS, Argentina`}</p>
                            <h3 className="pb-[1.3rem]">lorem ipsum</h3>
                            <p className="pt-4">{`Av.Random 3142 - C.A.B.A\nCp1000 - BSAS, Argentina`}</p>
                        </div>

                        <div className="w-1/2 flex flex-col pt-[3rem] pl-1">
                            <h3 className="pb-[1.3rem]">lorem ipsum</h3>
                            <p className="pt-4 pb-[4rem]">{`Av.Random 3142 - C.A.B.A\nCp1000 - BSAS, Argentina`}</p>
                            <h3 className="pb-[1.3rem]">lorem ipsum</h3>
                            <p className="pt-4">{`Av.Random 3142 - C.A.B.A\nCp1000 - BSAS, Argentina`}</p></div>
                    </div>
                    <div className="w-7/12 flex flex-col justify-center items-center">
                        {Map[0].smMap}
                    </div>
                </div>
                <div className="h-[10%] flex items-center pl-1 bg-gray-700">
                    <p className="flex flex-col w-1/2 text-sm">Copyright © 2012 - 2025 TermsFeed®. All rights reserved.</p>
                    <nav className="flex w-1/2 flex-row justify-end pr-1">
                        <a className="pr-1" href=""><FaFacebook/></a>
                        <a className="pr-1" href=""><FaInstagram/></a>
                        <a href=""><FaXTwitter/></a>
                    </nav>
                </div>
            </section>
        </footer>
    );
}

export default Footer;

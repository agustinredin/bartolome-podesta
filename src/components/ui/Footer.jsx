import "../../App.css";
import Map from "../../lib/Map";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
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

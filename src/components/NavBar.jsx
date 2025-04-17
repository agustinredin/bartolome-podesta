import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";

const NavBar = () => {
  const navItems = [
    {
      name: "Productos",
      highlight: true,
      href: "/products",
    },
    {
      name: "Contacto",
      href: "/contact",
    },
    {
      name: "Sobre nosotros",
      href: "/about",
    },
    {
      name: "Preguntas frecuentes",
      href: "/faq",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const currentDirectory = useLocation().pathname;

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.key == "Escape" && isOpen) {
        setIsOpen(false);
      }
    });
  });

  const currentDirectoryStyles = {
    pointerEvents: 'none',
    color: 'var(--color-black)'
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container className="my-0">
      <div className="flex justify-between items-center py-4">
        <NavBarLogo />
        <div className="hidden lg:flex gap-6 pt-2">
          {navItems.map((item, index) => {
            let isCurrentDirectory = currentDirectory.includes(item.href);
            console.log(
              "currdir",
              currentDirectory,
              item.href,
              "IS:",
              isCurrentDirectory
            );
            
            return (
              <a
                key={index}
                href={item.href}
                className={
                  "font-highlight transition text-blue hover:text-lblue hover:-translate-y-1"
                }
                style={isCurrentDirectory == true ? {...currentDirectoryStyles} : {}}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="flex lg:hidden pt-2">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-sm bg-blue text-white"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <IoMenuOutline size={42} />
            ) : (
              <IoClose
                size={42}
                className="bg-blue stroke-blue fill-blue text-blue"
              />
            )}
          </button>

          {/* Full-screen canvas */}
          <div
            className={`z-[9999] fixed inset-0 bg-white overflow-hidden transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Top-right close button */}

            {isOpen && (
              <>
                <div className="absolute top-8 scale-[0.8]">
                  <NavBarLogo />
                </div>
                <button
                  onClick={toggleMenu}
                  className="absolute top-8 right-2 p-2 rounded-md text-black z-[100]"
                  aria-label="Close menu"
                >
                  <IoClose size={42} className="fill-blue" />
                </button>
              </>
            )}

            {/* Menu options */}
            <ul className="flex flex-col items-center justify-center h-full text-2xl">
              {navItems.map((item, index) => {
                let isCurrentDirectory = currentDirectory.includes(item.href);
                console.log(
                  "currdir",
                  currentDirectory,
                  item.href,
                  "IS:",
                  isCurrentDirectory
                );
                return (
                  <li
                    key={index}
                    className="my-8 text-2xl sm:text-3xl font-bold"
                    style={isCurrentDirectory == true ? {...currentDirectoryStyles} : {}}
                    onClick={() => toggleMenu()}
                  >
                    <Link to={item.href} className={item.className}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const NavBarLogo = () => {
  return (
    <a
      className="flex gap-2 items-center transition hover:-translate-y-1 pointer"
      href="/"
    >
      <img src="/logo.png" className="size-12" />
      {/* <h1 className="text-blue text-xl pt-2 pl-2 pr-4">Bartolomé Podestá</h1> */}
    </a>
  );
};

export default NavBar;

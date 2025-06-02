import { useState } from "react";
import logo from "../../assets/images/logos/logo1.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-[#000000] w-full py-3 px-6">
        <div className="flex items-center justify-between ">
          <img
            src={logo}
            alt="
            logo"
            height={100}
            width={100}
          />

          <nav
            className="hidden md:flex text-white space-x-6 text-sm cursor-pointer
          "
          >
            <a className=" hover:underline"> Home </a>
            <a className=" hover:underline"> Nossas Lojas </a>
            <a className=" hover:underline"> Novidades </a>
            <a className=" hover:underline"> Promoções </a>
          </nav>
          <div className="hidden sm:flex space-x-4">
            <input
              type="text"
              placeholder="Digite o produto"
              className="bg-white"
            />
            <button
              type="submit"
              className="text-white border-2 border-white px-3 "
            >
              {" "}
              Buscar
            </button>
          </div>

          <div className="hidden sm:flex space-x-4">
            <button type="submit" className="text-white  bg-[#9353FF] px-3 ">
              {" "}
              Login
            </button>
            <button
              type="submit"
              className="text-white border-2 border-white px-3 "
            >
              {" "}
              Cadastro
            </button>
          </div>
          <button
            className="flex md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#1a1a1a] text-white flex flex-col space-y-2 px-6 py-4">
            <a className="hover:underline" href="#">
              Home
            </a>
            <a className="hover:underline" href="#">
              Nossas Lojas
            </a>
            <a className="hover:underline" href="#">
              Novidades
            </a>
            <a className="hover:underline" href="#">
              Promoções
            </a>
            <button className="text-white bg-[#9353FF] px-3 py-1 rounded mt-2">
              Login
            </button>
            <button className="text-white border-2 border-white px-3 py-1 rounded">
              Cadastro
            </button>
          </div>
        )}
      </header>
    </>
  );
}

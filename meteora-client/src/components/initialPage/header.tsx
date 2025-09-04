import { useState } from "react";
import logo from "../../assets/images/logos/logo1.png";
import LoginModal from "../login-area/login";
import RegisterModal from "../login-area/register-modal";
import LoggedInHeader from "./LoggedInHeader";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  if (token) {
    return <LoggedInHeader />;
  }

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
            <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} setRegisterOpen={setRegisterModalOpen} />
            <RegisterModal open={registerModalOpen} setOpen={setRegisterModalOpen} setLoginOpen={setLoginModalOpen} />
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
            <LoginModal open={loginModalOpen} setOpen={setLoginModalOpen} setRegisterOpen={setRegisterModalOpen} />
            <RegisterModal open={registerModalOpen} setOpen={setRegisterModalOpen} setLoginOpen={setLoginModalOpen} />
          </div>
        )}
      </header>
    </>
  );
}

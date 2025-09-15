import { useState } from "react";
import logo from "../../assets/images/logos/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export default function LoggedInHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogout = () => {
    // Remove tokens do localStorage e sessionStorage
    localStorage.removeItem("token"); // se você usa "token" como chave
    localStorage.removeItem("refreshToken"); // caso use refresh
    sessionStorage.clear();

    // Se tiver cookies de autenticação
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Força reload limpando estados em memória
    window.location.href = "/";
  };

  return (
    <>
      <header className="bg-[#000000] w-full py-3 px-6">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              height={100}
              width={100}
              className="cursor-pointer"
            />
          </Link>

          <nav
            className="hidden md:flex text-white space-x-6 text-sm cursor-pointer
          "
          >
            <Link to="/" className=" hover:underline"> Home </Link>
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

          <div className="hidden sm:flex space-x-4 items-center">
            <Link to="/kart">
              <button
                type="button"
                className="text-white border-2 border-white px-3 py-1 relative hover:bg-white hover:text-black transition-colors"
              >
                🛒 Carrinho
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>
            <Link to="/profile">
              <button
                type="button"
                className="text-white border-2 border-white px-3 py-1 hover:bg-white hover:text-black transition-colors"
              >
                Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="text-white border-2 border-white px-3 py-1 hover:bg-red-500 hover:border-red-500 transition-colors"
            >
              Logout
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
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <a className="hover:underline" href="#">
              Nossas Lojas
            </a>
            <a className="hover:underline" href="#">
              Novidades
            </a>
            <a className="hover:underline" href="#">
              Promoções
            </a>
            <Link to="/kart">
              <button className="text-white bg-blue-600 px-3 py-1 rounded mt-2 flex items-center gap-2">
                🛒 Carrinho
                {cartItems.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>
            <Link to="/profile">
              <button className="text-white bg-[#9353FF] px-3 py-1 rounded mt-2">
                Profile
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-3 py-1 rounded mt-2"
            >
              Logout
            </button>
          </div>
        )}
      </header>
    </>
  );
}

import logo from "../../assets/images/logos/logo1.png";

export default function Header() {
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
            className="text-white flex space-x-6 text-sm cursor-pointer
          "
          >
            <a className=" hover:underline"> Home </a>
            <a className=" hover:underline"> Nossas Lojas </a>
            <a className=" hover:underline"> Novidades </a>
            <a className=" hover:underline"> Promoções </a>
          </nav>
          <div className="flex space-x-4">
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

          <div className="flex space-x-4">
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
        </div>
      </header>
    </>
  );
}

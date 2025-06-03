import pix from "../../assets/images/icones/pix.png";
import arrow from "../../assets/images/icones/arrow-repeat.png";
import flower from "../../assets/images/icones/flower1.png";

export default function Footer() {
  return (
    <>
      <div className="bg-black w-full px-4 py-10 ">
        <div className="md:flex justify-center">
          <p className="text-xl text-center md:text-2xl text-white semi-bold ">
            {" "}
            Conheça todas as nossas facilidades{" "}
          </p>
        </div>

        <div className="flex flex-col gap-y-10 md:flex-row items-center justify-center md:gap-30 mx-auto md:mx-30 mt-10">
          <div className="flex flex-col-1 sm:flex-col-1 gap-5">
            <img src={pix} alt="imagem" />
            <div className="flex flex-col space-y-3 ">
              <p className="text-[#DAFF01] text-lg"> Pague Pelo Pix </p>
              <p className=" text-white text-xs max-w-[150px]">
                {" "}
                Ganhe 5% OFF em pagamentos via PIX
              </p>
            </div>
          </div>

          <div className="flex flex-row  gap-5">
            <img src={arrow} alt="imagem" />
            <div className="flex flex-col space-y-3 ">
              <p className="text-[#DAFF01] text-xl"> Troca Gratis </p>
              <p className=" text-white text-xs max-w-[150px]">
                {" "}
                Fique livre para trocar em até 30 dias
              </p>
            </div>
          </div>

          <div className="flex flex-row  gap-5">
            <img src={flower} alt="imagem" />
            <div className="flex flex-col space-y-3 ">
              <p className="text-[#DAFF01] text-xl"> Sustentabilidade </p>
              <p className=" text-white text-xs max-w-[150px]">
                {" "}
                Moda responsável, que respeita o meio ambiente
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-10 justify-center px-4 py-10 ">
        <div className="border-2 items-center mt-10 text-center max-w-[600px] py-5 px-5">
          <p>
            {" "}
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? Cadastre-se!
          </p>
          <div className="flex flex-row gap-5 mt-5 justify-center">
            <input
              type="text"
              placeholder="Digite seu email"
              className="border w-64"
            />
            <button type="submit" className=" bg-[#9353FF] px-2 ">
              {" "}
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full bg-black mt-10 h-10 items-center flex justify-center">
        <p className="text-white text-sm text-center">
          {" "}
          2025 © Desenvolvido por Arthur Tenorio | Projeto fictício sem fins
          comerciais.
        </p>
      </div>
    </>
  );
}

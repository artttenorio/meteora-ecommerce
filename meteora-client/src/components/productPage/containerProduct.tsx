import image from "../../assets/images/models/desktop/Camiseta.png";
import imagePhone from "../../assets/images/models/phone/Camiseta1.png";

export default function ProductContainer() {
  return (
    <>
      <div className="mt-15 px-4 sm:px-10 md:px-22 lg:px-30 xl:px-40 mb-50 ">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between ">
          <div className="flex justify-center">
            <img
              src={image}
              alt="imagem"
              width={500}
              className=" hidden sm:block "
            />

            <img src={imagePhone} alt="imagem" className="block sm:hidden" />
          </div>
          <div className="">
            <div className="flex flex-col gap-y-5 mb-10">
              <p className="text-2xl font-semibold"> Nome </p>
              <p className="text-sm"> Descrição </p>
              <hr />
            </div>

            <div className="flex flex-col gap-y-5 mb-10">
              <p className="text-2xl font-semibold"> Preço R$:</p>
              <p> Vendido e entregue por</p>
              <hr />
            </div>

            <div className="mb-10">
              <p className="text-2xl font-semibold mb-5"> Cores: </p>
              <div className="flex flex-row gap-20 mb-5">
                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" id="cor1" name="cor" />
                  <label htmlFor="cor1"> Cor1 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" id="cor2" name="cor" />
                  <label htmlFor="cor2"> Cor2 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" id="cor3" name="cor" />
                  <label htmlFor="cor3"> Cor3 </label>
                </div>
              </div>

              <hr />
            </div>

            <div className="mb-10">
              <p className="text-2xl font-semibold mb-5"> Tamanho </p>

              <div className="flex flex-row md:flex-row md:gap-20 sm:gap-5 sm:flex-col mb-5 w-full">
                <div className="flex flex-col gap-2 gap-y-2">
                  <input type="radio" id="tam1" name="tam" />
                  <label htmlFor="tam1"> Tam1 </label>
                </div>

                <div className="flex flex-col  gap-2 gap-y-2">
                  <input type="radio" id="tam1" name="tam" />
                  <label htmlFor="tam2"> Tam2 </label>
                </div>

                <div className="flex flex-col  gap-2 gap-y-2">
                  <input type="radio" id="tam1" name="tam" />
                  <label htmlFor="tam3"> Tam3 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-2">
                  <input type="radio" />
                  <label> Tam4 </label>
                </div>

                <div className="flex flex-col  gap-2 gap-y-2">
                  <input type="radio" />
                  <label> Tam5 </label>
                </div>
              </div>
              <hr />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#9353FF] text-white px-5 py-2 cursor-pointer hover:bg-[#5d4881]"
              >
                {" "}
                Adicionar à sacola
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import image from "../../assets/images/models/desktop/Camiseta.png";

export default function ProductContainer() {
  return (
    <>
      <div className="mt-30 sm:px-10 md:px-22 lg:px-40 xl:px-70 mb-40">
        <div className="flex justify-between">
          <div>
            <img src={image} alt="imagem" width={500} />
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
                  <input type="radio" />
                  <label> Cor1 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Cor2 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Cor3 </label>
                </div>
              </div>
              <hr />
            </div>

            <div className="mb-10">
              <p className="text-2xl font-semibold mb-5"> Tamanho </p>

              <div className="flex flex-row gap-20 mb-5">
                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Tam1 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Tam2 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Tam3 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
                  <input type="radio" />
                  <label> Tam4 </label>
                </div>

                <div className="flex flex-col gap-2 gap-y-5">
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

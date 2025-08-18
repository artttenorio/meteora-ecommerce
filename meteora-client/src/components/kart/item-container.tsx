type ItemContainerProps = {
  name: string;
  description: string;
  price: string;
  quantity: number;
};

export default function ItemContainer({
  name,
  description,
  price,
  quantity,
}: ItemContainerProps) {
  return (
    <>
      <div className="flex flex-col w-full">
        <p>
          {" "}
          <p className="font-white "> Detalhes da compra </p>
        </p>
        <div className="mt-30 flex flex-row justify-between w-full px-2 ">
          <div>
            <img src={""} width={100} height={100} />
          </div>
          <div>
            <p> {name || "Sem nome"} </p>
            <p> {description || "Sem descrição"} </p>
          </div>
          <div>
            <p> {price || "Sem preço"}</p>
          </div>
          <div>
            <button>-</button>
            <input
              type="number"
              min="1"
              className="w-12 text-center"
              value={quantity || 1}
              readOnly
            />
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

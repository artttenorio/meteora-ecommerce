import image from "@/assets/images/models/desktop/Camiseta.png";

export default function ItemContainer(props: any) {
  return (
    <>
      <div className="flex flex-col w-full">
        <p>
          {" "}
          <p className="font-white "> Detalhes da compra </p>
        </p>
        <div className="mt-30 flex flex-row justify-between w-full px-2 ">
          <div>
            <img src={image} width={100} height={100} />
          </div>
          <div>
            <p> {props.name || "Sem nome"} </p>
            <p> {props.description || "Sem descrição"} </p>
          </div>
          <div>
            <p> {props.price || "Sem preço"}</p>
          </div>
          <div>
            <button>-</button>
            <input
              type="number"
              min="1"
              className="w-12 text-center"
              value={props.quantity || 1}
              readOnly
            />
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

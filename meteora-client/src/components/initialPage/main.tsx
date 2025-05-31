import FullScreenCarousel from "../carousel/FullScreenCarousel";
import Card from "../ItemsCard/card";

import camiseta from "../../assets/images/items/camiseta.png";
import bolsa from "../../assets/images/items/bolsa.png";
import calcado from "../../assets/images/items/tenis.png";
import calca from "../../assets/images/items/calça.png";
import casaco from "../../assets/images/items/jaqueta.png";
import oculos from "../../assets/images/items/oculos.png";

type CardItem = {
  name: string;
  ImageURl: string;
};

const cardItem: CardItem[] = [
  {
    name: "Camiseta",
    ImageURl: camiseta,
  },
  {
    name: "Bolsas",
    ImageURl: bolsa,
  },
  {
    name: "Calçados",
    ImageURl: calcado,
  },
  {
    name: "Calças",
    ImageURl: calca,
  },
  {
    name: "Casacos",
    ImageURl: casaco,
  },
  {
    name: "Óculos",
    ImageURl: oculos,
  },
];

export default function Main() {
  return (
    <>
      <div>
        <div className="flex">
          <FullScreenCarousel />
        </div>

        <div className="mt-15 mx-80">
          <p className="flex text-3xl justify-center ">
            {" "}
            Busque por categoria:
          </p>
          <div className="mt-10 flex justify-between items-start">
            {cardItem.map((item) => (
              <Card key={item.name} name={item.name} image={item.ImageURl} />
            ))}
          </div>

          <div className="mt-15">
            <p className="flex text-3xl justify-center items-center">
              Produtos que estão bombando!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import FullScreenCarousel from "../carousel/FullScreenCarousel";
import Card from "../ItemsCard/card";

import camiseta from "../../assets/images/items/camiseta.png";
import bolsa from "../../assets/images/items/bolsa.png";
import calcado from "../../assets/images/items/tenis.png";
import calca from "../../assets/images/items/calça.png";
import casaco from "../../assets/images/items/jaqueta.png";
import oculos from "../../assets/images/items/oculos.png";
import ContainerCard from "../ItemsCard/containerCard";

import modelCamiseta from "../../assets/images/models/Camiseta.png";
import modelBolsa from "../../assets/images/models/Bolsa1.png";
import modelCalcado from "../../assets/images/models/Tenis.png";
import modelCasaco from "../../assets/images/models/Jaqueta3.png";
import modelOculos from "../../assets/images/models/Óculos4.png";
import modelCalca from "../../assets/images/models/Calça.png";

type CardItem = {
  name: string;
  ImageURl: string;
};

type ContainerItem = {
  name: string;
  imageURl: string;
  description: string;
  price: string;
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

const containerItem: ContainerItem[] = [
  {
    name: "Camiseta",
    imageURl: modelCamiseta,
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: "70,00",
  },
  {
    name: "Calça Alfaiataria",
    imageURl: modelCalca,
    description:
      "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    price: "180,00",
  },
  {
    name: "Tênis Chunky",
    imageURl: modelCalcado,
    description:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    price: "250,00",
  },

  {
    name: "Jaqueta Jeans",
    imageURl: modelCasaco,
    description:
      "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    price: "150,00",
  },
  {
    name: "Óculos Redondo",
    imageURl: modelOculos,
    description:
      "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: "70,00",
  },
  {
    name: "Bolsa Coringa",
    imageURl: modelBolsa,
    description:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: "120,00",
  },
];

export default function Main() {
  return (
    <>
      <div>
        <div className="flex">
          <FullScreenCarousel />
        </div>

        <div className="mt-15 mx-60">
          <p className="flex text-3xl justify-center ">
            {" "}
            Busque por categoria:
          </p>
          <div className="mt-10 flex justify-between gap-5 ">
            {cardItem.map((item) => (
              <Card key={item.name} name={item.name} image={item.ImageURl} />
            ))}
          </div>

          <div className="mt-15 ">
            <p className="flex text-3xl justify-center items-center">
              Produtos que estão bombando!
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 space-y-40">
            {containerItem.map((item) => (
              <ContainerCard
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.imageURl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

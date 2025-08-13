import { useEffect, useState } from "react";
import axios from "axios";
import FullScreenCarousel from "../carousel/FullScreenCarousel";
import Card from "../ItemsCard/card";

import modelCamisetaTablet from "../../assets/images/models/tablet/Camiseta1.png";
import modelBolsaTablet from "../../assets/images/models/tablet/Bolsa1.png";
import modelCalcadoTablet from "../../assets/images/models/tablet/Tenis1.png";
import modelCalcaTablet from "../../assets/images/models/tablet/Calça1.png";
import modelCasacoTablet from "../../assets/images/models/tablet/Jaqueta1.png";
import modelOculosTablet from "../../assets/images/models/tablet/óculos1.png";

import modelCamisetaPhone from "../../assets/images/models/phone/Camiseta1.png";
import modelBolsaPhone from "../../assets/images/models/phone/Bolsa1.png";
import modelCalcadoPhone from "../../assets/images/models/phone/Tenis1.png";
import modelCalcaPhone from "../../assets/images/models/phone/Calça1.png";
import modelCasacoPhone from "../../assets/images/models/phone/Jaqueta1.png";
import modelOculosPhone from "../../assets/images/models/phone/óculos1.png";

import modelCamiseta from "../../assets/images/models/desktop/Camiseta.png";
import modelBolsa from "../../assets/images/models/desktop/Bolsa1.png";
import modelCalcado from "../../assets/images/models/desktop/Tenis.png";
import modelCasaco from "../../assets/images/models/desktop/Jaqueta3.png";
import modelOculos from "../../assets/images/models/desktop/Óculos4.png";
import modelCalca from "../../assets/images/models/desktop/Calça.png";
import ContainerCard from "../ItemsCard/containerCard";

type CardItem = {
  name: string;
  ImageURl: string;
};

type ContainerItem = {
  name: string;
  imageDesktop: string;
  imageTablet: string;
  imagePhone: string;
  description: string;
  price: string;
};

type Category = {
  name: string;
  imageDesktop?: string;
  imageTablet?: string;
  imagePhone?: string;
  description?: string;
  price?: string;
  imageUrl?: string; // caso tenha só uma imagem principal
};

const containerItem: ContainerItem[] = [
  {
    name: "Camiseta",
    imageDesktop: modelCamiseta,
    imagePhone: modelCamisetaPhone,
    imageTablet: modelCamisetaTablet,
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: "70,00",
  },
  {
    name: "Calça Alfaiataria",
    imageDesktop: modelCalca,
    imagePhone: modelCalcaPhone,
    imageTablet: modelCalcaTablet,
    description:
      "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    price: "180,00",
  },
  {
    name: "Tênis Chunky",
    imageDesktop: modelCalcado,
    imagePhone: modelCalcadoPhone,
    imageTablet: modelCalcadoTablet,
    description:
      "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    price: "250,00",
  },

  {
    name: "Jaqueta Jeans",
    imageDesktop: modelCasaco,
    imagePhone: modelCasacoPhone,
    imageTablet: modelCasacoTablet,
    description:
      "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    price: "150,00",
  },
  {
    name: "Óculos Redondo",
    imageDesktop: modelOculos,
    imagePhone: modelOculosPhone,
    imageTablet: modelOculosTablet,
    description:
      "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    price: "70,00",
  },
  {
    name: "Bolsa Coringa",
    imageDesktop: modelBolsa,
    imagePhone: modelBolsaPhone,
    imageTablet: modelBolsaTablet,
    description:
      "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    price: "120,00",
  },
];

export default function Main() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resCategories = await axios.get(
          "http://localhost:3000/categories"
        );
        setCategories(resCategories.data);

        const resProducts = await axios.get("http://localhost:3000/products");
        setProducts(resProducts.data);
      } catch (err) {
        console.error("Erro ao buscar dados", err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="flex">
          <FullScreenCarousel />
        </div>

        <div className="mt-15 sm:px-10 md:px-22 lg:px-30 xl:px-40 ">
          <p className="flex text-2xl sm:text-3xl justify-center mb-10 ">
            {" "}
            Busque por categoria:
          </p>
          <div className="flex flex-wrap justify-center lg:grid-cols-6 sm:justify-between gap-4 sm:gap-6 mb-12">
            {categories.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                image={`/images/items/desktop/${item.imageUrl}`}
              />
            ))}
          </div>

          <p className="text-2xl sm:text-3xl justify-center font-semibold text-center mb-10">
            Produtos que estão bombando!
          </p>
          <div className="flex justify-center">
            <div className=" grid grid-cols-1 gap-y-40  lg:grid-cols-3 lg:gap-40 mx-auto mb-50 ">
              {containerItem.map((item) => (
                <ContainerCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imageDesktop={item.imageDesktop}
                  imagePhone={item.imagePhone}
                  imageTablet={item.imageTablet}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

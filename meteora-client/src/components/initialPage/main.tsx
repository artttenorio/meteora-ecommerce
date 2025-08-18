import { useEffect, useState } from "react";
import axios from "axios";
import FullScreenCarousel from "../carousel/FullScreenCarousel";
import Card from "../ItemsCard/card";
import ContainerCard from "../ItemsCard/containerCard";

type Category = {
  name: string;
  imageDesktop?: string;
  imageTablet?: string;
  imagePhone?: string;
  description?: string;
  price?: string;
  imageUrl?: string; 
};

type Product = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

export default function Main() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

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
              {products.map((item) => (
                <ContainerCard
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imageDesktop={`/images/items/desktop/${item.imageUrl}`}
                  imagePhone={`/images/items/desktop/${item.imageUrl}`}
                  imageTablet={`/images/items/desktop/${item.imageUrl}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

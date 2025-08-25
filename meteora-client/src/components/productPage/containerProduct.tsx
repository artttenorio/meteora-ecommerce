import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
};

export default function ProductContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Erro ao buscar produto", err);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto mt-0 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <picture>
            <source
              srcSet={`/images/items/desktop/${product.imageUrl}`}
              media="(min-width: 640px)"
            />
            <img
              src={`/images/items/desktop/${product.imageUrl}`}
              alt="Product Image"
              className="rounded-lg shadow-lg"
            />
          </picture>
        </div>

        <div className="flex flex-col justify-center mt-20">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-4xl font-extrabold text-gray-900 mb-2">
              R$ {product.price}
            </p>
            <p className="text-sm text-gray-500">
              Vendido e entregue por <strong>Nossa Loja</strong>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Cores</h2>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-2 border-blue-700"></div>
              <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Tamanho
            </h2>
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                P
              </div>
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                M
              </div>
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                G
              </div>
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-200">
                GG
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-60">
            <div className="flex items-center border-2 border-gray-300 rounded-md">
              <button className="px-3 py-1">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1">+</button>
            </div>
            <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

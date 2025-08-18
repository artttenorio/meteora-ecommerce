import { useNavigate } from "react-router";

type ContainerCardProps = {
  name: string;
  description: string;
  price: string;
  imageDesktop: string;
  imageTablet: string;
  imagePhone: string;
};

export default function ContainerCard({ 
  name, 
  description, 
  price, 
  imageDesktop, 
  imageTablet, 
  imagePhone 
}: ContainerCardProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between h-[400px] w-[300px] ">
        <img
          src={imageDesktop}
          alt="image"
          className="hidden md:block"
        ></img>
        <img
          src={imageTablet}
          alt="image"
          className="hidden sm:block md:hidden"
        ></img>
        <img
          src={imagePhone}
          alt="image"
          className="block sm:hidden"
        ></img>

        <div className="items-start space-y-4 mx-2 mt-5">
          <p
            className="text-xl font-semibold
"
          >
            {" "}
            {name}
          </p>
          <p className="text-xs"> {description}</p>
          <p className="text-sm font-semibold"> {price}</p>

          <button
            onClick={() => navigate("/product")}
            className="bg-[#9353FF] text-white px-3 cursor-pointer hover:bg-[#5d4881]"
          >
            {" "}
            Ver mais
          </button>
        </div>
      </div>
    </>
  );
}

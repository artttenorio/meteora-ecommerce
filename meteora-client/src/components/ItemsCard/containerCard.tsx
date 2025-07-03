import { useNavigate } from "react-router";

export default function ContainerCard(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between h-[400px] w-[300px] ">
        <img
          src={props.imageDesktop}
          alt="image"
          className="hidden md:block"
        ></img>
        <img
          src={props.imageTablet}
          alt="image"
          className="hidden sm:block md:hidden"
        ></img>
        <img
          src={props.imagePhone}
          alt="image"
          className="block sm:hidden"
        ></img>

        <div className="items-start space-y-4 mx-2 mt-5">
          <p
            className="text-xl font-semibold
"
          >
            {" "}
            {props.name}
          </p>
          <p className="text-xs"> {props.description}</p>
          <p className="text-sm font-semibold"> {props.price}</p>

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

type CardProps = {
  name: string;
  image: string;
};

export default function Card({ name, image }: CardProps) {
  return (
    <>
      <div className="bg-[#DAFF01] max-w-full w-[180px] h-auto max-h-[200px] flex flex-col  justify-between ">
        <div className="flex-1 flex items-center justify-center p-2">
          <img
            src={image}
            alt={name}
            className="w-full max-w-[120px] h-auto object-contain"
          />
        </div>
        <p className="flex bg-black text-white justify-center text-sm px-1 truncate">
          {" "}
          {name}{" "}
        </p>
      </div>
    </>
  );
}

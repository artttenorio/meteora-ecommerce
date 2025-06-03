export default function Card(props: any) {
  return (
    <>
      <div className="bg-[#DAFF01] max-w-full w-[180px] h-auto max-h-[200px] flex flex-col  justify-between ">
        <div className="flex-1 flex items-center justify-center p-2">
          <img
            src={props.image}
            alt={props.name}
            className="w-full max-w-[120px] h-auto object-contain"
          />
        </div>
        <p className="flex bg-black text-white justify-center text-sm px-1 truncate">
          {" "}
          {props.name}{" "}
        </p>
      </div>
    </>
  );
}

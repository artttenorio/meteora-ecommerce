export default function Card(props: any) {
  return (
    <>
      <div className="bg-[#DAFF01] w-[180px] h-[200px] flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={props.image}
            alt={props.name}
            className="w-[120px] h-[120px]object-contain"
          />
        </div>
        <p className="flex bg-black text-white justify-center">
          {" "}
          {props.name}{" "}
        </p>
      </div>
    </>
  );
}

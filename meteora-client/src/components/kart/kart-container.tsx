import ItemContainer from "./item-container";

export default function KartContainer() {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-15 text-3xl font-SemiBold mb-30">
        Carrinho de compras
      </div>

      <div className="flex border-2 w-[600px] h-[600px] mx-40">
        <ItemContainer name={""} description={""} price={""} quantity={0} />
      </div>
    </>
  );
}

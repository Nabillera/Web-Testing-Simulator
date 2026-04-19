import { ProductCard } from "./ProductCard";
import Beetle from "../../assets/black-outline-bugs/beetle-black.png";
import Ant from "../../assets/black-outline-bugs/ant-black.png";
import Moth from "../../assets/black-outline-bugs/moth-black.png";
import { Button } from "../Button";
import { REQUIREMENTS } from "../../../DATA/Level_data";

export function LevelOne() {
  const products = [
    { name: "Beetle", price: "$13.99", color: "#F3AE39", image: Beetle },
    { name: "Moth", price: "$22.50", color: "#0A5598", image: Ant },
    { name: "Ant", price: "$17.75", color: "#C1011A", image: Moth },
  ];
  return (
    <div className="flex flex-col w-[80%] items-center gap-y-[120px] p-[30px]">
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 1: Don't put all your bugs in one basket!
      </h2>
      <div className="flex gap-x-[20px] ">
        {products.map((product) => {
          return (
            <ProductCard
              prodName={product.name}
              prodPrice={product.price}
              prodImage={product.image}
              color={product.color}
            />
          );
        })}
      </div>
      <div className="flex gap-x-[30px]">
        <div>LIST</div>
        <div className="flex flex-col">
          <span>TOTAL</span>
          <Button backColor="#C1011A" width="250px">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}

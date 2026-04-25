import { ProductCard } from "./ProductCard";
import { Button } from "../Button";
import { REQUIREMENTS } from "../../../DATA/Level_data";
import { PRODUCTS } from "../../../DATA/Level-1_products";
import { SelectedProduct } from "./SelectedProduct";
import { useState } from "react";

export function LevelOne() {
  const [selectedProducts, setSelectedProducts] = useState([
    { name: "Beetle", quantity: 1, totalPrice: 0 },
    { name: "Moth", quantity: 2, totalPrice: 0 },
    { name: "Ant", quantity: 1, totalPrice: 0 },
  ]);
  const handleSelectProducts = (name, quantity) => {
    let prodPrice = PRODUCTS.find((prod) => prod.name == name).price;
    let totalPrice = quantity * prodPrice;
    //set quantity, totalPrice
  };

  return (
    <div className="relative flex flex-col w-[80%] items-center gap-y-[50px] p-[30px]">
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 1: Don't put all your bugs in one basket!
      </h2>
      <div className="flex w-[70%] justify-around">
        {PRODUCTS.map((product) => {
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
      <div className="flex justify-center gap-x-[40px] w-full">
        <div className="w-[30%]">
          {selectedProducts.map((product) => {
            return (
              <SelectedProduct
                prodName={product.name}
                quantity={product.quantity}
                totalPrice={product.totalPrice}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-y-[20px] w-[30%]">
          <div className="flex gap-x-[10px]">
            <span className="font-bold text-[32px]">Your total:</span>
            <span className="text-[32px]">total</span>
          </div>
          <Button backColor="#C1011A" width="250px">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}

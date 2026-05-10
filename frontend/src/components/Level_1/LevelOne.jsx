import { ProductCard } from "./ProductCard";
import { Button } from "../Button";
import { REQUIREMENTS } from "../../../DATA/Level_requirements";
import { PRODUCTS } from "../../../DATA/Level-1_products";
import { SelectedProduct } from "./SelectedProduct";
import { useState } from "react";
import { PurchaseModal } from "./PurchaseModal";

export function LevelOne() {
  const [selectedProducts, setSelectedProducts] = useState([
    { name: "Beetle", quantity: 0, totalPrice: 0 },
    { name: "Moth", quantity: 0, totalPrice: 0 },
    { name: "Ant", quantity: 0, totalPrice: 0 },
  ]);

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const totalPrice = Number(
    selectedProducts.reduce((sum, prod) => sum + prod.totalPrice, 0),
  ).toFixed(2);

  const handleShowModal = () => {
    if (totalPrice == 0) return;
    setShowPurchaseModal((prevStatus) => !prevStatus);
  };

  const handleAddProduct = (name, prodPrice) => {
    setSelectedProducts((prevProducts) => {
      const updatedList = [...prevProducts];
      const index = updatedList.findIndex((prod) => prod.name == name);
      if (updatedList[index].quantity > 0) {
        return prevProducts;
      }
      updatedList[index] = {
        ...updatedList[index],
        quantity: 1,
        totalPrice: prodPrice,
      };
      return updatedList;
    });
  };

  const handleTotalPrice = (name, quantity) => {
    const prodPrice = PRODUCTS.find((prod) => prod.name == name).price;
    const totalPrice = quantity * prodPrice;
    return totalPrice;
  };

  const handleIncrementQuantity = (name) => {
    setSelectedProducts((prevProducts) => {
      const updatedList = [...prevProducts];
      const index = updatedList.findIndex((prod) => prod.name === name);
      const newQuantity = updatedList[index].quantity + 1;
      updatedList[index] = {
        ...updatedList[index],
        quantity: newQuantity,
        totalPrice: handleTotalPrice(name, newQuantity),
      };
      return updatedList;
    });
  };

  const handleDecrementQuantity = (name) => {
    setSelectedProducts((prevProducts) => {
      const updatedList = [...prevProducts];
      const index = updatedList.findIndex((prod) => prod.name === name);
      if (updatedList[index].quantity <= 0) return prevProducts;
      const newQuantity = updatedList[index].quantity - 1;
      updatedList[index] = {
        ...updatedList[index],
        quantity: newQuantity,
        totalPrice: handleTotalPrice(name, newQuantity),
      };
      return updatedList;
    });
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
              onAdd={handleAddProduct}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-x-[40px] w-full">
        <div className="w-[30%]">
          {selectedProducts.map((product) => {
            if (product.quantity > 0)
              return (
                <SelectedProduct
                  prodName={product.name}
                  quantity={product.quantity}
                  totalPrice={product.totalPrice}
                  onIncrement={handleIncrementQuantity}
                  onDecrement={handleDecrementQuantity}
                />
              );
          })}
        </div>
        <div className="flex flex-col gap-y-[20px] w-[30%]">
          <div className="flex gap-x-[10px]">
            <span className="font-bold text-[32px]">Your total:</span>
            <span className="text-[32px]">{`$${totalPrice}`}</span>
          </div>
          <Button onClick={handleShowModal} backColor="#C1011A" width="250px">
            Purchase
          </Button>
        </div>
      </div>
      {showPurchaseModal && <PurchaseModal onHandleModal={handleShowModal} />}
    </div>
  );
}

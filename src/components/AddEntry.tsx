import React, { useEffect, useState } from "react";
import { useProductActions, useShopActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Shop } from "../types/shops";
import Select from "./parts/Select";
import Input from "./parts/Input";
import Button from "./parts/Button";
import "./../scss/components/AddEntry.scss";

const AddEntry: React.FC = () => {
  const { shops, loading } = useTypedSelector((state) => state.shop);
  const { fetchShops } = useShopActions();
  const { AddProduct } = useProductActions();

  const [selectedShop, setSelectedShop] = useState<Shop>();
  const [selectedName, setSelectedName] = useState<string>();

  useEffect(() => {
    fetchShops();
  }, []);

  const handleAdd = () => {
    AddProduct({ shop: selectedShop, name: selectedName });
  };

  return (
    <div className={`add-entry ${loading ? "add-entry__loading" : ""}`}>
      <h1>Add to cart:</h1>
      <div className="add-entry__action">
        <Input placeholder="Name" callback={setSelectedName} />
        <Select
          callback={setSelectedShop}
          classNamePrefix="select"
          className="select-shop select"
          options={shops}
          placeholder={"Select shop"}
        />
        <Button type="add" text="Add" callback={handleAdd} />
      </div>
    </div>
  );
};

export default AddEntry;

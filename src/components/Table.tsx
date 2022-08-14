import Button from "./parts/Button";
import "./../scss/components/Table.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useProductActions } from "../hooks/useActions";

export const Table = () => {
  const { products } = useTypedSelector((state) => state.product);
  const { DeleteProduct } = useProductActions();

  return (
    <div className="table">
      {products
        ? products.map((val, id) => {
            const handleDelete = () => {
              DeleteProduct({ id: id });
            };
            return (
              <div key={id} className="table__row">
                <div className="table__row__column">{val.name}</div>
                <div className="table__row__column">{val.shop}</div>
                <div className="table__row__column">
                  <Button callback={handleDelete} type="delete" text="Delete" />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Table;

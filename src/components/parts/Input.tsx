import { InputComponentProps } from "../../types/components/inputs/Input";
import "./../../scss/components/parts/Input.scss";

export const Index: React.FC<InputComponentProps> = ({
  placeholder = "",
  callback,
}) => {
  return (
    <div className="input">
      <input
        onChange={(e) => {
          callback(e.target.value);
        }}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Index;

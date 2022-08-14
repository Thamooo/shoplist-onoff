import { ButtonComponentProps } from "../../types/components/inputs/Button";
import "./../../scss/components/parts/Button.scss";

const Index: React.FC<ButtonComponentProps> = ({ type, callback, text }) => {
  const handleClick = () => {
    callback();
  };
  return (
    <button onClick={handleClick} className={`btn btn__${type}`}>
      {text}
    </button>
  );
};

export default Index;

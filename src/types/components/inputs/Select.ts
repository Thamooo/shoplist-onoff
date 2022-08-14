import { Dispatch, SetStateAction } from "react";
import { Shop } from "../../shops";

export type SelectComponentProps = {
  callback: Dispatch<SetStateAction<any>>;
  className?: string;
  classNamePrefix?: string;
  options: any[];
  placeholder?: string;
};

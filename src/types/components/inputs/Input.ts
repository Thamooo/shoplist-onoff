import { Dispatch, SetStateAction } from "react";

export type InputComponentProps = {
  callback: Dispatch<SetStateAction<any>>;
  placeholder?: string;
};

import { Dispatch } from "react";

export type ButtonComponentProps = {
  callback: any;
  text: string;
  type: "add" | "delete";
};

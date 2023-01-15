import { ReactNode } from "react";

export interface TodoAdderTemplateProps {
  title: string;
  addButton: ReactNode;
  onChangeTitle: (arg: string) => void;
}

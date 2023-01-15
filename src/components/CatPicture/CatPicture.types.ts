import { ReactNode } from "react";

export interface CatPictureProps {
  isShowing: boolean;
}

export interface CatPictureTemplateProps extends CatPictureProps {
  imageSrc: string;
  closeButton: ReactNode;
}

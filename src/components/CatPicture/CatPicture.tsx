import { useEffect, useState } from "react";
import Button from "../Button/Button";
import CatPictureTemplate from "./CatPicture.template";
import { CatPictureProps } from "./CatPicture.types";

/**
 * The atomic button component
 *
 * @returns The controlled button component.
 *
 * @beta
 */
const CatPicture = ({ isShowing }: CatPictureProps) => {
  const [version, setVersion] = useState(1);

  useEffect(() => {
    if (isShowing) {
      setVersion((v) => v++);
    }
  }, [isShowing]);
  return (
    <CatPictureTemplate
      imageSrc={`https://cataas.com/cat?v=${version}`}
      closeButton={<Button label="X" />}
      isShowing={isShowing}
    />
  );
};

export default CatPicture;

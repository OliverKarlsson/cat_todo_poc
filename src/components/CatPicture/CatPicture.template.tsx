import style from "./CatPicture.module.scss";
import { CatPictureTemplateProps } from "./CatPicture.types";

/**
 * The atomic buttons template component
 *
 * @param x - The component props
 * @returns The button template component.
 *
 * @beta
 */
const CatPicture = ({
  isShowing,
  imageSrc,
  closeButton,
}: CatPictureTemplateProps) =>
  isShowing ? (
    <div className={style["cat-picture"]}>
      <img
        className={style["cat-picture__image"]}
        alt="Your random cat reward"
        src={imageSrc}
      />
      <div className={style["cat-picture__button"]}>{closeButton}</div>
    </div>
  ) : null;

export default CatPicture;

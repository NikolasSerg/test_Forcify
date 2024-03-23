import { IImageProps } from "./Image.type";
import styles from "./Image.module.scss";
 

export const ImageComponent: React.FC<IImageProps> = ({url}) => {

    return(
        <div className={`vh-100 wv-100 object-fit-cover ${styles.imgStyle}`} style={{backgroundImage: `url(${url})`}}>
        </div>
    )
}
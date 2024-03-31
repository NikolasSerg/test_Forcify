import { Carousel } from "react-bootstrap"
import { ICarouselImageProps, PositionList } from "./CarouselItem.type"
import styles from "./CarouselItem.module.scss"
import { ImageComponent } from "../Image/Image"

export const CarouselItemComponent: React.FC<ICarouselImageProps> = ({subTitle, title, position, urlImage}) => {


    const positionStyles = (position: PositionList) => {
            switch (position) {
                case PositionList.TOP:
                    return 'justify-content-start'
                case PositionList.CENTER:
                    return 'justify-content-center'
                case PositionList.BOTTOM:
                    return 'justify-content-end'
                default:
                    return '';
            }
    }
    return(
        <>
            <ImageComponent url={urlImage} />
            <Carousel.Caption className={`d-flex flex-column h-100 ${positionStyles(position)} ${styles.carouselCapture}`}>
                <h6 className="my-3">{subTitle}</h6>
                <h1 className="font-weight-bold">{title}</h1>
                <div className={`w-50 mx-auto`} />
            </Carousel.Caption>
        </>
    )
}
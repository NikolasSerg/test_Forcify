import { IImageProps } from "./Image.type";
import { Col, Image } from "react-bootstrap";
 

export const ImageComponent: React.FC<IImageProps> = ({url}) => {

    return(
        <Col className="overflow-hidden">
            <Image src={url} className="vh-100 w-auto" />
        </Col>
    )
}
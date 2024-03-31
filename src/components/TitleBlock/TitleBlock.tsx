import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "hooks";
import { Direction, ITitleBlockProps } from "./TitleBlock.type";

import 'global.scss';
import styles from './TitleBlock.module.scss';
import { Breakpoints } from "types";

export const TitleBlock: React.FC<ITitleBlockProps> = ({point, header, title, direction}) => {

    const isLg = useMediaQuery(Breakpoints.TO_LG);

    const handlePosition = (direction: Direction) => {
        if(direction === Direction.ROW) {
            return isLg ? 'start-0' : 'end-0'
        }
        if(direction === Direction.ROW_REVERS) {
            return isLg ? 'end-0' : 'start-0'
        }
    }

    return(
        <Row className="titleBlock flex-nowrap justify-content-evenly overflow-hidden">
                <Col  className={`col-6 position-relative ${direction === Direction.ROW ? 'order-1' : 'order-2'}`}>
                    <p className={`d-flex align-items-center position-absolute m-0 ${handlePosition(direction)} bigNumber`}>
                        { point }
                    </p>
                </Col>
                <Col className={`d-flex justify-content-center align-items-center position-relative col-6 ${direction === Direction.ROW ? 'order-2 ms-lg-5' : 'order-1 me-lg-5'}`}>
                    <div className={`${styles.titlesIndex} d-flex flex-column justify-content-center ${direction === Direction.ROW ? 'align-items-start' : 'align-items-end'} position-absolute`}>
                        <h2 className={`header3`}>{ header }</h2>
                        <p>{ title }</p>
                    </div> 
                </Col>
        </Row>
    )
}
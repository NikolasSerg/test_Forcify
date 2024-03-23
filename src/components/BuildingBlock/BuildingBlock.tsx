import { Col, Row, Image } from "react-bootstrap"
import { Direction, TitleBlock } from "components"

export const BuildingBlock = () => {

    return(
        <div>
            <Row>
                <TitleBlock point={'03'} header={'Girls Globe —'} title={'Brand Strategy, Visual Identity'} direction={Direction.ROW} />
            </Row>
            <Row className={`bodyBlock`}
                style={{backgroundImage: 'url(/images/building.png)'}}
            >
                <Col xs={12} sm={12} md={6} className="p-3 d-flex justify-content-center justify-content-md-end">
                    <Image src="/images/team.png" rounded className="w-75 my-auto" />
                </Col>
                <Col xs={12} sm={12} md={6} className='p-3 d-flex justify-content-center justify-content-md-start align-items-center'>
                    <div>
                        <h2 className={`header3`}>Empire State Building</h2>
                        <p>350 5th Ave, New York, NY 10118</p>
                        <p>1 212-736-3100</p> 
                        <p>contacts@esbnyc.com</p> 
                    </div>
                </Col>
            </Row>
        </div>
    )
}
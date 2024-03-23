import { Col, Row } from "react-bootstrap"
import styles from "./BusinessBlock.module.scss"
import 'global.scss'
import { Direction, TitleBlock } from "components"

export const BusinessBlock = () => {


    
    return(
        <Col>
            <TitleBlock point={'01'} header={'Reykjavik Fashion Festival —'} title={'Branding, Interactive'} direction={Direction.ROW} />
            <Row className={`bodyBlock`}
                style={{backgroundImage: 'url(/images/business.png)'}}
            >
                <Col xs={12} sm={12} md={6} className="p-3 p-md-5 d-flex justify-content-center justify-content-md-end position-relative">
                    <div className={`${styles.businnesBlockHeader}`}>
                        <h1 className={`header1 fw-bold`}>Why Serious Business?</h1>
                        <p style={{overflowWrap: 'break-word'}}>Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in.</p> 
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className='p-3 px-md-5 d-flex justify-content-center justify-content-md-start align-items-center'>
                    <p className={`${styles.businnesBlockHeader}`}>
                        Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in, auctor massa. Nunc non fringilla justo. Etiam consequat auctor est ac dignissim. Integer accumsan aliquam vestibulum. Vestibulum ornare, metus eget scelerisque pulvinar, lectus tellus vestibulum est, et suscipit velit nunc quis turpis. Integer lacus libero, consectetur id pharetra sit amet, maximus eu tellus. Suspendisse potenti. In eget nibh iaculis, sagittis ante et, fringilla augue. Vestibulum dolor ligula, gravida at ante ac, sagittis viverra nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis sagittis viverra nibh egestas.
                    </p>
                </Col> 
            </Row>
        </Col>
    )
}
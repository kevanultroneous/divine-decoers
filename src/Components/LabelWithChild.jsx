import { Col, Image, Row } from "react-bootstrap"
import rightArrow from '../Assets/images/right.svg'
import leftArrow from '../Assets/images/left.svg'

const LabelWithChild = (props) => {
  return (
    <Row className="ms-xl-5 ms-md-5 ms-lg-5">
      <Col lg="6" xl={6} className="mt-5 mb-3 p-0">
        <label className="label-text">{props.title}</label>
        <div className="border-label"></div>
      </Col>
      <Col lg="5" xl={5} className="mt-5 mb-3 text-end ml-xl-6">
          <Image src={leftArrow} onClick={props.next} width={49} className="me-xl-4" />
          <Image src={rightArrow} onClick={props.prev} width={49} />
      </Col>
    </Row>
  )
}
export default LabelWithChild
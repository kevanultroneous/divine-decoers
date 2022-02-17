import { Col, Row } from "react-bootstrap";

const LabelOfContent = (props) => {
  return (
    <Row className="ms-xl-5 ms-md-5 ms-lg-5">
      <Col lg="12" className="mt-5 mb-3 p-0">
        <label className="label-text">{props.title}</label>
        <div className="border-label"></div>
      </Col>
    </Row>
  );
};
export default LabelOfContent;

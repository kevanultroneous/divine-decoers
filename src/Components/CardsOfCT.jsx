import { Card, Col } from "react-bootstrap";

const CardOfCT = (props) => {
  return (
    <Col lg="3">
      <Card style={{ width: "400px" }}>
        <Card.Img src={props.img} />
      </Card>
    </Col>
  );
};
export default CardOfCT;

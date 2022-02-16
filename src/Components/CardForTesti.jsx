import { Card, Col, Image, Row } from "react-bootstrap";
import comma from "../Assets/images/comma.png"
import ReactStars from "react-rating-stars-component"
const CardForTesti = (props) => {
    return (
        <Card style={{ background: '#FFEFE2' ,width: '32rem' }} className="ms-5 card-border">
            <Card.Body>
                <Card.Title>
                    <Image src={comma} />
                </Card.Title>
                <Card.Text className="mt-3">
                    {props.paragraph}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0 bg-transparent">
                <Row>
                    <Col xl={3}>
                        <Image src={props.user} />
                    </Col>
                    <Col xl={9}>
                        <Row>
                            <Col>
                            <label className="carousel-label">{props.username}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <ReactStars 
                                edit={false}
                                value={props.star}
                                size={25}
                                classNames="carousel-star"
                                isHalf={true}
                             />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
export default CardForTesti;
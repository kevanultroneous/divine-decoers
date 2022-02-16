import { Carousel, Col, Row } from "react-bootstrap";
import LabelOfContent from "./LabelOfContent";
import SliderForTestimonial from "./SliderForTestimonial";
const TestiMonial = () => {
  return (
    <>
      <LabelOfContent title={"Testimonials"} />
      <Row>
        <Col xl="12">
          <div className="title-of-testi ms-xl-5">What our customer say about us.</div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl="12" className="mt-4 me-xl-5 ms-xl-5">
          <SliderForTestimonial />
        </Col>
      </Row>
    </>
  );
};
export default TestiMonial;

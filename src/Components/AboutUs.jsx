import { Col, Row } from "react-bootstrap";
import LabelOfContent from "./LabelOfContent";

const AboutUs = () => {
  return (
    <>
      <LabelOfContent title={"About Us"} />
      <Row className="mt-3">
        <Col lg="12">
          <p className="paragraph ms-xl-5 me-xl-5">
            Divine Home was founded in 1982. Today we are one of the largest
            mandirs manufacturer in the world. We bring exquisite pooja
            mandirsto families around the world. Our mandirs are designed and
            hand crafted by skilled craftsmen who have been within our factory
            since its commencement. Ranging from solid to compressed wood, our
            mandirs cater to different needs within the community.
            <br />
            <br />
            Over the years we expanded our presence all over the world. We have
            established showrooms in Australia, New Zealand, United Kingdomand
            Malaysia and endeavour to continue bringing joy to the soul of
            anyone who might be seeking the love of God.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default AboutUs;

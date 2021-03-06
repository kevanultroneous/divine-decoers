import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import { ListForSlider, sliderRes } from "../common/common";
import CardForTesti from "./CardForTesti";
import LabelWithChild from "./LabelWithChild";

const TestiMonial = () => {
  const sliderRef = useRef()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: sliderRes
  };
  return (
    <>
      <LabelWithChild
        title="Testimonials"
        next={() => sliderRef.current.slickPrev()}
        prev={() => sliderRef.current.slickNext()}
      />
      <Row>
        <Col xl="12">
          <div className="title-of-testi ms-xl-5 ms-md-5  me-md-5">What our customer say about us.</div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl="12" xs={12} className="mt-4 me-xl-5 ms-xl-5 mb-5">
          <Slider {...settings} ref={sliderRef}>
            {
              ListForSlider.map((v) =>
                <CardForTesti
                  username={v.username}
                  user={v.icon}
                  star={v.rating}
                  paragraph={v.paragraph}
                />
              )
            }
          </Slider>
        </Col>
      </Row>
    </>
  );
};
export default TestiMonial;

import { useRef } from "react";
import { Col, Row } from "react-bootstrap"
import Slider from "react-slick/lib/slider";
import { ListForSlider, sliderRes } from "../common/common";

const RelatedItem = () =>{
    const sliderRef = useRef()
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: sliderRes
    };
    return (
      <>
        <Row className="justify-content-center">
          <Col xl="12" className="mt-4 me-xl-5 ms-xl-5 mb-5">
            <Slider {...settings} ref={sliderRef}>
              {
                ListForSlider.map((v) =>
                  <h1>Hello</h1>
                )
              }
            </Slider>
          </Col>
        </Row>
      </>
    );
}
export default RelatedItem
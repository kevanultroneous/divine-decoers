import { useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { customTempleList, personalViewList, sliderRes } from "../common/common"
import wp from "../Assets/images/wp.svg"
import Slider from "react-slick/lib/slider"
const PersonalView = () => {
    const [product_information, setProduct_information] = useState(personalViewList.information)
    const [sliderArray, setSliderArray] = useState(personalViewList.images)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: sliderRes
    };
    return (
        <>
            <Row className="mt-3 mb-5 ms-xl-1">
                <Col xl={6} lg={8}>
                    <Slider {...settings}  className="mt-4 me-xl-5 ms-xl-5 mb-5">
                        {
                            sliderArray.map((value, index) =>
                                <div className="card p-0 border-0">
                                    <Image src={value} className="card-img-top" alt="" />
                                </div>
                            )
                        }
                    </Slider>
                </Col>
                <Col xl={6} lg={4}>
                    <label>{personalViewList.label}</label>
                    <p>{personalViewList.price}</p>
                    <p>Availabel : {personalViewList.available ? "In Stock" : "Out of Stock"}</p>
                    <p>{personalViewList.description}</p>
                    <div className="btn btn-primary">Inquire Now</div>
                    <div>
                        <label>SHARE</label>
                        <label><FaFacebookF /></label>
                        <label><AiFillInstagram /></label>
                        <label><Image src={wp} /></label>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 mb-5 me-xl-5 ms-xl-5">
                <Col>
                    <label className="fw-bold list-font">Product Information</label>
                    <ul className="mt-5">
                        {product_information.map((v) => <li className="list-font">{v}</li>)}
                    </ul>
                </Col>
            </Row>
        </>
    )
}
export default PersonalView
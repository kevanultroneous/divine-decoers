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
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: sliderRes
    };
    return (
        <>
            <Row className="mt-3 mb-5 ms-xl-1">
                <Col xl={5} lg={8} xs={6}>
                    <Slider {...settings} className="mt-4 me-xl-5 ms-xl-5 mb-5">
                        {
                            sliderArray.map((value, index) =>
                                <div className="card p-0 border-0">
                                    <Image src={value} className="card-img-top" alt="" />
                                </div>
                            )
                        }
                    </Slider>
                </Col>
                <Col xl={7} className="">
                    <label className="p-font">{personalViewList.label}</label>
                    <p className="p-font-sub">{personalViewList.price}</p>
                    <p className="p-font-sub2">Availabel : {personalViewList.available ? "In Stock" : "Out of Stock"}</p>
                    <p className="p-sub-para w-75">{personalViewList.description}</p>
                    <p>Select your Frame/Pillar</p>
                    <Row>
                        {personalViewList.pillers.map((v) =>
                            <Col xl={2} className="p-0">
                                <label>
                                    <input type="radio" name="test" value="small" checked />
                                    <Image src={v.img}/>
                                </label>
                            </Col>
                        )}
                    </Row>
                    <div className="btn btn-primary">Inquire Now</div>
                    <div className="mt-4">
                        <label className="fw-bold share">SHARE</label>
                        <label className="ms-3 fb icon-h"><FaFacebookF /></label>
                        <label className="ms-3 insta icon-h"><AiFillInstagram /></label>
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
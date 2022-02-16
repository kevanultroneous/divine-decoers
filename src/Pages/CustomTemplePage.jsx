import { Col, Container, Image, Row } from "react-bootstrap"
import { customTempleList2 } from "../common/common";
import Footer from "../Components/Footer";
import LabelOfContent from "../Components/LabelOfContent";
import DivineNavbar from "../Components/Navbar"

const CustomTemplePage = () => {
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <LabelOfContent title="Custom Temples" />
            <Row className="justify-content-center mx-lg-5 mb-5">
                {
                    customTempleList2.map((value, index) =>
                        <div class="col-lg-4 mt-5 col-md-4 col-xl-4 ">
                            <div class="card p-0 border-0">
                                <Image src={value.image} class="card-img-top" alt="" />
                            </div>
                        </div>
                    )
                }
            </Row>
            <Row className="text-center mt-5 mb-5">
                <Col lg="12">
                    <div className="btn btn-primary" onClick={() => alert()}>See More</div>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}
export default CustomTemplePage;
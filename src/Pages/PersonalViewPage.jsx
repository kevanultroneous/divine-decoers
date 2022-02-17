import { Col, Container, Image, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import { customTempleList2, ListForSlider } from "../common/common"
import CardForTesti from "../Components/CardForTesti"
import Footer from "../Components/Footer"
import LabelOfContent from "../Components/LabelOfContent"
import DivineNavbar from "../Components/Navbar"
import 'react-multi-carousel/lib/styles.css';


const PersonalViewPage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <LabelOfContent title="Related Product" />
            {/* <Footer /> */}
        </Container>
    )
}
export default PersonalViewPage
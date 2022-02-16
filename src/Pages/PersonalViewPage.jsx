import { Col, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer"
import LabelOfContent from "../Components/LabelOfContent"
import DivineNavbar from "../Components/Navbar"
import RelatedItem from "../Components/RelatedItem"

const PersonalViewPage = () => {
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <LabelOfContent title="Related Product" />
            {/* <Footer /> */}
        </Container>
    )
}
export default PersonalViewPage
import { Container } from "react-bootstrap"
import LabelOfContent from "../Components/LabelOfContent"
import DivineNavbar from "../Components/Navbar"

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
import { Container } from "react-bootstrap"
import LabelOfContent from "../Components/LabelOfContent"
import DivineNavbar from "../Components/Navbar"
import 'react-multi-carousel/lib/styles.css';
import Footer from "../Components/Footer";


const PersonalViewPage = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 5
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <LabelOfContent title="Related Product" />
            <Footer />
        </Container>
    )
}
export default PersonalViewPage
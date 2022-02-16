import { Container } from "react-bootstrap";
import AboutUs from "../Components/AboutUs";
import CustomTemples from "../Components/CustomTemples";
import Footer from "../Components/Footer";
import DivineNavbar from "../Components/Navbar";
import TestiMonial from "../Components/TestiMonial";
import TitleContent from "../Components/TitleContent";

const MainPage = () => {
  return (
    <>
      <TitleContent headings={<DivineNavbar />} />
      <Container fluid className="back-contain">
        <CustomTemples />
        <AboutUs />
        <TestiMonial />
        <Footer />
      </Container>
    </>
  );
};
export default MainPage;

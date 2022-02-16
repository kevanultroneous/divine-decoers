import { Container, Image, Nav, Navbar } from "react-bootstrap";
import {useState} from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../Assets/images/icon.png";
import call from "../Assets/images/call.png"
import OffCanvasComp from "./OffCanvasComp";
const DivineNavbar = () => {
  const [show,setShow] = useState(false)
  const handleClose = () =>{
    setShow(false)
  }
  return (
    <>
    <Navbar expand="lg">
      <Container fluid className="mt-3  mt-xl-3 mt-lg-3  mt-md-3">
        <Navbar.Brand href="#" className="ms-5 ms-md-5 ms-xl-5 ms-lg-5">
          <Image src={logo} className="icon-size" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0 nav-fonts" navbarScroll>
            <Nav.Link href="#action1" className="nav-link-clr me-xl-5 me-md-5 me-lg-5">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="me-xl-5 me-md-5 me-lg-5">Products</Nav.Link>
            <Nav.Link href="#action2" className="">About Us</Nav.Link>
            {/* <div className="vector"/> */}
            <Nav.Link href="#action2" className="fs-20">
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link href="#action2" className="fs-20">
              <AiFillInstagram />
            </Nav.Link>
            {/* <div className="vector"/> */}
            <Nav.Link onClick={()=>setShow(true)} className="p-0">
              <Image src={call} height="35"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <OffCanvasComp 
      show={show}
      hide={()=>handleClose()}
      onClose={()=>handleClose()}
    />
    </>
  );
};
export default DivineNavbar;
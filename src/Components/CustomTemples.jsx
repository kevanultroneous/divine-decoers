import { Card, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import modelImg from "../Assets/images/model.png";
import { customTempleList } from "../common/common";
import CardOfCT from "./CardsOfCT";
import LabelOfContent from "./LabelOfContent";
const CustomTemples = () => {
  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/customtemples')
  }
  return (
    <>
      <LabelOfContent title={"Custom Temples"} />
      <Row className="justify-content-center mx-lg-5">
        {
          customTempleList.map((value,index)=>
          <div class="col-lg-4 mt-5 col-md-4 col-xl-4 ">
            <div class="card p-0 border-0">
             <Image src={value.image} class="card-img-top" alt="" />
            </div>
          </div>)
        }
      </Row>
      <Row className="text-center mt-5">
          <Col lg="12">
              <div className="btn btn-primary" onClick={()=>handleNavigate()}>View All</div>
          </Col>
      </Row>
    </>
  );
};
export default CustomTemples;

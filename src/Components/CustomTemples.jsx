import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { customTempleList } from "../common/common";
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
          <div className="col-lg-4 mt-lg-5 mt-xl-5 mt-2 col-md-4 col-xl-4 ">
            <div className="card p-0 border-0 w-100">
             <Image src={value.image} className="card-img-top" alt="" />
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

import { Carousel, Image } from "react-bootstrap"
import { customTempleList2, ListForSlider } from "../common/common";
import CardForTesti from "./CardForTesti";
import SliderForTestimonial from "./SliderForTestimonial";

const RelatedItem = () =>{
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <Carousel
        className="mb-5"
        arrows={false}
        responsive={responsive}>
        {
            ListForSlider.map((value, index) => 
            <CardForTesti
            user={value.icon}   
            paragraph={value.paragraph} 
            username={value.username}
            star={value.rating}/>)
        }
    </Carousel>
    )
}
export default RelatedItem
import { Link } from "react-router-dom";
import reactImg from "../../../Assets/cart.png";
import { Image, InnerSection, Text } from "../../../App.style";
import { RecycleAnimation } from "./NotFound";

export default function NotFound() {
  return (
    <InnerSection>
      <Text fontSize={"50px"} style={{ fontWeight: "700" ,marginTop:'30px'}}>
        Page Not Found
      </Text>
      <RecycleAnimation>
      <Image src={reactImg} />
      </RecycleAnimation>
      <Link to={"/"} style={{ color: "#FCDD06", marginTop: 50,fontSize:'35px', fontWeight:'700' }}>
        Home Page
      </Link>
    </InnerSection>
  );
}

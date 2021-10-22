import { Text, Image, FlexCol1640px } from "../../../App.style";
import { Span } from "./Cart.Style"
import group1 from "../../../Assets/Group 491.png";
import { TopRateProduct } from "../../Gust/product/TopRateProduct";
import { FlexCol370px, TextRecently } from "../../Gust/HomePage/HomePage.Style";

export default function RecentlyViewed({ discount }) {
  return (
    <FlexCol1640px>
      <TextRecently>
        <Span color={"#707070"}>Back / </Span>Shopping Cart
      </TextRecently>
      <FlexCol370px>
        <Text fontSize="32px" weight="500" marginA="0 0 30px 0">
          Your shopping cart is empty
        </Text>
        <Image src={group1} />
      </FlexCol370px>
      <TopRateProduct title="Recently viewed" />
    </FlexCol1640px>
  );
}

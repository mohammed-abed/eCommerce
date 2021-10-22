import {
  Text,
  FlexCol,
} from "../../../App.style";
import PlaceOnOreder from "./PlaceOnOreder";
import ReviewOrder from "./ReviewOrder";
import { useLocation } from "react-router";
import {
  OrederContainer,
  SpanShipping,
  TextShipping,
  SpanPlaceOrder,
  TextPlaceOrder,
  Hr,
  Review,
  FlexRowContainer
} from "./ReviewOreder.Style";

export default function Payment() {
  const location = useLocation();
  const isShippingPage = location.pathname.includes("placeOrder");

  return (
    <OrederContainer>
      <FlexCol margin="44px 0 0 0" align="flex-start" width="100%">
        <Text fontSize="32px" weight="700" marginA="0 0 36px 0">
          Review Order
        </Text>
        <Review>
          <FlexRowContainer>
            <SpanShipping isOpacity={isShippingPage}>1</SpanShipping>
            <TextShipping
              fontSize="22px"
              weight="700"
              marginA="0 0 0 10px"
              isOpacity={isShippingPage}
            >
              Shipping and Payment
            </TextShipping>
          </FlexRowContainer>
          <Hr isOpacity={!isShippingPage} />
          <FlexRowContainer>
            <SpanPlaceOrder isOpacity={!isShippingPage}>2</SpanPlaceOrder>
            <TextPlaceOrder
              isOpacity={!isShippingPage}
              fontSize="22px"
              weight="700"
              color="#70707080"
              marginA="0 0 0 10px"
            >
              Place an Order
            </TextPlaceOrder>
          </FlexRowContainer>
        </Review>
        {isShippingPage ? <PlaceOnOreder /> : <ReviewOrder />}
      </FlexCol>
    </OrederContainer>
  );
}

import { FlexCol1640, Text } from "../../../App.style";
import { TopRateProduct } from "../../Gust/product/TopRateProduct";
import {
  FlexCol470px,
  FlexCol380px,
  FlexRowMargin30,
  Text16Color,
  TextLineHeight,
  Text567px,
} from "./ReviewOreder.Style";
import Button from "../../../Components/Button/Button";
import { useSelector } from "react-redux";

export default function SecondRecentlyViewed() {
  const state = useSelector((state) => state);

  return (
    <FlexCol1640>
      <FlexCol470px>
        <FlexCol380px>
          <Text fontSize="32px" weight="500" marginA="0 0 38px 0">
            Payment Success !
          </Text>
          <FlexRowMargin30>
            <Text567px>Order number</Text567px>
            <Text16Color>65AS1D56ASD156DS</Text16Color>
          </FlexRowMargin30>
          <FlexRowMargin30>
            <Text567px>Shipping Address</Text567px>
            <Text16Color>
              {state.cart.shippingAddress.address}
              {", "}
              {state.cart.shippingAddress.city}
              {", "}
              {state.cart.shippingAddress.country}
              {" - "}
              {state.cart.shippingAddress.zipCode}
            </Text16Color>
          </FlexRowMargin30>
          <FlexRowMargin30>
            <Text567px>Order Items</Text567px>
            <Text16Color>
              {state.cart.cart.map(
                (item, index) =>
                  `${item.name}
                  ${item.price} × ${item.quantity}
                  ${(item.price * item.quantity).toFixed(2)} 
                  ${index == state.cart.cart.length - 1 ? "." : ","}`
              )}
            </Text16Color>
          </FlexRowMargin30>
          <TextLineHeight>
            An email will be sent to your email address contains order
            confirmation and tacking code.
          </TextLineHeight>
        </FlexCol380px>
        <Button text="Keep Shopping" />
      </FlexCol470px>
      <TopRateProduct title="Recently viewed" />
    </FlexCol1640>
  );
}

import {
  Text,
  FlexRow,
  Span,
  FlexCol,
  Image,
  FlexRowBetween,
  FlexRowStartBetween,
  FlexColAlignStart,
  FlexRowStartCenter,
} from "../../../App.style";
import {
  OrederContainer,
  FlexCol1516px,
  FlexCol950px,
  Textwidth30,
  TextFlexEnd,
  TextFlexEndBlack,
  Text22,
  ErrorMessage,
  ContainerPlaceOrder,
  OrderDetails,
  FlexRowButton
} from "./ReviewOreder.Style";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import visa from "../../../Assets/visa.PNG";
import { placeOrder } from "../../../Redux/Orders/ordersActions";

export default function PlaceOnOreder() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <OrederContainer>
      <FlexCol1516px>
        <ContainerPlaceOrder>
          <FlexCol950px>
            <Text fontSize="24px" weight="700" marginA="0 0 16px">
              Shipping Address
            </Text>
            <FlexRowBetween>
              <FlexColAlignStart width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="10px 0 16px"
                >
                    {state.userDetails.user.name}
                </Text>
                <Text
                  width="250px"
                  weight="700"
                  color="#707070"
                  marginA="0 0 40px"
                  lineHeight="1.8"
                >
                  {state.cart.shippingAddress.address}
                  {", "}
                  {state.cart.shippingAddress.city}
                  {", "}
                  {state.cart.shippingAddress.country}
                  {" - "}
                  {state.cart.shippingAddress.postalCode}
                </Text>
              </FlexColAlignStart>
            </FlexRowBetween>

            <FlexRowStartBetween>
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
              <Text22>Change</Text22>
            </FlexRowStartBetween>
            {/* <FlexRow margin="0 0 20px" height="96px"> */}
            {state.cart.cart.map((item) => (
              <FlexRow margin="0 0 20px" height="96px">
                <Image
                  src={"https://proshop-ms.herokuapp.com/" + item.image}
                  width="135px"
                />
                <FlexColAlignStart padding="0 22px 35px 22px">
                  <Text
                    align="flex-start"
                    color="#70707095"
                    weight="700"
                    marginA="0 0 30px"
                  >
                    {item.name}
                  </Text>
                  <FlexRowBetween>
                    <Text color="#70707095" weight="700">
                      {item.price}{" "}
                      <Span margin="0 0 0 10px">× {item.quantity}</Span>
                    </Text>
                    <Text color="#242424" weight="700">
                      {(item.price * item.quantity).toFixed(2)}
                    </Text>
                  </FlexRowBetween>
                </FlexColAlignStart>
              </FlexRow>
            ))}
            {/* </FlexRow> */}

            <FlexRowStartBetween>
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Payment Details
              </Text>
              <Text22>Change</Text22>
            </FlexRowStartBetween>
            <FlexRowStartCenter>
              <Image src={visa} width="80px" />
              <Text color="#70707095" weight="700">
                **** 1245
              </Text>
            </FlexRowStartCenter>
          </FlexCol950px>

          <OrderDetails
          >
            <FlexRowStartBetween padding="35px 22px 22px 22px">
              <Text fontSize="32px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
            </FlexRowStartBetween>

            <FlexCol padding="0 22px">
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Subtotal</Textwidth30>
                <TextFlexEnd>
                  $
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Tax</Textwidth30>
                <TextFlexEnd>$0</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Shipping</Textwidth30>
                <TextFlexEnd>$0.00</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Text width="30%" weight="700">
                  Total
                </Text>
                <TextFlexEndBlack>
                  $
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </TextFlexEndBlack>
              </FlexRowBetween>
            </FlexCol>
            {state.orders.placeOrder.error && (
              <ErrorMessage>{state.orders.placeOrder.error}</ErrorMessage>
            )}
            <FlexRowButton>
              <Button
                text="Place Order"
                isLoading={state.orders.placeOrder.isLoading}
                onClick={() => dispatch(placeOrder(history))}
              />
            </FlexRowButton>
          </OrderDetails>
        </ContainerPlaceOrder>
      </FlexCol1516px>
    </OrederContainer>
  );
}

import {
  FlexColAlignStart,
  FlexRow,
  FlexRowBetween,
  Image,
  InnerSection,
  SpinnerContainer,
  Text,
  Span,
  FlexCol,
  FlexRowStartBetween,
} from "../../../App.style";
import {
  ErrorMessage,
  OrderDetail,
  Shipping,
  ShippingAddress,
  Order as StyledOrder,
  Container
} from "./Order";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById, payOrder } from "../../../Redux/Orders/ordersActions";
import {
  TextFlexEnd,
  TextFlexEndBlack,
  Textwidth30,
} from "../payment/ReviewOreder.Style";
import { PayPalButton } from "react-paypal-button-v2";
import Success from "../../../Components/SnackBars/Success";
import Failed from "../../../Components/SnackBars/Failed";

export default function OrderId(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(props.match.params.id));
  }, [dispatch, props.match.params.id, state.orders.payOrder.success]);

  console.log(state);

  return state?.orders?.userOrder?.isLoading ? (
    <SpinnerContainer />
  ) : state?.orders?.userOrder?.error ? (
    <Failed message ={state.orders.userOrder.error}/>
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Text fontSize="32px" weight="700">
        Review Order
      </Text>
      <Container
      >
        <Shipping>
          <ShippingAddress>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Text fontSize="24px" weight="700" marginA="0 0 16px">
                Shipping Address
              </Text>
            </FlexRow>
            <FlexColAlignStart width="48%">
              <Text
                fontSize="22px"
                color="#707070"
                weight="700"
                marginA="10px 0 16px"
              >
                {state.userDetails.user.name}              </Text>
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
          </ShippingAddress>
          <OrderDetail>
            <FlexRow
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <Text
                style={{ justifyContent: "start" }}
                fontSize="24"
                fontWeight="bold"
                color="#242424"
              >
                Order Details
              </Text>
            </FlexRow>
            {state.orders?.userOrder?.order?.orderItems?.map((item) => (
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
                      {item.price} <Span margin="0 0 0 10px">× {item.qty}</Span>
                    </Text>
                    <Text color="#242424" weight="700">
                      {(item.price * item.qty).toFixed(2)}
                    </Text>
                  </FlexRowBetween>
                </FlexColAlignStart>
              </FlexRow>
            ))}
            {state.orders.userOrder.order.isPaid ? (
              <Success message="Paid!"/>
            ) : (
              <Failed message="Not Paid!"/>
            )}
            {state.orders.userOrder.order.isDelivered ? (
              <Success message="Delivered!"/>
            ) : (
              <Failed message="Not Delivered!"/>
            )}
          </OrderDetail>
        </Shipping>

        {/* Right Side */}
        <StyledOrder>
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
                  {state.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Tax</Textwidth30>
                <TextFlexEnd>$0</TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Textwidth30>Shipping</Textwidth30>
                <TextFlexEnd>
                  {state.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </TextFlexEnd>
              </FlexRowBetween>
              <FlexRowBetween margin="0 0 16px">
                <Text width="30%" weight="700">
                  Total
                </Text>
                <TextFlexEndBlack>
                  $
                  {state.orders?.userOrder?.order?.orderItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </TextFlexEndBlack>
              </FlexRowBetween>
            </FlexCol>
            {state.orders.placeOrder.error && (
              <ErrorMessage>{state.orders.placeOrder.error}</ErrorMessage>
            )}
            {!state.orders.userOrder.order.isPaid && (
            <FlexRow style={{ width: "100%", margin: "40px auto" }}>
              <PayPalButton
                amount={state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  dispatch(
                    payOrder(props.match.params.id, {
                      email_address: details.payer.email_address,
                      status: details.status,
                      create_time: details.create_time,
                      update_time: details.update_time,
                      id: details.id,
                    })
                  );
                }}
                onError={(error) => {
                  console.log(error);
                }}
                options={{
                  clientId:
                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                }}
              />
            </FlexRow>
          )}
        </StyledOrder>
      </Container>
    </InnerSection>
  );
}

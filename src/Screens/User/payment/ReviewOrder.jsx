import { Form, Formik } from "formik";
import { Text, FlexRow, Span, FlexCol, Hr, Image } from "../../../App.style";
import {
  OrederContainer,
  ErrorMsg,
  FormikBox,
  SlideRightFormik,
  InputBox,
  InputField,
  TowField,
  SlideLeftFormik,
  ContainerButton
} from "./ReviewOreder.Style";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../../../Redux/Cart/cartActions";
import { useHistory } from "react-router";
import { ShippingSchema } from "./ShemaPayment";

export default function ReviewOrder() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const handleSaveShipping = (value) => {
    dispatch(addShippingAddress(value));
    history.push("/proceedCheckout/placeOrder");
  };

  return (
    <OrederContainer>
      <Formik
        initialValues={{
          country: state.cart.shippingAddress.country || "",
          city: state.cart.shippingAddress.city || "",
          address: state.cart.shippingAddress.address || "",
          postalCode: state.cart.shippingAddress.postalCode || "",
        }}
        validationSchema={ShippingSchema()}
        onSubmit={handleSaveShipping}
      >
        {({ errors, touched }) => {
          return (
            <Form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "row",
              }}
            >
              <FlexCol margin="44px 0 0 0" align="flex-start" width="100%">
                <FormikBox>
                  <SlideRightFormik>
                    <Text fontSize="32px" weight="700" marginA="0 0 16px">
                      Shipping Address
                    </Text>
                    <InputBox>
                      <TowField>
                        <Text
                          fontSize="22px"
                          color="#707070"
                          weight="700"
                          marginA="0 0 16px"
                        >
                          Country
                        </Text>
                        <InputField
                          name={"country"}
                          type={"text"}
                          placeholder={"Enter your country .."}
                        />
                        {errors.country && touched.country ? (
                          <ErrorMsg>{errors.country}</ErrorMsg>
                        ) : null}
                      </TowField>
                      <TowField>
                        <Text
                          fontSize="22px"
                          color="#707070"
                          weight="700"
                          marginA="0 0 16px"
                        >
                          City
                        </Text>
                        <InputField
                          name={"city"}
                          type={"text"}
                          placeholder={"Enter your city .."}
                        />
                        {errors.city && touched.city ? (
                          <ErrorMsg>{errors.city}</ErrorMsg>
                        ) : null}
                      </TowField>
                    </InputBox>
                    <InputBox>
                      <TowField>
                        <Text
                          fontSize="22px"
                          color="#707070"
                          weight="700"
                          marginA="0 0 16px"
                        >
                          Zip Code
                        </Text>
                        <InputField
                          name={"postalCode"}
                          type={"number"}
                          placeholder={"Zip code"}
                        />
                        {errors.zipCode && touched.zipCode ? (
                          <ErrorMsg>{errors.zipCode}</ErrorMsg>
                        ) : null}
                      </TowField>
                      <TowField>
                        <Text
                          fontSize="22px"
                          color="#707070"
                          weight="700"
                          marginA="0 0 16px"
                        >
                          Street Address
                        </Text>
                        <InputField
                          name={"address"}
                          type={"text"}
                          placeholder={"Enter your Address .."}
                        />
                        {errors.address && touched.address ? (
                          <ErrorMsg>{errors.address}</ErrorMsg>
                        ) : null}
                      </TowField>
                    </InputBox>
                  </SlideRightFormik>

                  <SlideLeftFormik>
                    <FlexRow
                      justify="space-between"
                      align="baseline"
                      padding="35px 22px 22px 22px"
                    >
                      <Text fontSize="32px" weight="700" marginA="0 0 20px 0">
                        Order Details
                      </Text>
                      <Text
                        borderB=" 1px solid #707070"
                        color="#70707095"
                        fontSize="22px"
                        weight="700"
                      >
                        Change
                      </Text>
                    </FlexRow>
                    {state.cart.cart.map((item, index) => (
                      <>
                        <FlexRow margin="0 0 20px" height="130px">
                          <Image
                            src={
                              "https://proshop-ms.herokuapp.com/" + item.image
                            }
                            width="135px"
                          />
                          <FlexCol padding="0 22px 35px 22px">
                            <Text
                              align="flex-start"
                              color="#70707095"
                              fontSize="22px"
                              weight="700"
                              marginA="0 0 40px"
                            >
                              {item.name}
                            </Text>
                            <FlexRow justify="space-between">
                              <Text
                                color="#70707095"
                                fontSize="22px"
                                weight="700"
                              >
                                ${item.price}{" "}
                                <Span margin="0 0 0 10px">
                                  ×{item.quantity}
                                </Span>
                              </Text>
                              <Text
                                color="#242424"
                                fontSize="22px"
                                weight="700"
                              >
                                ${(item.price * item.quantity).toFixed(2)}
                              </Text>
                            </FlexRow>
                          </FlexCol>
                        </FlexRow>
                        {/* {index == state.cart.cart.length-1 ? "" : <Hr/>} */}
                        <Hr />
                      </>
                    ))}

                    <FlexCol padding="10px 22px">
                      <FlexRow justify="space-between" margin="0 0 16px">
                        <Text
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          Subtotal
                        </Text>
                        <Text
                          justify="flex-end"
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          $589.98
                        </Text>
                      </FlexRow>
                      <FlexRow justify="space-between" margin="0 0 16px">
                        <Text
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          Tax
                        </Text>
                        <Text
                          justify="flex-end"
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          $2.53
                        </Text>
                      </FlexRow>
                      <FlexRow justify="space-between" margin="0 0 16px">
                        <Text
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          Shipping
                        </Text>
                        <Text
                          justify="flex-end"
                          width="30%"
                          color="#70707095"
                          fontSize="16px"
                          weight="700"
                        >
                          $0.00
                        </Text>
                      </FlexRow>
                      <FlexRow justify="space-between" margin="0 0 16px">
                        <Text width="30%" fontSize="16px" weight="700">
                          Total
                        </Text>
                        <Text
                          justify="flex-end"
                          width="30%"
                          fontSize="16px"
                          weight="700"
                        >
                          $
                          {state.cart.cart
                            .reduce((acc, item) => {
                              return acc + item.price * item.quantity;
                            }, 0)
                            .toFixed(2)}
                        </Text>
                      </FlexRow>
                    </FlexCol>
                  </SlideLeftFormik>
                </FormikBox>
                <ContainerButton>
                  <Button text="Review order"></Button>
                </ContainerButton>
              </FlexCol>
            </Form>
          );
        }}
      </Formik>
    </OrederContainer>
  );
}
